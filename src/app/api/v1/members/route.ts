import { NextRequest, NextResponse } from "next/server";
import { users } from "@/consts/Users";

export async function GET(req:NextRequest){
    const token = ""


    const getUser = async (member:string) => {
     try {
        const response = await fetch("https://discord.com/api/v9/users/" + member.id + "/profile",{
            method: "GET",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
        })

        const json = await response.json() 
   
        return {
        username: json.user.username || "John Doe",
        bio: json.user.bio  || "No bio yet",
        avatar: json.user.avatar || null,
        badges: json.badges || [],
        id: json.user.id || null,
        role: member.role || null ,
        banner: json.user.banner != null ?`https://cdn.discordapp.com/banners/${json.user.id}/${json.user.banner}` : "https://images-ext-1.discordapp.net/external/3PoPPi2vCwF_PTM8ec7MsfKhRgs6AFHQYLEmCy_R7Fc/%3Fsize%3D2048/https/cdn.discordapp.com/banners/1057720116214763581/a_e7d5c390e9822731a27474bbbe55a214.gif",
        integrations: json.connected_accounts || [],
        }
     } catch (error) {
            return {
                username: null,
                bio:  null,
                avatar:  null,
                badges:  [],
                id: null,
                integrations: [],
            }
     }
    }


    const data = await Promise.all(users.map(async (member:any) => await getUser(member)));
    return NextResponse.json(data, { status: 200})
}