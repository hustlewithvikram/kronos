import nodemailer from "nodemailer";

// Handle POST requests
export async function POST(req) {
    try {
        const { from, subject, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from,
            to: process.env.EMAIL_USER, // your inbox
            subject,
            text: message,
        });

        return new Response(
            JSON.stringify({ success: true, message: "Email sent!" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (err) {
        return new Response(
            JSON.stringify({ success: false, error: "Failed to send email." }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

// Handle GET requests
export async function GET() {
    const routes = {
        available_routes: {
            POST: "/api (send an email with { from, subject, message })",
            GET: "/api (view available routes)",
        },
    };

    return new Response(JSON.stringify(routes, null, 2), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
