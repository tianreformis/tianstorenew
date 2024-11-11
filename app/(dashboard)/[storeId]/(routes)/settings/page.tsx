import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SettingsForm from "./components/setting-form";

interface SettingPageProps {
    params: {
        storeId: string;
    }

}

const SettingsPage: React.FC<SettingPageProps> = async ({
    params
}) => {
    const { userId } = await auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const store = await db.store.findFirst({
        where: {
            id: params.storeId
        }
    })

    if (!store) {
        redirect('/');
    }

    return (
        <div className="">
            <SettingsForm />
        </div>

    )
}

export default SettingsPage;