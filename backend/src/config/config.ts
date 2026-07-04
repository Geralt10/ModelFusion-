import dotenv from "dotenv";

dotenv.config();

interface Config {
  readonly geminiApiKey: string;
  readonly mistralApiKey: string;
  readonly cohereApiKey: string;
}

export const app_config: Config = {
  geminiApiKey: process.env.GEMINI_API_KEY ?? "",
  mistralApiKey: process.env.MISTRAL_API_KEY ?? "",
  cohereApiKey: process.env.COHERE_API_KEY ?? "",
};

export default app_config