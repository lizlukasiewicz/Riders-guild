// import { connectToDatabase } from "../../lib/mongodb";

// export default async (req, res) => {
//     const { db } = await connectToDatabase();

//     const marketplace = await db
//         .collection("marketplace")
//         .find({})
//         .sort({ metacritic: -1 })
//         .limit(20)
//         .toArray();
//         //⤴️ actually gets the json documents that you wanna work with

//   res.json(marketplace);
// }

// export default async function handler(req, res) {
//     const { db } = await connectToDatabase();

//     const data = await db.collection("marketplace").find({}).limit(20).toArray()
//     res.json(data)
// }