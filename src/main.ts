import { Server } from "./core/presentation/server/index";
import { DatabaseConnection } from "./core/infra/database/connections/database-connection";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

DatabaseConnection.initialize().then(Server.initialize);
