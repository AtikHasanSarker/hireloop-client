"use server";

const baseUrl = process.env.NEXT_PUBLIC_URL;

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
