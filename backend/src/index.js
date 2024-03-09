import { app } from './app.js';
import dbConnect from "./db/index.js";
import "dotenv/config";

dbConnect().then(()=> app.listen(process.env.PORT || 8000 ,() => console.log(`Server started on PORT : ${process.env.PORT}`)))
.catch(err => console.err('DB connection failed' ,err));




