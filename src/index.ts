import express, { Application, Request, Response } from "express";
const app:Application  = express()


app.get('/', (req: Request, res: Response) => {
    res.status(200).send('hi')
})


app.listen(3000, () => {
    console.log('server connected'); 
})