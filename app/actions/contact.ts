"use server"

export async function submitContactForm(formData: FormData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Here you would typically send the email or save to database
  console.log("Contact form submission:", { name, email, phone, subject, message })

  return {
    success: true,
    message: `Gracias ${name}, hemos recibido tu mensaje. Te contactaremos pronto.`,
  }
}
