import React from 'react'
import { EyeIcon, BrainCogIcon, GlobeIcon, MonitorSmartphoneIcon, ZapIcon } from "lucide-react";
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';



const features = [

    {
        name: "Store Your PDF Documents",
        description: "Keep all your important PDF Files securly stored and easily accessible anywhere, antime.",
        icon: GlobeIcon,

    },

    {
        name: "Blazing Fast Responses",
        description: "Experience lighting-fast answers to your queries, ensuring you get the information you need.",
        icon: ZapIcon,

    },
    {
        name: "Chat Memorisation",
        description: "Our intelligent chatbot remembers previous interactions, providing a seamless and personalised experience.",
        icon: BrainCogIcon,

    },
    {
        name: "??",
        description: "Engage with your PDFs like never before using our intuitive and interactive viewer.",
        icon: EyeIcon,

    },

    {
        name: "Blazing Fast Responses",
        description: "Rest-assured knowing your documents are safely backed-up on the cloud, protected from loss or damage.",
        icon: MonitorSmartphoneIcon,

    },
    {
        name: "Chat Memorisation",
        description: "Our intelligent chatbot remembers previous interactions, providing a seamless and personalised experience.",
        icon: GlobeIcon,

    }
]

function HeroData() {
    return (
        <div className='bg-white py-24 sm:py-32 rounded-md drop-shadow-xl'>
            <div className='flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl sm:text-center'>
                    <h2 className='text-base font-semibold leading-7 text-indigo-600'>Your Interactive Document Companion</h2>
                    <p className='mt-2 text-3xl font-bold tracking-light text-gray-900 sm:text-6xl'>Transform Your PDFs into Interactive Conversations</p>
                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                        Introducing{" "}
                        <span className='font-bold text-indigo-600'>Chat with PDF</span>
                        <br />
                        <br /> Upload your document, and our chatbot will answer questions, summarise content, and answer all of your Qs. Ideal for everyone, <span className='text-indigo-600'>Chat with PDF</span>
                        {" "} turns static documents into {" "} <span className='font-bold'>dynamic conversations</span>
                        , enhancing productivity 10x effortlessly.

                    </p>



                </div>

                <Button asChild className='mt-10'>
                    <Link href='/dashboard'>Get Started</Link>
                </Button>



                <div className='relative overflow-hidden pt-16'>
                    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                        <Image
                            alt="App Screenshot"
                            src="https://i.imgur.com/VciRSTI.jpeg"
                            width={2432}
                            height={1442}
                            className='mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10' />
                        <div aria-hidden="true" className='relative'>
                            <div className='absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]'></div>
                        </div>
                    </div>
                </div>
                <div className='mt-6 px-8'>
                    <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gapy-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-4 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
                        {features.map(feature => (
                            <div key={feature.name} className='relative pl-9'>
                                <dt>
                                    <feature.icon

                                        aria-hidden="true"
                                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                    />

                                </dt>
                                <dd>
                                    {feature.description}

                                </dd>
                            </div>
                        ))}

                    </dl>


                </div>
            </div>
        </div>
    )
}

export default HeroData