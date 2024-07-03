import React from "react";
import Image from "next/image";



const CalloutSection = () =>{
    return(
      <div className="border-t-2 border-b-2 bg-indigo-400 mt-12 p-8 ">
        <div className="grid grid-cols-12 container">
          <div className="col-span-8 flex flex-col place-self-center">
            <h2 className="semi-bold text-4xl mb-5">Stay in the Know</h2>
            <p className="max-w-2xl">As we dive into a new year, it's essential to stay ahead of the curve and be aware of the latest trends shaping our industry. 
              From emerging technologies to shifting consumer behaviors, 2023 promises to be an exciting and transformative year. 
              In this article, we'll explore the top 5 industry trends to watch, and what they mean for your business.</p>
          </div>
          <div className="col-span-4 rounded-full border-2 w-[100px] h-[100px] md:w-[300px] md:h-[300px] relative self-center">
            <Image src="/fara.png" alt="avatar" width={300} height={300} className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 "></Image>
          </div>
        </div>
      </div>
    )

}

export default CalloutSection