"use client"

import Image from "next/image"
import logofull from "@/public/logo-full.png"
import Link from "next/link"
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { MdRocket } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { RiProductHuntLine } from "react-icons/ri";
import { FaBorderAll } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6"; 

const SideBar = () => {
  return (
    <div className="sidebarwrapper fixed top-0 left-0 bg-white w-[19%] h-full border-r px-5 py-3" >
      <Link href="/"> 
          <Image src={logofull} alt="logo" height={40} width={125}/>
      </Link>
      <div className="pt-2">
          <h2 className="w-full text-[15px] justify-start text-[#737373] font-bold uppercase flex gap-2 px-2  py-3 rounded hover:bg-transparent"> 
             Dashboard 
         </h2>
      </div>

      <ul className="mb-0 mt-0">
        <li>
          <Link href="/" className="text-[#525252] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
             <span> <IoCartOutline className="text-2xl font-medium"/> </span> Ecommerce 
          </Link>
        </li>
        <li>
          <div className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 cursor-pointer">
            <span><RiProductHuntLine className="text-2xl font-medium" /></span> Products <FaAngleDown className="ml-auto"/>
          </div>
          <ul className="px-3 py-2">
            <li >
              <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-2"> Upload Product </Link>
            </li>
            <li >
              <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-2 "> Product List </Link>
            </li>
            <li >
              <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-2"> Add new Product </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
             <span> <FaBorderAll className="text-2xl font-semibold"/> </span> Orders  
          </Link>
        </li>
        <li>
          <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
             <span> <MdRocket className="text-2xl font-semibold"/> </span> Projects  
          </Link>
        </li>
        <li>
          <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
             <span> <TbUsers className="text-2xl font-semibold"/> </span> Customers  
          </Link>
        </li>
        <li>
          <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
             <span> <IoNotificationsOutline className="text-2xl font-semibold"/> </span> Notifications  
          </Link>
        </li>
        <li>
          <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
             <span> <FaRegUserCircle className="text-2xl font-semibold"/> </span> Accounts  
          </Link>
        </li>
        <li>
          <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
             <span> <IoMailOpenOutline className="text-2xl font-semibold"/> </span> Mails  
          </Link>
        </li>
        <li>
          <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
             <span> <IoChatbubbleEllipsesOutline className="text-2xl font-semibold"/> </span> Chats  
          </Link>
        </li>
        <li>
          <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
             <span> <RiLogoutBoxRLine className="text-2xl font-semibold"/> </span> LogOut  
          </Link>
        </li>
      </ul>
 </div>

   )
}
export default SideBar



