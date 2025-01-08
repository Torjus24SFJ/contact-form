import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY
const resend = new Resend(apiKey)

export function GET(request) {
    resend.emails.send({
        from: "contact@mypage.no",
        to: "Torjus24sfj@gmail.com",
        subject: "From the future",
        html: `
        <h1>This is me from the future</h1>
        <p>Somebody poisoned the coffee</p>
        <p>Do not drink the coffee!</p>
        `,
    })
}
