import { MobileSidebar } from "./mobile-sidebar"

export const MobileHeader = ()=>{

    return(
        <nav className="lg:hidden px-6 h-[50px] fixed w-full top-0  flex items-center bg-green-500 border-b z-500">
            <MobileSidebar/>
        </nav>
    )
}