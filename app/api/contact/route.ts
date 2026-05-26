import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        console.log('[Contact API] Incoming request...');
        const body = await req.text();
        console.log('[Contact API] Raw body:', body);

        let name: string, email: string, message: string, phone: string | undefined;
        try {
            const json = JSON.parse(body);
            name = json.name;
            email = json.email;
            message = json.message;
            phone = json.phone;
        } catch (parseErr) {
            console.error('[Contact API] Failed to parse JSON:', parseErr);
            return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
        }

        console.log('[Contact API] Parsed fields:', { name, email, message, phone });

        if (!name || !email || !message) {
            console.warn('[Contact API] Missing required fields:', { name, email, message });
            return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
        }

        // Log environment variables (do not log secrets in production)
        console.log('[Contact API] SMTP config:', {
            SMTP_HOST: process.env.SMTP_HOST,
            SMTP_PORT: process.env.SMTP_PORT,
            SMTP_SECURE: process.env.SMTP_SECURE,
            SMTP_USER: process.env.SMTP_USER,
        });

        // Configure your SMTP transporter
        let transporter;
        try {
            transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                secure: process.env.SMTP_SECURE === 'true',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });
        } catch (transporterErr: any) {
            console.error('[Contact API] Failed to create transporter:', transporterErr);
            return NextResponse.json({ error: 'Failed to configure mail transporter.' }, { status: 500 });
        }

        // Email content
        const mailOptions = {
    from: process.env.SMTP_USER, // Always your authenticated email
    replyTo: email, // User's email for replies
    to: 'sales@indovatetechnologies.com',
    subject: 'New Contact Form Submission by ' + name,
    html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `,
};

        console.log('[Contact API] Sending email with options:', mailOptions);

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('[Contact API] Email sent:', info);
        } catch (sendErr: any) {
            console.error('[Contact API] Failed to send email:', sendErr);
            return NextResponse.json({ error: sendErr?.message || 'Failed to send email.' }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('[Contact API] Unexpected error:', error);
        return NextResponse.json({ error: error?.message || 'Failed to send email.' }, { status: 500 });
    }
}