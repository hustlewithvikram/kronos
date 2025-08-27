import nodemailer from "nodemailer";

// POST /api/send-mail → send an email
export async function POST(req) {
    try {
        const { from, subject, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "vs423502@gmail.com", // default email
                pass: "your-app-password-here", // ⚠️ must be an app password, not your Gmail login
            },
        });

        await transporter.sendMail({
            from,
            to: "vs423502@gmail.com", // inbox
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

// GET /api/send-mail → show available routes and current route details
export async function GET() {
    const routes = {
        current_route: {
            path: "/api/send-mail",
            methods: ["GET", "POST"],
            description:
                "This endpoint allows sending emails via POST and listing route info via GET.",
            usage: {
                POST: {
                    body: {
                        from: "sender@example.com",
                        subject: "Hello",
                        message: "This is a test email",
                    },
                    response: { success: true, message: "Email sent!" },
                },
                GET: {
                    response: "Returns available routes and current route details",
                },
            },
        },
    };

    return new Response(JSON.stringify(routes, null, 2), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
