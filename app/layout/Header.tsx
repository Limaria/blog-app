"use client"
import React from "react";
import Link from "next/link";
import { Button as AuthButton } from "../auth/Button"
import { Button } from "../blog/new/Button";
import { SessionProvider } from "next-auth/react";

type Props = {}

const Header = (props: Props) => {
  return(
    <SessionProvider>
      <div className="border-b flex justify-between">
        <Link href="/" className="text-4xl px-2 py-4 ">LOGO</Link>  
        <div className="flex justify-between gap-4">
          <Button/>
          <AuthButton/>
        </div>
      </div>
    </SessionProvider>
  )
}

export default Header