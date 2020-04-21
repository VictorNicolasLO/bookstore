import { DbDriver } from "../db-drivers/db-driver";

export class GenericRepository<T> {
  find: (filter: any) => Promise<T[]>;
  findById: (id: string) => Promise<T | undefined>;
  findOne: (filter: any) => Promise<T | undefined>;
  insert: (filter: T) => Promise<T>;
  update: (filter: T) => Promise<T>;
  delete: (data: T) => Promise<T | undefined>;
  constructor(private driver: DbDriver<T>) {
    this.find = (filter) => driver.find(filter);
    this.findOne = (filter) => driver.findOne(filter);
    this.findById = (id) => driver.findById(id);
    this.insert = (data) => driver.insert(data);
    this.update = (data) => driver.update(data);
    this.delete = (data) => driver.delete(data);
  }
}
