"use server";

const baseUrl = process.env.NEXT_PUBLIC_URL;

export const serverFetch = async (api) => {
  const res = await fetch(`${baseUrl}/api/${api}`)
  if (!res.ok) {
    return null;
  }
  return res.json();
};

export const serverMutation = async (api, data) => {
  const res = await fetch(`${baseUrl}/api/${api}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
