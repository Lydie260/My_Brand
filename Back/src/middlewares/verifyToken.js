import Response from "../utilis/response";
import status from "http-status";
import { decodeToken } from "../utilis/token";
import userModel from "../models/userModel";


export const verifyUserToken = async(req,res,next) =>{
    try{
        const token =
        req.header("auth-token") ||
        req.params["auth-token"] ||
        req.body.token ||
        req.query["auth-token"];
        if(!token) {
            return Response.errorMessage(res, "No token provided", status.NOT_FOUND);

        } 
        const payload = decodeToken(token);
        const {name} = payload;
        if(name === "jsonWebTokenError"){
            return Response.errorMessage(
                res,
                "unauthorized, invalid token", status.UNAUTHORIZED

            );
        }else if(name === "TokenExpiredError"){
            return Response.errorMessage(
                res,
                "Token Expired, invalid token", status.UNAUTHORIZED

            );
        }
        const user = await userModel.findOne({_id: payload?.user?._id}).select(
            "_password"
        );
        if(!user){
            return Response.errorMessage(
                res,
                "User from token does not exist, invalid token",
                status.UNAUTHORIZED
            );
        }
        req.user = user;
        req.token = token;
        req.body.user = user._id;
        return next();
    }catch (error){
        return Response.errorMessage(
            res,
            "Failed to verify token !",
            status.INTERNAL_SERVER_ERROR
        );
    }
};