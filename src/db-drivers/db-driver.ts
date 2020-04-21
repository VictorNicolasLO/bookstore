export abstract class DbDriver<T> {
  abstract async findOne(filter: T): Promise<T>;
  abstract async findById(id: string): Promise<T>;
  abstract async find(filter: T): Promise<T[]>;
  abstract async insert(data: T): Promise<T>;
  abstract async update(data: T): Promise<T>;
  abstract async delete(data: T): Promise<T>;
}
