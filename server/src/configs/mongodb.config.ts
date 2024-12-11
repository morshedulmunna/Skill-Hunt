import { MongoClient, Db } from "mongodb";

async function mongoDbConnectionFn() {
  const uri: string = process.env.MONGODB_URI || "";

  try {
    const client = new MongoClient(uri);
    await client.connect();
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

export default mongoDbConnectionFn;
