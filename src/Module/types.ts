export default interface MongoDoc {
  data: {
    adks: Record<string, any>[];
  };
  save: () => Promise<any>;
  changeStream: any;
}
