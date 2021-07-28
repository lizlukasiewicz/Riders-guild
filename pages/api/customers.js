// import { connectToDatabase } from "../../lib/mongodb";

// export default async (req, res) => {
//     const { db } = await connectToDatabase();

//     const marketplace = await db
//         .collection("marketplace")
//         .find({})
//         .sort({ metacritic: -1 })
//         .limit(20)
//         .toArray();

//   res.json(marketplace);
// }