import { Express, NextFunction, Request, Response} from "express";
import configuration from "./infrastructure/config/config";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");

const port = configuration.util.port;

const bookRouter = require("./infrastructure/routes/Books");
const memberRouter = require("./infrastructure/routes/Members");
const recordRouter = require("./infrastructure/routes/Records");

startExpress();

function startExpress() {

    const app: Express = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/books", bookRouter);
    app.use("/members", memberRouter);
    app.use("/records", recordRouter);

    app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
        const statusCode = err.statusCode || 500;
        console.error(err.message, err.stack);
        res.status(statusCode).json({ message: err.message });
        return;
    });

    const options = configuration.swagger
      
    const specs = require("./swagger.json");
    app.use( "/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });

}