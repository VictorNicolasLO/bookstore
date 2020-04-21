import KoaRouter from "koa-router";
import { BookService } from "../services/bookService";
import { BooksRepository } from "../repositories/booksRepository";
import { MongoDriver } from "../db-drivers/mongo-driver";
const koaRouter = new KoaRouter();
const mongoDriver = new MongoDriver("books");
const booksRepository = new BooksRepository(mongoDriver);
const booksService = new BookService(booksRepository);

koaRouter.post("/", async (ctx) => {
  try {
    ctx.body = await booksService.createBook(ctx.request.body);
  } catch (e) {
    console.log(e);
    ctx.status = 400;
    ctx.body = {
      success: false,
      message: e.message,
      trace: e,
    };
  }
});

koaRouter.get("/", async (ctx) => {
  try {
    ctx.body = await booksService.getBooks();
  } catch (e) {
    ctx.status = 400;
    console.log(e);
    ctx.body = {
      success: false,
      message: e.message,
    };
  }
});

koaRouter.get("/:id", async (ctx) => {
  try {
    ctx.body = await booksService.getBookById((ctx.request as any).params.id);
  } catch (e) {
    console.log(e);
    ctx.status = 400;
    ctx.body = {
      success: false,
      message: e.message,
    };
  }
});

koaRouter.delete("/:id", async (ctx) => {
  try {
    ctx.body = await booksService.delete((ctx.request as any).params.id);
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      message: e.message,
    };
  }
});

koaRouter.patch("/:id", async (ctx) => {
  try {
    ctx.body = await booksService.update(
      (ctx.request as any).params.id,
      ctx.request.body
    );
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      message: e.message,
    };
  }
});

export { koaRouter };
