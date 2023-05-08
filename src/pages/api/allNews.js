import clientPromise from "../../lib/mongodb";

async function handler(req,res){
    
    const client = await clientPromise;
    const db = client.db("news");
    const news = await db.collection("news").find({}).limit(20).toArray();
    res.json(news);
    
}

export default handler;