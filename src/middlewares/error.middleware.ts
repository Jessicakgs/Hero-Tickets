import { NextFunction, Request, Response } from "express";
import { HttpException } from "../interfaces/HttpsException";

export function errorMiddleware(
err: HttpException,
req: Request,
res: Response, 
next: NextFunction
){
    const status: number = err.status
    const message: string = err.message

    res.status(status).json({
        status,
        message,
    });

}