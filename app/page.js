"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";

const images = ['/rogue_banner.jpg', '/boxer_banner.png'];

export default function Home() {
    const [currentImageIndex, setCurrentImage] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            if (window.innerWidth < 768) return;
            setCurrentImage(prevImageIndex => (prevImageIndex + 1) % images.length);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, []);


    const changeImage = (direction) => {
        const length = images.length;
        const increment = direction === 'next' ? 1 : -1;
        setCurrentImage((currentImageIndex + increment + length) % length);
    }

    const discordColorClass = "bg-blue-900";
    const trelloColorClass = "bg-blue-100";
    const robloxColorClass = "bg-green-600 animate-bounce";
    const forumsColorClass = "bg-purple-400";
    const galleryColorClass = "bg-pink-600";

    return (
        <main className="min-h-screen fog" id="main">
            <div className='transition-all'>
                <section className="relative min-h-screen max-w-max flex items-center justify-center text-center fade-in bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundSize: 'cover' }}>
                    <div className="text-white z-10">
                        <Image alt="cover" onLoad={() => console.log("Image loaded")} src="/psmash.png" width={450} height={800} />
                        <div className="join">
                            <JoinButton href="https://www.discord.gg/projectsmash" bgClass={discordColorClass}
                                src="/discord.png" />
                            <JoinButton href="https://trello.com/b/Jd7prTUb/project-smash-trello"
                                bgClass={trelloColorClass} src="/trello.png" />
                            <JoinButton href="https://www.roblox.com/games/15092647980/Project-Smash"
                                bgClass={robloxColorClass} src="/play.svg" />
                            <JoinButton href="https://forums.projectsmash.xyz/" bgClass={forumsColorClass}
                                src="/forum.svg" />
                            <JoinButton href="/gallery" bgClass={galleryColorClass} src="/gallery.svg" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

const JoinButton = ({ href, bgClass, src }) => (
    <a className={`join-item btn ${bgClass}`} href={href}>
        <Image alt={src} src={src} width={30} height={50} />
    </a>
);
