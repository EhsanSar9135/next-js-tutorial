import { connectToDB } from "../database/mongoDB/db";

export const getAll = async (collection) => {
   let mongoClient;

   try {
      mongoClient = await connectToDB();
   } catch (error) {
      return { message: 'Sorry, try again later' };
   }

   const db = mongoClient.db();
   const documents = await db.collection(collection).find().toArray();

   return documents;
};
