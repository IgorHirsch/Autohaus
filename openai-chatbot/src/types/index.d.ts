// This file defines TypeScript types and interfaces used throughout the project.

export interface UserInput {
    prompt: string;
    userId: string;
}

export interface ChatbotResponse {
    response: string;
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
}