import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const { newTitle, newBody, newAuthor , newCategory } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db("news");

    const result = await db.collection("news").insertOne({
      title : newTitle,
      content : newBody,
      author : newAuthor,
      category : newCategory
    });

    res.status(200).json({ message: "New added successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong." });
  }
}