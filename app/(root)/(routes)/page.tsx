"use client"

import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect } from "react";

const SetupPage =()=> {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() =>{
    if (!isOpen) {
      onOpen()
    }
  },[isOpen,onOpen])

  return (
    <div className="p-4">
      RootPage
      <UserButton />
    </div>
   
  );
}

export default SetupPage
