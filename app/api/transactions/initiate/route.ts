async function POST(request: Request) {
  const {
    domain,
    username,
    amount,
    msisdn,
    account_no: externalReference,
  } = await request.json();

  console.log(domain, username, amount, msisdn, externalReference);
}


export { POST };

//sample json
