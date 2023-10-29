type TinypesaStkCallbackSuccess = {
  Body: {
    stkCallback: {
      MerchantRequestID: string;
      CheckoutRequestID: string;
      ResultCode: number;
      ResultDesc: string;
      CallbackMetadata: {
        Item: {
          Name: string;
          Value: string | number;
        }[];
      };
      TinyPesaID: string;
      ExternalReference: string;
      Amount: number;
      Msisdn: string;
    };
  };
};

type TinypesaStkCallbackError = {
  Body: {
    stkCallback: {
      MerchantRequestID: string;
      CheckoutRequestID: string;
      ResultCode: number;
      ResultDesc: string;
      TinyPesaID: string;
      ExternalReference: string;
      Amount: number;
      Msisdn: string;
    };
  };
};

type ExternalReferenceObject = {
  from: string;
  txnIndex: string;
  domain: string;
  username: string;
};
