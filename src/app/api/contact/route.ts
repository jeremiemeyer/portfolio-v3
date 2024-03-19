import MailService from "@/services/mail-service"

export const POST = async (req: Request) => {
  const { fullname, email, bodytext } = await req.json()
  const formInfo = { fullname, email, bodytext }

  try {
    await MailService(formInfo)
    return new Response("Email sent.", { status: 200 })
  } catch (error) {
    return new Response("Failed to send mail.", { status: 500 })
  }
}
