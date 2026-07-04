import { ChatGoogle } from "@langchain/google";
import config from "../config/config.js";
import { ChatMistralAI } from "@langchain/mistralai"
import { ChatCohere } from "@langchain/cohere"


export const geminiModel = new ChatGoogle({
  apiKey: config.geminiApiKey,
  model: "gemini-3.1-flash-lite",
});



export const mistralModel = new ChatMistralAI({
    model: "mistral-medium-latest",
    apiKey:config.mistralApiKey,
    temperature: 0,
    maxRetries: 2,
})



export const cohereModel = new ChatCohere({
    model: "command-a-03-2025",
    apiKey:config.cohereApiKey,
    temperature: 0,
    maxRetries: 2,
    
})

