import express from "express";
import passport from "passport";
import setupJWTStrategy from "./auth/index.js";
import todoRouter from "./routes/todo.js"
import authRouter from "./routes/auth.js"


export default function createServer(){
    const app = express();

    //need middleware to handle json!!!
    app.use(express.json());

    // app.get("/", (_request, response) => {
    //     response.status(200).json({
    //         success: false,
    //     });
    // });

    //run it and runs passport and adds the strategy that we made onto what we have
    setupJWTStrategy(passport);

    //signup and login routes
    app.use("/auth", authRouter);

    //adding todo routes for adding and deleting, etc
    app.use("/todo", todoRouter);


    return app;
}