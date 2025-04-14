export default async function handler(req, res) {
  const { prompt } = req.body;

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Você é um especialista em descrições para e-commerce." },
        { role: "user", content: `Gere uma descrição otimizada e persuasiva para o seguinte produto: ${prompt}` }
      ],
      max_tokens: 200,
      temperature: 0.7
    })
  });

  const data = await openaiRes.json();
  res.status(200).json({ result: data.choices[0].message.content });
}
