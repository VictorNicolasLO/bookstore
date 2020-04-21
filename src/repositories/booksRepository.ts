import IBook from "../model/IBook";
import { GenericRepository } from "./generic-repository";
import { DbDriver } from "../db-drivers/db-driver";
import Book from "../model/Book";

export class BooksRepository extends GenericRepository<Book> {
  constructor(driver: DbDriver<Book>) {
    super(driver);
  }
  // More queries, insert types etc...
}
