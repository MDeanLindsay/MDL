// app/api/subscribe/route.ts
import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  
  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., us1, us2, etc.
  const listId = process.env.MAILCHIMP_LIST_ID;
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`any:${apiKey}`).toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed', // Or 'pending' if you want to use double opt-in
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Failed to subscribe to Mailchimp:', error);
    return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify({ status: 'subscribed' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
