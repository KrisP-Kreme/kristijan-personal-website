export async function POST(request: Request) {
  await fetch(process.env.BOT_SERVICE_URL + "/stop-bots", {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  });

  return new Response("bots stopped");
}
