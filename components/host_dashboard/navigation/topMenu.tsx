import { NavBar } from "./navbar";

export function TopMenu(){
    return(
        <>
            <div className="flex flex-row w-full justify-between p-4">
                <div className="text-4xl font-bold">Tarakeep</div>
                <div><NavBar/></div>
            </div>
        </>
    )
}