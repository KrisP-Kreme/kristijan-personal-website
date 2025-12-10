export async function POST() {
  await fetch(process.env.BOT_SERVICE_URL + "/stop-bots", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.BOT_API_TOKEN}`
    }
  });

  return new Response("Bots stopped");
}