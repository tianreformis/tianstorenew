import { UserButton } from "@clerk/nextjs"
import { MainNav } from "./main-nav"
import StoreSwitcher from "./store-swicther"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import db from "@/lib/db"


const Navbar  = async () => {
    const {userId} = await auth();
    if (!userId) {
       redirect('/sign-in');
    }
    
    const stores = await db.store.findMany({
        where: {
            userId
        }
    })
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div>
                    <StoreSwitcher items={stores} className="" />
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