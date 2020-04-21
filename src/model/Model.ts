export class BaseModel {
  // como hacer para que acepte un dto y llamarlo con un super en la clase heredada
  version: number = 0;
  Name: string = "";
  _id!: string;
  constructor(dto: any) {
    this.fromDto(dto);
  }

  fromDto(dto: any) {
    Object.keys(dto).forEach((key) => {
      (this as any)["_" + key] = dto[key];
    });
  }
}
