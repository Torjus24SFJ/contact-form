import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

export async function POST(request) {
  const contactFormData = await request.json();

  const result = await resend.emails.send({
    from: "Lars <contact@resend.dev>",
    to: "Torjus24sfj@gmail.com",
    subject: contactFormData.email,
    html: `
      <h1>${contactFormData.email}</h1>
      <p>${contactFormData.message}</p>
      `,
    });
    
    if (error !== null){
        console.log(result.error.email)
        console.log(result.error.message)
        return new Response("Something went wrong",{
            status: "500"
        })
    }

    return new Response("Message sent succesfully!", {
        status: "200"
    })
}