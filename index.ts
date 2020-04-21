import Koa from "koa";
import { MongoDriver } from "./src/db-drivers/mongo-driver";
import { koaRouter as booksRouter } from "./src/routers/bookRouter";
import bodyparser from "koa-bodyparser";
const app = new Koa();

MongoDriver.init("mongodb://localhost");
app.use(bodyparser());
app.use(booksRouter.prefix("/books/v1").routes());
app.listen(3000);

// TAREA: completar el codigo para responder un json book en base a un id en un browser, asi:
// http://localhost:3000/book/<:id>
