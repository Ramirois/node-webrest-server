import { Router } from "express";
import { TodosController } from "./controller/controller";
import { TodoRoutes } from "./controller/routes";


export class AppRoutes{
    static get routes():Router{
        const router = Router();
        router.use('/api/todos', TodoRoutes.routes);

        return router;
    }
}