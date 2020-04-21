import assert from "assert";
import IBook from "./IBook";
import { BaseModel } from "./Model";

export default class Book extends BaseModel implements IBook {
  private _author!: string;
  private _title!: string;
  private _publisher!: string;
  private _age!: number;

  constructor(dto: IBook) {
    // Validaciones de inicializacion
    assert(dto.author, "Author property not found");
    assert(typeof dto.author === "string", "Author must be string");
    super(dto);
  }

  get author() {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get title() {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get publisher() {
    return this._publisher;
  }

  set publisher(value: string) {
    this._publisher = value;
  }

  get age() {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}
