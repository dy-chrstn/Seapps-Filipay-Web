import express from "express";
import jwt from "jsonwebtoken";
import basicAuth from "express-basic-auth";

import { createToken } from "../services/token";

export const getToken = async (req: basicAuth.IBasicAuthedRequest, res: express.Response) => {
  try {
    const user = req.auth.user;
    const password = req.auth.password;

    let TokenData = {
      email: user,
      password: password,
    }

    const token = jwt.sign(TokenData, process.env.SECRET_KEY, {
      expiresIn: "1m",
    });

    try {
      const newToken = await createToken(token);

      return res.status(200).json({
        messages: {
          code: 0,
          message: "Token created",
        },
        response: newToken
      });

    } catch (error) {
      console.log(error);
      return res.sendStatus(400).json({
        messages: {
          code: 1,
          message: "Invalid credentials",
        }
      });
    }

  } catch (error) {
    console.log(error);
    return res.sendStatus(400).json({
      messages: {
        code: 1,
        message: "Invalid credentials",
      },
      response: {}
    });
  }
};