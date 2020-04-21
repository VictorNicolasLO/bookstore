import mongoose, { Schema, Model } from "mongoose";
import { DbDriver } from "./db-driver";

export class MongoDriver<T> extends DbDriver<T> {
  collection: Model<any>;
  constructor(collection: string) {
    super();
    const customSchema = new Schema({}, { strict: false });
    this.collection = mongoose.model(collection, customSchema);
  }

  static init(url: string) {
    mongoose.connect(url, (err) => {
      if (!err) {
        console.log("MONGO RUNNING");
      } else {
        console.log(err);
      }
    });
  }

  async findOne(filter: any): Promise<any> {
    return this.collection.findOne(filter);
  }
  async find(filter: any): Promise<any[]> {
    return this.collection.find(filter);
  }
  async insert(data: any): Promise<any> {
    console.log(this.collection);
    return this.collection.create(data);
  }
  async update(data: any): Promise<any> {
    return this.collection.update(data._id, data);
  }
  async delete(data: any): Promise<any> {
    return this.collection.deleteOne(data._id);
  }
  async findById(id: string) {
    return this.collection.findById(id);
  }
}
