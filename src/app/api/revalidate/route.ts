// https://www.jeremiemeyer.fr/api/revalidate?path=/blog&secret=e79e3639b5a200e121c7528a4eb987bc
// https://www.jeremiemeyer.fr/api/revalidate?path=/realisations&secret=e79e3639b5a200e121c7528a4eb987bc
// http://localhost:3000/api/revalidate?path=/blog&secret=e79e3639b5a200e121c7528a4eb987bc
// http://localhost:3000/api/revalidate?path=/realisations&secret=e79e3639b5a200e121c7528a4eb987bc

import { NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret")

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return new NextResponse(JSON.stringify({ message: "Invalid Token" }), {
      status: 401,
      statusText: "Unauthorized",
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  const path = request.nextUrl.searchParams.get("path") || "/"

  revalidatePath(path)

  return NextResponse.json({ revalidated: true })
}
