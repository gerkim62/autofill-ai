import { connectMongoDB } from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const { username } = params;

    const searchParams = new URLSearchParams(request.nextUrl.searchParams);
    const domain = searchParams.get("domain");

    console.log(`got domain ${domain}`);
    await connectMongoDB();

    //try to find user with username and domain
    let user = await User.findOne({ username, schoolUrls: { $in: [domain] } });

    if (!user) {
      //try to find user with username only

      user = await User.findOne({ username });
    }

    if (!user) {
      return NextResponse.json(
        { error: `User ${username} not found` },
        { status: 404 }
      );
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}

async function POST(request: NextRequest){
    //TODO: do some things here
}

export { GET };
