import { NextRequest, NextResponse } from "next/server";




export async function GET(req:NextRequest, { params}:any){
    const token = ""

  
    const getUser = async (id:string) => {
     try {
        const response = await fetch("https://discord.com/api/v9/users/" + id + "/profile",{
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
        banner: json.user.banner != null ?`https://cdn.discordapp.com/banners/${json.user.id}/${json.user.banner}` : "https://images-ext-1.discordapp.net/external/3PoPPi2vCwF_PTM8ec7MsfKhRgs6AFHQYLEmCy_R7Fc/%3Fsize%3D2048/https/cdn.discordapp.com/banners/1057720116214763581/a_e7d5c390e9822731a27474bbbe55a214.gif",
        integrations: json.connected_accounts || [],
        }
     } catch (error) {
        console.log(error)
            return {
                username: null,
                bio:  null,
                avatar:  null,
                badges:  [],
                id: null
            }
     }
    }
        const data = await getUser(params.id)
   
   
    return NextResponse.json(data, { status: 200})
}