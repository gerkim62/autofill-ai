import { addUsersToMongoDB } from "@/libs/mongodb";
import { NextResponse } from "next/server";

async function GET() {
   try {
     const oldDbUsers = await getOldDbUsers();

     console.log("got users from old db")
 
    const result= await addUsersToMongoDB(oldDbUsers as User[]);
    console.log("added users to new db")

    const counts = {
      invalidUsers: result.invalidUsers.length,
      succeededUsers: result.succeededUsers.length,
      wasExistingUsers: result.wasExistingUsers.length,
    };

     return NextResponse.json({ status: "ok", message: "Data successfully populated to MongoDB.", counts });
   } catch (error) {
    console.error("Error populating data to MongoDB:", error);
     return NextResponse.error()
   }
}

async function getOldDbUsers() {
  const url = "https://af-tinypesa-webhook.onrender.com/users";

  console.log(`fetching data from ${url}`);

  const response = await fetch(url);
  console.log(`got response ${response.status} ${response.statusText}`);
  const data = await response.json();

  const users = Object.values(data);

  return users;
}

export { GET };