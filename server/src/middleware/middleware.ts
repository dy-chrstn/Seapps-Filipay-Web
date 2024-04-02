// require("dotenv").config();
import basicAuth from "express-basic-auth";
import { getToken } from "../services/token";
import express from "express";

export const isAuthorized = basicAuth({
  authorizeAsync: true,
  authorizer: async (username: string, password: string, cb: any) => {
    try {
      // console.log(username, password);
      // console.log(process.env.USERNAME, process.env.PASSWORD);
      if (
        username === process.env.USERNAMEE &&
        password === process.env.PASSWORD
      ) {
        return cb(null, true);
      } else {
        return cb(null, false, { message: "Invalid credentials", status: 401 });
      }
    } catch (error) {
      return cb(error);
    }
  },
  challenge: true, // Sends a 401 Unauthorized response automatically
  unauthorizedResponse: () => {
    return {
      messages: {
        code: 1,
        message: "Unauthorized",
      },
      response: {}
    };
  },
});

export const tokenAuth = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({
        messages: {
          code: 1, message: "Unauthorized access"
        },
        response: {}
      });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({
        messages: {
          code: 1, message: "Bearer token is missing"
        },
        response: {}
      });
  }

  try {
    const existingToken = await getToken(token);

    if (!existingToken) {
      return res
        .status(401)
        .json({
          messages: {
            code: 1,
            message: "Token no similarities"
          },
          response: {}
        });
    }

    next();
  } catch (error) {
    return res
      .status(401)
      .json({
        messages: { code: 1, message: "Invalid token" },
        response: { token: token }
      });
  }
};

export const checkCredentials = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileNumberRegex = /^(09|\+639)\d{9}$/;
  const passwordRegex = /^.{8,}$/;

  if (emailRegex.test(email)) {
    if (!passwordRegex.test(password)) {
      return res
        .status(401)
        .json({
          messages: { code: 1, message: "Password must be at least 8 characters" },
          response: {}
        });
    }
  } else if (mobileNumberRegex.test(email)) {
    if (!passwordRegex.test(password)) {
      return res
        .status(401)
        .json({
          messages: { code: 1, message: "Password must be at least 8 characters" },
          response: {}
        });
    }
  } else {
    return res
      .status(401)
      .json({
        messages: { code: 1, message: "Invalid email or password" },
        response: {}
      });
  }

  next();
};
