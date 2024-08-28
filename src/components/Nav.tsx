export default function Nav(){


return (
    <nav className="h-14 bg-[#1e2124] flex flex-row justify-center items-start py-2.5 border-black border-[0.05px] border-b-[#646363] text-1xl">

    <div className="flex gap-4 text-gray-300 ">
      <a href="" className="hover:text-white">Doxs</a>
      <a href="" className="hover:text-white">Members</a>
      <a href="" className="hover:text-white">Downs</a>
      <a href="https://discord.gg/villeros" target="_blank" className="hover:text-white">Discord</a>
    </div>
  </nav>

)

}