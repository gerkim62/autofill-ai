"use client"

import { UserButton, useSession } from "@clerk/nextjs";


function checkUserRole(session: any) {
  if (
    !session ||
    !session.user ||
    !session.user.organizationMemberships ||
    session.user.organizationMemberships.length === 0
  ) {
    return null; // Return null if the user is not a basic member
  }

  const organizationMemberships = session.user.organizationMemberships;

  // Loop through all organization memberships
  for (const membership of organizationMemberships) {
    if (membership.role) {
      return membership.role.toLowerCase(); // Return the role in lowercase if it exists
    }
  }

  return null; // Return null if no role is found in the memberships
}

// export { checkUserRole };


export default function AdminPage() {
  const session = useSession();
  console.log(session)
  const role = checkUserRole(session);

  alert(role);

  return (

      <p className="mt-20">
        This page is only accessible by admins. Try logging in with the email
        
            <UserButton afterSignOutUrl="/" />
          
       
      </p>

  );
}
