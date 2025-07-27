// This is a Cloudflare Pages Function that handles the contact form submission
/// <reference types="@cloudflare/workers-types" />
import { Resend } from 'resend';

// Cloudflare Pages Functions provide environment variables in the context
interface Env {
  VITE_RESEND_API_KEY: string;
  VITE_RESEND_TO: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json() as { name: string; email: string; message: string };
    const { name, email, message } = body;
    const resend = new Resend(context.env.VITE_RESEND_API_KEY);

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // This should be a verified domain in your Resend account
      to: context.env.VITE_RESEND_TO, // Using the environment variable for recipient email
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to send message',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
