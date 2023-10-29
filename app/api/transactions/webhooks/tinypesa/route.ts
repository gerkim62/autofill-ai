import User from "@/models/user";
import { NextResponse } from "next/server";

async function POST(request: Request) {
  const body: TinypesaStkCallbackSuccess | TinypesaStkCallbackError =
    await request.json();

  const externalReference = body.Body.stkCallback.ExternalReference;
  const { username, domain }: ExternalReferenceObject =
    JSON.parse(externalReference);

  const user = await User.findOne({
    username,
    schoolUrls: {
      $elemMatch: { $regex: domain, $options: "i" }, // Case-insensitive regex match
    },
  });

    if (!user) {
        console.log("could not find user with username", username, "and domain", domain, "for transaction", externalReference);

    }else{
        const transactions = user.transactions;
        const transaction = transactions.find(
            (transaction:Transaction) => transaction.externalReference === externalReference
        );
        if (!transaction) {
            console.log(
                "could not find transaction with external reference",
                externalReference, "for user", username, "and domain", domain
            );
        } else {
            transaction.status = body.Body.stkCallback.ResultDesc;
            await user.save();
        }
    }

  //   console.log(body);

  return NextResponse.json(
    { message: "Webhook request received" },
    { status: 200 }
  );
}

export { POST };
