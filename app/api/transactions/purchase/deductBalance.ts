import { getUser } from "@/libs/mongodb";

async function deductBalance(
  username: string,
  domain: string,
  amount: number | string
) {
  try {
    const user = await getUser(username, domain);

    console.log(user);

    if (!user) {
      return { success: false, message: "User not found", reason: "NOT_FOUND" };
    }

    if (!hasEnoughBalance(user, amount)) {
      return {
        success: false,
        message: "Insufficient balance",
        reason: "INSUFFICIENT_BALANCE",
      };
    }

    if (user.freeBalance >= +amount) {
      user.freeBalance -= +amount;
    } else {
      user.depositedBalance -= +amount - user.freeBalance;
      user.freeBalance = 0;
    }

    // Save the changes to the database
    await user.save(); // This is where you actually persist changes to the database

    return { success: true, message: "Balance deducted successfully", user };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Error deducting balance",
      error,
      reason: "FAILED",
    };
  }
}

function hasEnoughBalance(user: User, amount: number | string) {
  return +user.depositedBalance + +user.freeBalance >= +amount;
}

export { deductBalance };
