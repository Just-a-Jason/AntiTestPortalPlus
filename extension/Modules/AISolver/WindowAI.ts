interface ReadableStream {
  locked: boolean;
}

export interface AISession {
  promptStreaming(input: string): Promise<ReadableStream>;
  executeStreaming(input: string): Promise<ReadableStream>;
  prompt(input: string): Promise<string>;
  execute(input: string): Promise<string>;
  destroy(): void;
}

interface TextSession extends AISession {}

interface GenericSession extends AISession {}

export interface AI {
  createTextSession(): Promise<TextSession>;
  createGenericSession(): Promise<GenericSession>;
}
