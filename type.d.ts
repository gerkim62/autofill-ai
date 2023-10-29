type User = {
  username: string;
  password: string;
  fullName?: string;
  schoolUrls?: string[];
  freeBalance: number;
  depositedBalance: number;
  paidQuizIds: string[];
  createdAt: number;
  transactions: Transaction[];
  uploadedResourcesIds: string[];
};

type Transaction = {
  status: "pending" | "completed" | "not_found";
  amount: number;
  phoneNumber: string;
  externalReference: string;
  username: string;
};
