'use client';
import { Message } from "./Chat";
import { useUser } from "@clerk/nextjs";
import { BotIcon, Loader2Icon } from "lucide-react";
import Markdown from "react-markdown";
import Image from "next/image";




function ChatMessage({ message }: { message: Message }) {
    const isHuman = message.role === "human";
    const { user } = useUser();
    return (<div className={`chat ${isHuman ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
            <div>
                {isHuman ? (
                    user?.imageUrl && (
                        <Image
                            src={user?.imageUrl}
                            alt="Profile Picture"
                            width={32}
                            height={32}
                            className="rounded-full" />
                    )
                ) : (
                    <div className="h-8 w-8 bg-indigo-600 flex items-center justify-center rounded-full p-1">
                        <BotIcon className="text-white h-7 w-7" />
                    </div>
                )}
            </div>
        </div>
        <div className={`chat-bubble prose ${isHuman && "bg-indigo-600 text-white"}`}>
            {message.message === "Thinking..." ? (
                <div className="flex items-center justify-center">
                    <Loader2Icon className="animate-spin h-5 w-5 text-white" />
                </div>
            ) : (<div>
                <Markdown>{message.message}</Markdown>
            </div>)}
        </div>
    </div>
    )
}

export default ChatMessage