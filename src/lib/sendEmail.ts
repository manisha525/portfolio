// src/lib/sendEmail.ts
import emailjs from "@emailjs/browser";

export const sendEmail = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!; 

  const templateParams = {
    name,
    email,
    subject,
    message,
    // reply_to: email,
  };

  try {
    const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);
    return { success: true, response: result };
  } catch (error) {
    console.error("EmailJS error:", error);
    return { success: false, error };
  }
};
