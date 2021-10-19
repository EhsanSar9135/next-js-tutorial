import { MongoClient } from 'mongodb';

export const connectToDB = async () => {
   const { DB_USER, DB_PASSWORD } = process.env;
   const dbClient = await MongoClient.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.4tqsn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
   );
   return dbClient;
};
