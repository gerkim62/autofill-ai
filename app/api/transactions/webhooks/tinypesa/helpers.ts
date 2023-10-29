import { TRANSACTION_STATUS_ERROR_MESSAGE } from "@/app/api/global";

const TINYPESA_API_KEY = process.env.TINYPESA_API_KEY;



async function validateTransaction(externalReference:string) {
  if (!TINYPESA_API_KEY) {
    throw new Error(TRANSACTION_STATUS_ERROR_MESSAGE.NO_API_KEY
    );
  }

  const response = await fetch(
    `https://tinypesa.com/api/v1/express/get_status/${externalReference}`,
    {
      headers: {
        Accept: "application/json",
        Apikey: TINYPESA_API_KEY,
      },
    }
  );

  if (response.status === 404) {
    console.error("Transaction not found:", response.status);
    ;
    throw new Error(TRANSACTION_STATUS_ERROR_MESSAGE.NOT_FOUND);
  }

  if (!response.ok) {
    console.error("Failed to retrieve transaction status:", response.status);
    // You can choose to throw an error here if you need to handle it differently.
    throw new Error(TRANSACTION_STATUS_ERROR_MESSAGE.FAILED);
    // return false;
  }

  const transaction = await response.json();
//   console.log("txn info", transaction);
  return transaction.is_complete === 1;
}
