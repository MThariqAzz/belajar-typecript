import { Request, Response, Router } from "express";

const productRouter =Router()

productRouter.get("/", (req:Request, res:Response) => {
    res.status(200).send({mesage:"Hello World"})
})

export default productRouter