export async function POST() {
  await fetch(process.env.BOT_SERVICE_URL + "/stop-bots", {
    method: "POST",
  });

  return new Response("Bots stopped");
}
