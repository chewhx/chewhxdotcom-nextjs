import { MongoClient, ObjectId } from "mongodb";
import dayjs from "dayjs";

const mongo = new MongoClient(process.env.MONGO_URI || "");

const collection = mongo
  .db(process.env.MONGO_DB)
  .collection("booknotes_emails");

export default mongo;

export const getBookHighlightById = async (id: string) => {
  await mongo.connect();
  const hl = await collection.findOne({ _id: new ObjectId(id) });
  await mongo.close();
  return {
    id: hl?._id.toString(),
    htmlText: hl?.htmlText,
    author: hl?.author,
    title: hl?.title,
    bookCover: hl?.bookCover,
    date: dayjs(hl?.date).format("DD MMM YYYY"),
  };
};

export const getBookHighlights = async () => {
  await mongo.connect();
  const hls = await collection.find({}).toArray();
  await mongo.close();
  return hls.map((hl) => ({
    id: hl?._id.toString(),
    htmlText: hl?.htmlText,
    author: hl?.author,
    title: hl?.title,
    bookCover: hl?.bookCover,
  }));
};
