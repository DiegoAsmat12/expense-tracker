'use client'
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const router = useRouter();

    
    return (
        <header className="p-4">
            <nav className="text-lg">
                <ul className="flex flex-row justify-center items-center gap-2">
                    <Link href={"/"} className={router.pathname == "/"? 'underline': ''}>
                        <li>Home</li>
                    </Link>
                    <Link href={"/"}>
                        <li>About</li>
                    </Link>
                    <Link href={"/"}>
                        <li>Projects</li>
                    </Link>
                    <Link href={"/"}>
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )


}