"use server"

export async function submitBooking(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Here you would typically save to a database or send an email
  // For now, we'll just log the submission
  console.log("Booking submission:", {
    firstName,
    lastName,
    email,
    message,
    timestamp: new Date().toISOString(),
  })

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}
