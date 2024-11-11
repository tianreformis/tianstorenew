import { UserButton } from "@clerk/nextjs"
import { MainNav } from "./main-nav"
import StoreSwitcher from "./store-swicther"


const Navbar = () => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div>
                    <StoreSwitcher />
                </div>
                <div>
                    <MainNav className="mx-6"/>
                </div>
                <div className="ml-auto flex  items-center space-x-4">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>


        </div>
    )
}

export default Navbar