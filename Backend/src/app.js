import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";



const app = express()
const allowOrigin = process.env.CORS_ORIGIN

app.use(cors({
    origin : allowOrigin,
    credentials : true,
    methods : ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders : ["Content-type", "Authorization"]
}))


app.options("*", cors());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


export { app };