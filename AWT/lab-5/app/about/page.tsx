import Image from "next/image";
export default function About(){
    return(
        <>
            <h1 className="text-center">This is About Page</h1>
            <Image src="/About.webp"></Image>
        </>
    )
}