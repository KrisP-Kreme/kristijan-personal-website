import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const BOT_SERVICE_URL = process.env.NEXT_PUBLIC_BOT_URL!;
  const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN!;

  const body = await req.json();

  const res = await fetch(`${BOT_SERVICE_URL}/start-bots`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
