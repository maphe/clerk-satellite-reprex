'use server';

import { auth } from '@clerk/nextjs/server';

export async function getSessionClaims() {
  const { sessionClaims } = auth();

  return sessionClaims;
}

export async function callApi() {
  const { getToken } = auth();

  const token = await getToken();

  const response = await fetch(
    `${process.env.SATELLITE_APP_ROOT_URL}/api/hello`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
}
