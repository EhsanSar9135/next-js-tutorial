import mongoose from 'mongoose';

export const connectToDB = async () => {
   if (mongoose.connection.readyState > 0) return;
   const { DB_USER, DB_PASSWORD } = process.env;

   return mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.4tqsn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         bufferCommands: false,
         bufferMaxEntries: 0,
         useFindAndModify: true,
         useCreateIndex: true,
      }
   );
};
