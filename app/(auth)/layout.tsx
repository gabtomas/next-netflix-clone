import Image from "next/image";
import BackgroundImage from "../../public/background.jpg";
import Logo from "../../public/netflix_logo.svg";

export default function Authlayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            <Image
                src={BackgroundImage}
                alt="Netflix Logo"
                className="hidden sm:flex sm:object-cover -z-10 brightness-50 sm:flex sm:object-cover -z-10"
                priority
                fill
            />

            <Image
                src={Logo}
                alt="Netflix Logo"
                width={170}
                height={170}
                className="absolute left-4 top-4 object-contain md:left-14 md:top-6 "
                priority
            />

            {children}
        </div>
    );
}
