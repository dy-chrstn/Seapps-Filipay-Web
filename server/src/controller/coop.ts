import express from "express";
import { createCoop, findCoopByEmail, updateCoopById } from "../services/coop";
import bcrypt from "bcrypt";

export const registerCoop = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password, coopName, coopCode, pages, accountType } = req.body;        

        if(accountType !== "user" && accountType !== "userAdmin" && accountType !== "administrator") {
            return res.status(401).json({
                messages: {
                    code: 1,
                    message: "Invalid account type",
                },
                response: {}
            });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const existingCoop = await findCoopByEmail(email);
        if (existingCoop) {
            return res.status(409).json({
                messages: {
                    code: 1,
                    message: "Email already exists",
                },
                response: {}
            });
        }

        const newCoop = await createCoop(email, hashedPassword, coopName, coopCode, pages, accountType);

        res.status(201).json({
            messages: {
                code: 0,
                message: "Coop created successfully",
            },
            response: {
                _id: newCoop._id,
                email: newCoop.email,
                coopName: newCoop.coopName,
                coopCode: newCoop.coopCode,
                pages: newCoop.pages,
                accountType: newCoop.accountType
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

export const loginCoop = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body;
        const user = await findCoopByEmail(email);
        if (!user) {
            return res.status(401).json({
                messages: {
                    code: 1,
                    message: "User not found",
                },
                response: {}
            });
        }
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
                        coopName: user.coopName,
                        coopCode: user.coopCode,
                        pages: user.pages,
                        accountType: user.accountType
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

export const updateCoop = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { email, password, coopName, coopCode, pages, accountType } = req.body;

        if(accountType !== "user" && accountType !== "userAdmin" && accountType !== "administrator") {
            return res.status(401).json({
                messages: {
                    code: 1,
                    message: "Invalid account type",
                },
                response: {}
            });
        }        

        const hashedPassword = await bcrypt.hash(password, 10);

        const updatedCoop = await updateCoopById(id, { email, password: hashedPassword, coopName, coopCode, pages, accountType });

        res.status(200).json({
            messages: {
                code: 0,
                message: "Coop updated successfully",
            },
            response: {
                _id: updatedCoop._id,
                email: updatedCoop.email,
                coopName: updatedCoop.coopName,
                coopCode: updatedCoop.coopCode,
                accountType: updatedCoop.accountType
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