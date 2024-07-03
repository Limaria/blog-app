"use client"
import React from "react";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react"


type Props = {}

export const Button = (props: Props) =>{
  const {data: session, status} = useSession()

  if (status === 'loading'){
    return <div>Loading...</div>
  }

  if(session){
    return(
      <Link href="/blog/new" className="text-2xl px-2 py-4 ">New Blog</Link>  
    )
  }
    return(
     <div></div>
    )

}