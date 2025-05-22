import { HfInference } from "@huggingface/inference";

async function main() {
  const token = process.env.HF_API_TOKEN;
  if (!token) throw new Error("Missing HF_API_TOKEN");
  const hf = new HfInference(token);

  try {
    const output = await hf.textGeneration({
      model: "gpt2",
      inputs: "Hello world",
    });
    console.log(output);
  } catch (e) {
    console.error("API Error:", e);
  }
}

main();
