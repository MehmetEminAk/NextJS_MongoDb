import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

const handler = async (req,res) => {
    const {id} = req.body;
    const client = await clientPromise;
    const db = client.db("news");
    await db.collection("news").deleteOne({_id : new ObjectId(id)});
    console.log("Deleting is success");

}
export default handler;