import { PRICE_PER_QUIZ } from "@/app/api/global";
import { connectMongoDB, getUser } from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { deductBalance } from "../deductBalance";

async function POST(request: Request) {
  const body = await request.json();

  const {
    quizId,
    domain,
    username,
  }: { quizId: string; domain: string; username: string } = body;

  await connectMongoDB();

  const result = await deductBalance(username, domain, PRICE_PER_QUIZ);

  console.log(result);

  return NextResponse.json(result);
}

export { POST };
