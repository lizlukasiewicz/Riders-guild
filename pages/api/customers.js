// import { connectToDatabase } from "../../lib/mongodb";

// export default async (req, res) => {
//     const { db } = await connectToDatabase();

//     const customers = await db
//         .collection("customers")
//         .find({})
//         .sort({ metacritic: -1 })
//         .limit(20)
//         .toArray();

//   res.json(customers);
// }