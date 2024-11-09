import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { error } from "console";
import { NextResponse } from "next/server"

export async function POST (request: Request){
    try {
        const { userId } = await auth();
        const body = await request.json();

        const {name} = body;

        if (!userId){
            return new NextResponse("Unauthorized", {status: 401});
        }

        if (!name){
            return new NextResponse("Nama Toko Perlu diinput", {status: 400});
        }

        const store = await db.store.create({
            data: {
                name,
                userId,
            },
        });

        return NextResponse.json(store);
    }
    catch{
        console.log ("[STORES_POST]", error);
        return new NextResponse("Internal Error",{status: 500});
    }
}