/// <reference types="@cloudflare/workers-types" />
import { Resend } from 'resend';

// Cloudflare Pages Functions provide environment variables in the context
interface Env {
  VITE_RESEND_API_KEY: string;
  VITE_RESEND_TO: string;
  VITE_RESEND_FROM: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  console.log('Received contact form submission');
  
  try {
    const body = await context.request.json() as { name: string; email: string; message: string };
    console.log('Request body:', JSON.stringify(body, null, 2));
    
    const { name, email, message } = body;
    const apiKey = context.env.VITE_RESEND_API_KEY;
    const toEmail = context.env.VITE_RESEND_TO;
    const fromEmail = context.env.VITE_RESEND_FROM || 'noreply@easyentropy.com';
    
    console.log('Using Resend API Key:', apiKey ? '***' + apiKey.slice(-4) : 'Not set');
    console.log('Sending to email:', toEmail);
    
    const resend = new Resend(apiKey);

    console.log('Sending email...');
    // Send email using Resend
    const emailSubject = 'New MessageMirror Contact Form Submission';
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      <p style="margin-top: 20px; color: #666; font-size: 12px;">
        This message was sent from the contact form on easyentropy.com
      </p>
    `;

    const emailText = `New Contact Form Submission

Name: ${name}
Email: ${email}
Message:
${message}

---
This message was sent from the contact form on easyentropy.com`;

    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
      text: emailText,  // Adding plain text version
      headers: {
        'X-Entity-Ref-ID': 'contact-form',
        'Reply-To': email,
        'Precedence': 'bulk',
        'X-Auto-Response-Suppress': 'OOF, AutoReply',
      },
    });

    console.log('Email sent successfully:', data);
    return new Response(JSON.stringify({ 
      success: true, 
      data: {
        id: data.data?.id,
        from: 'onboarding@resend.dev',
        to: toEmail,
        subject: 'New Contact Form Submission'
      }
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error sending email:', errorMessage);
    if (error instanceof Error) {
      console.error('Error stack:', error.stack);
    }
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to send message',
        details: errorMessage
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
