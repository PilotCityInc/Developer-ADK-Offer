export default interface MongoDoc {
  data: {
    adks: Record<string, any>[];
  };
  update: (shouldMarkAsComplete?: any) => Promise<any>;
  changeStream: any;
}
