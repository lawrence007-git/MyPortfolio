import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use App Password, not your regular password
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          details: `name: ${!!name}, email: ${!!email}, subject: ${!!subject}, message: ${!!message}`
        },
        { status: 400 }
      );
    }

    console.log('EMAIL_USER:', process.env.EMAIL_USER); // Debug
    console.log('EMAIL_PASSWORD exists:', !!process.env.EMAIL_PASSWORD); // Debug

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `<p><strong>From:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}