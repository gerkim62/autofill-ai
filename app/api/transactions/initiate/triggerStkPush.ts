const TINYPESA_API_KEY = process.env.TINYPESA_API_KEY;

async function triggerSTKTransaction({
  amount,
  phoneNumber,
  externalReference,
}: {
  amount: string | number;
  phoneNumber: string;
  externalReference: string;
}) {
  if (!isValidSafaricomNumber(phoneNumber)) {
    throw new Error("invalid_number");
  }

  const url = "https://tinypesa.com/api/v1/express/initialize";

  const data = new URLSearchParams();
  data.append("amount", +);
  data.append("msisdn", formatPhoneNumber(phoneNumber));
  data.append("account_no", externalReference);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Apikey: TINYPESA_API_KEY,
      },
      body: data,
    });

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error(error);
    throw new Error("api_request_failed");
  }
}

function isValidSafaricomNumber(phoneNumber: string) {
  // Format the phone number
  console.log(phoneNumber, "phone");
  phoneNumber = formatPhoneNumber(phoneNumber);

  console.log(phoneNumber, "formated phone");
  if (phoneNumber.length !== 12) return false;
  else if (!phoneNumber.startsWith("254")) return false;
  else return true;
}

function formatPhoneNumber(phoneNumber: string) {
  phoneNumber = phoneNumber.replace(/\D/g, ""); // Remove non-digit characters

  if (phoneNumber.startsWith("+254")) {
    return phoneNumber.slice(1);
  } else if (phoneNumber.startsWith("0")) {
    return "254" + phoneNumber.slice(1);
  } else {
    return phoneNumber;
  }
}
