import { Router } from "express";
import { serve,setup } from "swagger-ui-express";
//const { serve, setup } = require("swagger-ui-express");
const docrouter = Router();
import dotenv from "dotenv";
dotenv.config();
const options = {
  openapi: "3.0.1",
  info: {
    title: "My Brand",
    version: "1.0.0",
    description: "My Protofolio Backend.",
  },
  basePath: "/",
  security: [
    {
      bearerAuth: [],
    },
  ],
  tags: [
    { name: "Users", description: "Users" },
    { name: "Blog", description: "Blogs" },
  ],
  paths: {
    "/signup": {
      post: {
        tags: ["Users"],
        description: "User SigUp",
        security: [],
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              example: {
                fullName: "Admin",
                email: "admin@gmail.com",
                phone: "0123456789",
                password: "12345",
              },
            },
          },
          required: true,
        },
        responses: {
          201: {
            description: "New User was created successfully",
          },
          400: {
            description: "Bad Request",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/login": {
      post: {
        tags: ["Users"],
        description: "User login",
        security: [],
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              example: {
                email: "admin@gmail.com",
                password: "123456",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "successfully",
          },
          400: {
            description: "Invalid credation",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/users": {
        get: {
          tags: ["Users"],
          description: "Get All users",
          description:"This Api is used get All user from mongooDb ",
          parameters: [],
          security: [],
          responses: {
            200: {
              description: "successfully",
            },
            500: {
              description: "Internal Server Error",
            },
          },
        },
      },
      "/user/{id}":{
        get: {
          security: [],
          tags: ["Users"],
          description: "Get One user by id",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
            },
          ],
          responses: {
            200: {
              description: "successfully",
            },
            500: {
              description: "Internal Server Error",
            },
          },
        },
      },

    "/user/update/{id}": {
      put: {
        tags: ["Users"],
        description: "Update user",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              example: {
                fullName: "Admin",
                email: "admin@gmail.com",
                phone: "0123456789",
                password: "12345",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "successfully",
          },
          401: {
            description: "User Not Authorized",
          },
          404: {
            description: "Article doesn't exist!",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },



    "/user/delete/{id}": {
        delete: {
          tags: ["Users"],
          description: "Delete User",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
            required: true,
          },
          responses: {
            200: {
              description: "successfully",
            },
            401: {
              description: "User Not Authorized",
            },
            404: {
              description: "Article doesn't exist!",
            },
            500: {
              description: "Internal Server Error",
            },
          },
        },
      },



// Blog

"/api/create-blog": {
  post: {
    tags: ["Blog"],
    description: "Create new blog article",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Blog",
          },
        },
      },
      required: true,
    },
    responses: {
      200: {
        description: "successfully",
      },
      401: {
        description: "User Not Authorized",
      },
      500: {
        description: "Internal Server Error",
      },
    },
  },
},

    "/api/get-all-blogs": {
      get: {
        tags: ["Blog"],
        description: "Get All Blog Articles",
        parameters: [],
        security: [],
        responses: {
          200: {
            description: "successfully",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/get-one-blog": {
      get: {
        tags: ["Blog"],
        description: "Get All Blog Articles",
        parameters: [],
        security: [],
        responses: {
          200: {
            description: "successfully",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/update/{id}": {
      put: {
        tags: ["Blog"],
        description: "Update blog article",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Blog",
              },
              example: {
                title: "testing blog article title update",
                content: "testing blog article content update",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "successfully",
          },
          401: {
            description: "User Not Authorized",
          },
          404: {
            description: "Article doesn't exist!",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/delete-blog/{id}": {
      delete: {
        tags: ["Blog"],
        description: "Delete blog ",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Blog",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "successfully",
          },
          401: {
            description: "User Not Authorized",
          },
          404: {
            description: "Article doesn't exist!",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    
  },
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "The auto-generated id of the user",
          },
          fullName: {
            type: "string",
            description: "User's name",
          },
          email: {
            type: "string",
            description: "User's email",
          },
          phone: {
            type: "string",
            description: "User's Phone",
          },
          password: {
            type: "string",
            description: "User's password",
          },
          role: {
            type: "string",
            description: "User role",
            role:"users",
            enum:"admin,user",
            default:"user"
          },
        },
      },
      Blog: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description: "Article title",
          },
          content: {
            type: "string",
            description: "Article content",
          },
          image: {
            type: "string",
            description: "Article image url",
            format: "binary",
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};
 export default docrouter.use("/", serve, setup(options));
//module.exports = docrouter;