import { connectMongoDB, addUsersToMongoDB } from "@/libs/mongodb";
import User from "@/models/user";

import { NextResponse } from "next/server";

async function POST(req: Request) {
  const { users } = await req.json();

  console.log(users);

  console.log("Populating data to MongoDB...");

  await addUsersToMongoDB(users);

  console.log("Data successfully populated to MongoDB.");

  return NextResponse.json({ status: "ok" });
}

async function GET() {
  await connectMongoDB();
  //fetch all users from mongodb
  const users =await User.find();

  return NextResponse.json(users);
}

export { POST, GET };
