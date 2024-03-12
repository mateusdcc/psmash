import Image from 'next/image'

const Navbar = () => {
    const Button = ({ href, text }) => (
        <a href={href}>
            <button className="btn btn-ghost rounded-none text-xs">{text}</button>
        </a>
    )

    const skewStyle = { transform: 'skewY(-2deg)' };

    return (
        <div>
            <div className="fixed top-0 w-screen z-30 flex justify-center md:justify-between items-center md:items-start mt-10">
                <a href="/">
                    <Image
                        className=" hover:scale-[0.90] duration-300"
                        src="/psmash.png"
                        width={350}
                        height={800}
                        alt="logo"
                    />
                </a>
            </div>
            <div className="fixed top-0 left-0 min-w-full z-20">
                <div className="top-0 w-full shadow-2xl bg-base-200 z-30 flex fixed justify-center items-center md:items-start md:justify-end md:gap-x-10">
                    <Button href="https://www.roblox.com/games/15092647980/Project-Smash" text="Play" />
                    <Button href="https://forums.projectsmash.xyz/" text="Forum" />
                    <Button href="/gallery" text="Gallery" />
                    <Button href="https://discord.gg/projectsmash" text="Discord" />
                </div>
                <div className="bg-purple-900 min-h-28 shadow-inner" style={skewStyle}></div>
                <div className="bg-red-900 min-h-8 shadow-inner" style={skewStyle}></div>
                <div className="bg-grey-900 min-h-2 shadow-inner" style={skewStyle}></div>
            </div>
        </div>
    )
};

export default Navbar;