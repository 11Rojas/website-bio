"use client"
import Github from "@/app/icons/Github"
import PlayStation from "@/app/icons/Playstation"
import Steam from "@/app/icons/Steam"
import TikTok from "@/app/icons/Tiktok"
import Twitch from "@/app/icons/Twitch"
import Xbox from "@/app/icons/Xbox"
import X from '@/app/icons/X'
import { users } from "@/consts/Users"
import { useState, useEffect } from "react"
import Reddit from "@/app/icons/Reddit"
import Spotify from "@/app/icons/Spotify"
import Facebook from "@/app/icons/Facebook"
import Roblox from "@/app/icons/Roblox"
import YouTube from "@/app/icons/Youtube"
import Epicgames from "@/app/icons/Epicgames"

interface paramsI {
   params: {
        id:string
   }
}


interface UserI {
    username: string,
    bio:string,
    avatar:string,
    badges:string[],
    id: string,
    banner:string,
    integrations: []
}
export default  function User({params}:paramsI){
    //Estado del usuario
    const [user, setUser] = useState<UserI>()    

    useEffect(() => {
        (async () => {
            const data = await fetch("/api/v1/members/"+params.id).then(response => response.json())
            setUser(data)
        })()
    }, [])



    const connecteds = {
        "github": <Github/>,
        "steam": <Steam/>,
        "twitch": <Twitch/>,
        "playstation": <PlayStation/>,
        "xbox": <Xbox/>,
        "paypal": "",
        "tiktok": <TikTok/>,
        "twitter": <X/>,
        "reddit": <Reddit/>,
        "spotify": <Spotify/>,
        "facebook": <Facebook/>,
        "roblox": <Roblox/>,
        "youtube": <YouTube/>,
        "epicgames": <Epicgames/>,
        "battlenet": ""
    }


    return (
        <div className="relative flex justify-center bg-[#1e2124] h-40 w-96 rounded-2xl mx-auto mt-52 items-end shadow-2xl">
            <div className="text-white flex flex-col justify-center items-center p-7">
                <img src={ user?.avatar != null ?`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`: "https://images-ext-1.discordapp.net/external/1P6DbBqGuxJp4GlUkoDKzQ4zyUltrEH1EtlDn9zi9Uo/%3Fsize%3D128/https/cdn.discordapp.com/icons/1057720116214763581/657311c86d5c4a62b4ee8f57a6ae294a.png?format=webp&quality=lossless"} className="rounded-full absolute -top-[43%]"/>
                <h1 className="text-2xl">@{user?.username}</h1>
                <div className="flex items-center justify-center">
          <div className="flex flex-wrap bg-[#282626] rounded-full px-1.5">
            {user?.integrations.map((b, index) => (
              <div key={index} className="m-1">
                {/* <img src={`https://cdn.discordapp.com/badge-icons/${b.icon}.png`} className="h-6 w-6" /> */}
                {connecteds[b.type]}
              </div>
            ))}

            
          </div>
        </div>
              
             </div>
        </div>
    )

}