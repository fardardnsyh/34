"use server";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { GenerateEmbeddingsInPineconeVectorStore } from "@/lib/langchain";

export async function GenerateEmbeddings(docId: string) {
  auth().protect();

  await GenerateEmbeddingsInPineconeVectorStore(docId);

  revalidatePath("/dashboard");

  return { completed: true };
}
