export default interface MongoDoc {
  data: {
    adks: Record<string, any>[];
  };
  update: () => Promise<any>;
  changeStream: any;
}
