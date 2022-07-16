import express from 'express';
import { createServer } from 'http';
import controllerRoute from "./routes/router.js"
import cors from "cors";

const app = express();

const httpServer = createServer(app);
const port = 5000;

app.use(cors())
app.use(express.json())
app.use('/api', controllerRoute);

httpServer.listen(port,()=>{
    console.log(`Server is running at port:${port}`)
})