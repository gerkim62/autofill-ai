import { getUser } from "@/libs/mongodb";
import { deductBalance } from "../deductBalance";
import { NextResponse } from "next/server";

async function POST(request: Request) {
  const body = await request.json();

  const { username, domain, amount } = body;

  console.log(body);

  const result = await deductBalance(username, domain, amount);

  if (result.success) {
    const user = await getUser(username, domain);
    user.apiKeys.push({
      pending: true,
      requestedAt: new Date(),
      amount: amount,
      domain: domain,
    });
    await user.save();
    return NextResponse.json(result);
  }

  return NextResponse.json(result, { status: 500 });
}

export { POST };

//sample json body
