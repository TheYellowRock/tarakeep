import Link from "next/link";
import { NavBar } from "./navbar";

export function TopMenu(){
    return(
        <>
            <div className="flex flex-row w-full justify-between p-4">
            <Link href={`/hostdashboard`}><div className="text-4xl font-bold">Tarakeep</div></Link>
                <div><NavBar/></div>
            </div>
        </>
    )
}