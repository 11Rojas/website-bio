"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function MemberPage(){
    //Estados
    const [users, setUsers] = useState<string[]>([])
    const router = useRouter()
    //Consumimos la api
    useEffect(() => {
        (async() => {
            const data = await fetch("/api/v1/members")
            const json = await data.json()
            setUsers(json)
        })()
    }, [])

    const onCLick = (id:string) => {
        router.push("/members/"+id)
    }






    return (
       <main className="">

        <h1 className="text-3xl text-white text-center mt-5 ">Members of Awekening S.B</h1>
<section className='w-[90%] mx-auto flex justify-center mt-2'>
<div className="sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-4 lg:grid-cols-3">

{users.map((member:any) => {
  return (
    <div className=" border-0.5 w-64 shadow-lg border-gray-600 bg-[#1e2124] p-4 text-center flex flex-col gap-2 text-white rounded-lg cursor-pointer lg:m-4 m-4 relative" onClick={() => onCLick(member.id)}>

       <img src={member.banner} className="absolute top-0 left-0 w-full h-24 object-cover rounded-t-lg" alt="Degradado GIF" />

      <img src={member.avatar != null ?`https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}`: "https://images-ext-1.discordapp.net/external/1P6DbBqGuxJp4GlUkoDKzQ4zyUltrEH1EtlDn9zi9Uo/%3Fsize%3D128/https/cdn.discordapp.com/icons/1057720116214763581/657311c86d5c4a62b4ee8f57a6ae294a.png?format=webp&quality=lossless"} className="w-32 h-32 rounded-full object-cover mx-auto z-10" />
      <h1 className="font-medium ">@{member?.username}</h1>

      {member.badges.length > 0 && (
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap bg-[#282b30] rounded-full px-1.5">
            {member.badges.map((b, index) => (
              <div key={index} className="m-1">
                <img src={`https://cdn.discordapp.com/badge-icons/${b.icon}.png`} className="h-6 w-6" />
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="truncate rounded-lg p-2 text-sm text-[#ccc]">{member.bio || "No bio yet"}</p>
    </div>
  )
})}
</div>
       </section>
    
       </main>



        )


}