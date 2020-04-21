import { BooksRepository } from "../repositories/booksRepository";
import IBook from "../model/IBook";
import Book from "../model/Book";

export class BookService {
  constructor(private booksRepository: BooksRepository) {}

  async getBooks() {
    return await this.booksRepository.find({});
  }

  async getBookById(id: string) {
    return await this.booksRepository.findOne({ _id: id });
  }

  async createBook(bookDto: IBook) {
    const book = new Book(bookDto);
    return await this.booksRepository.insert(book);
  }

  async getBookByFilter(filterBook: IBook) {
    return await this.booksRepository.findOne(filterBook);
  }

  async delete(id: string) {
    const book = await this.booksRepository.findById(id);
    if (!book) {
      throw new Error("Book not found");
    }
    return this.booksRepository.delete(book);
  }

  async update(id: string, bookDto: IBook) {
    const book = await this.booksRepository.findById(id);
    if (!book) {
      throw new Error("Book not found");
    }
    return this.booksRepository.update(book);
  }
}
