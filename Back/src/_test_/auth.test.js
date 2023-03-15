import chai from "chai";
import {expect} from "chai";
import chaiHttp from "chai-http";
import app from "../server";

chai.expect();
chai.use(chaiHttp);
jest.setTimeout(50000);
chai.should();


describe("Testing Auth routes", () =>{
    it("should register a user.", async () =>{
        const res = await chai.request(app).post("/signup").send({
            FullName: "testFullName",
            email: "djany@gmail.com",
            phone: "test0788300360",
            password: "123",

        });
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.a("object");
    });
    it("should get All user", async () => {
        const res = await 
        chai.request(app)
        .get("/users")
        expect(res.status).to.be.equal(200);

    });
    
    it("should login user.", async () => {
        const res = await
        chai.request(app).post("/login").send({
            email: "lilys@gmail.com",
            password: "123"
        });
        expect(res.status).to.be.equal(200);
    });
});
