import User from "@/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const MONGODB_URI = process.env.MONGODB_URI;

const connectMongoDB = async () => {
  try {
    if (!MONGODB_URI) throw new Error("MongoDB URI is not defined");
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

async function addUsersToMongoDB(users: User[]) {
  const invalidUsers = [];
  const succeededUsers = [];
  const wasExistingUsers = [];

  try {
    await connectMongoDB();

    const usernames = users.map((user) =>
      decodeURIComponent(user.username).trim().toLowerCase()
    );

    const existingUsers = await User.find({ username: { $in: usernames } });

    for (const data of users) {
      const {
        username: rowUsername,
        password,
        createdAt,
        paidQuizIds,
        fullName,
        ...rest
      } = data;
      const username = decodeURIComponent(rowUsername).trim().toLowerCase();

      if (existingUsers.some((user) => user.username === username)) {
        wasExistingUsers.push(data);
        console.log("User already exists, skipping...", username);
        continue;
      }

      if (!username || !password) {
        invalidUsers.push(data);
        console.log(
          "Username or password is not defined, skipping...",
          username
        );
        continue;
      }

      succeededUsers.push(data);

      const user = new User({
        username,
        password,
        createdAt: new Date(createdAt).getTime(),
        paidQuizIds: paidQuizIds || [],
        fullName: fullName || "",
        ...rest,
      });

      if (!user.fullName) {
        user.fullName = "";
      }

      console.log("Saving user...", username);

      await user.save();
    }

    console.log("Data successfully populated to MongoDB.");
  } catch (error) {
    console.error("Error populating data to MongoDB:", error);
  } finally {
    mongoose.disconnect();
    return { invalidUsers, succeededUsers, wasExistingUsers };
  }
}

async function getUser(username: string, domain: string) {
  let user = await User.findOne({ username, schoolUrls: { $in: [domain] } });

  if (!user) {
    //try to find user with username only

    console.log("User not found, trying to find user with username only...");

    user = await User.findOne({ username });
  }

  return user;
}

export { connectMongoDB, addUsersToMongoDB, getUser };
