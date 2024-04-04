import express from "express";
import { createUser, findUserByEmail } from "../services/user";
import bcrypt from "bcrypt";

export const registerUser = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password, name, role } = req.body;

        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({
                messages: {
                    code: 1,
                    message: "User already exists",
                },
                response: {}
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser(email, hashedPassword, name, role);
        res.status(201).json({
            messages: {
                code: 0,
                message: "User created successfully",
            },
            response: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({
            messages: {
                code: 1,
                message: error
            },
            response: {}
        });
    }
}

export const loginUser = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (user) {
            if (passwordMatch) {
                res.status(200).json({
                    messages: {
                        code: 0,
                        message: "User logged in successfully",
                    },
                    response: {
                        _id: user._id,
                        email: user.email,
                        name: user.name,
                        role: user.role
                    }
                });
            } else {
                res.status(401).json({
                    messages: {
                        code: 1,
                        message: "Invalid email or password",
                    },
                    response: {}
                });
            }
        } else {
            res.status(401).json({
                messages: {
                    code: 1,
                    message: "Invalid email or password",
                },
                response: {}
            });
        }
    } catch (error) {
        res.status(500).json({
            messages: {
                code: 1,
                message: error
            },
            response: {}
        });
    }
}