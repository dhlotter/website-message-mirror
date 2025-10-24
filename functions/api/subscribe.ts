// functions/api/subscribe.ts

interface Env {
  EMAILS: KVNamespace;
}

interface SubscribeRequestBody {
  email?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  // Check if the KV namespace binding is properly configured.
  if (!context.env.EMAILS) {
    console.error('KV namespace binding not found.');
    return new Response(JSON.stringify({ error: 'Server configuration error: KV namespace not bound.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    console.log('Subscribe function received request.');
    const { request } = context;
    const { email } = await request.json<SubscribeRequestBody>();

    console.log('Received email:', email);

    if (!email || typeof email !== 'string' || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return new Response(JSON.stringify({ error: 'A valid email is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Store the email in the KV namespace.
    console.log('Attempting to store email in KV:', email);
    await context.env.EMAILS.put(email, new Date().toISOString());
    console.log('Successfully stored email in KV:', email);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Subscription error caught:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
