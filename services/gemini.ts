
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
你是一位资深肝病学专家和营养师。你的任务是为脂肪肝患者提供科学、温暖且易于执行的康复建议。
你的回复应基于以下原则：
1. 科学性：建议必须符合地中海饮食原则、WHO运动建议。
2. 鼓励性：多用正面词汇，像家人一样关心用户。
3. 具象化：不要只说“少吃糖”，要说“避开含糖饮料，可以用苏打水加一片柠檬代替”。
4. 安全性：提醒用户如果有基础病需咨询主治医师。
回答使用中文。
`;

export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，我现在遇到了一点技术问题。请稍后再试。记住，无论如何我都在支持你！";
  }
}
