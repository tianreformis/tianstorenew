"use client"

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/sign-in");
  }
  
  return (
    <div>
      <UserButton
        
      />

      <Button onClick={handleLogin}>
        Login 
      </Button>
      
    </div>

  );
}
