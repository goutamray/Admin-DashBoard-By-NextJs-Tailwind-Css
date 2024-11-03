"use client"

import Image from "next/image"
import logofull from "@/public/logo-full.png"
import logo from "@/public/logo.png"
import Link from "next/link"
import Button from '@mui/material/Button';

// react icons 
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
import { MdOutlineDashboard } from "react-icons/md";


import { useContext, useState } from "react";
import { MyContext } from "../context/ThemeContext"

import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(false); 

  // handle open sub menu 
  const handleSubMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  
  const context = useContext(MyContext)

  return (
    <aside className={`sidebarwrapper transition-sidebar fixed top-0 left-0 bg-white  h-full border-r px-5 py-3 ${context?.isOpenSidebar === true ? "w-[19%]" : "w-[6%]"}`} >
      <Link href="/"> 
      {
        context?.isOpenSidebar === true ?   
        <Image src={ logofull } alt="logo" height={40} width={125}/> 
        : 
        <Image src={ logo} alt="logo" height={25} width={40}/>
      }
      </Link>

      <ul className={`mb-0 mt-3 max-h-[78vh] ${context?.isOpenSidebar === true ? "overflow-y-scroll overflow-x-hidden" : "" }  `}>
        <li>
          <BootstrapTooltip title={context?.isOpenSidebar === true ? "" : "Dashboard"} placement="right-start" >
              <Link href="/" className="text-[#525252] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
                <span> <MdOutlineDashboard className="text-2xl font-medium"/> </span> 
                { context?.isOpenSidebar === true && "Dashboard"}  
              </Link>
          </BootstrapTooltip>
        </li>

        <li>
           <BootstrapTooltip title={context?.isOpenSidebar === true ? "" : "Ecommerce"} placement="right-start" >
              <Link href="/" className="text-[#525252] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
              <span> <IoCartOutline className="text-2xl font-medium"/> </span> 
               { context?.isOpenSidebar === true && "Ecommerce"}    
            </Link>
          </BootstrapTooltip>
        </li>

        <li className="relative">
          <Button className="text-[#171717] w-full text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 cursor-pointer" onClick={handleSubMenu}>
            <span><RiProductHuntLine className={`text-2xl font-medium ${context?.isOpenSidebar === false && "-ml-[13px]"}`} /></span> 
            { context?.isOpenSidebar === true && "Products"}  
            { context?.isOpenSidebar === true && <FaAngleDown className={`ml-auto ${openMenu === true ? "rotate-180" : ""}`}/> } 
             
          </Button>

          {
           context?.isOpenSidebar === true && 
            openMenu &&  <ul className={`px-3 py-2 `} >
            <li >
               <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-2"> Add new Product </Link>
             </li>
             <li >
               <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-2 "> Product List </Link>
             </li>
             <li >
               <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-2"> Product Details  </Link>
             </li>
             <li >
               <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-2"> Add Product Brand </Link>
             </li>
           </ul>
          }

          {
           context?.isOpenSidebar === false &&  <ul className={`px-3 py-2 dropDown shadow-md `} >
            <li >
               <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-2"> Add new Product </Link>
             </li>
             <li >
               <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-2 "> Product List </Link>
             </li>
             <li >
               <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-2"> Product Details  </Link>
             </li>
             <li >
               <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-2"> Add Product Brand </Link>
             </li>
           </ul>
          }
          
        </li>

        <li>
           <BootstrapTooltip title={context?.isOpenSidebar === true ? "" : "Orders"} placement="right-start" > 
              <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
               <span> <FaBorderAll className="text-2xl font-semibold"/> </span>
               { context?.isOpenSidebar === true && "Orders"}    
             </Link>
          </BootstrapTooltip>
        </li>

        <li>
            <BootstrapTooltip title={context?.isOpenSidebar === true ? "" : "Projects"} placement="right-start" > 
               <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
                  <span> <MdRocket className="text-2xl font-semibold"/> </span>
                  { context?.isOpenSidebar === true && "Projects"}  
                      
                </Link>
            </BootstrapTooltip>
        </li>

        <li>
           <BootstrapTooltip title={context?.isOpenSidebar === true ? "" : "Customers"} placement="right-start" > 
              <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
                <span> <TbUsers className="text-2xl font-semibold"/> </span>
                 { context?.isOpenSidebar === true && "Customers"}     
             </Link>
          </BootstrapTooltip>
        </li>

        <li>
          <BootstrapTooltip title={context?.isOpenSidebar === true ? "" : "Notifications"} placement="right-start" > 
             <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
              <span> <IoNotificationsOutline className="text-2xl font-semibold"/> </span> 
              { context?.isOpenSidebar === true && "Notifications"}     
            </Link>
            </BootstrapTooltip>
        </li>

        <li>
          <BootstrapTooltip title={context?.isOpenSidebar === true ? "" : "Accounts"} placement="right-start" > 
            <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
              <span> <FaRegUserCircle className="text-2xl font-semibold"/> </span> 
              { context?.isOpenSidebar === true && "Accounts"}     
            </Link>
            </BootstrapTooltip>
        </li>

        <li>
          <BootstrapTooltip title={context?.isOpenSidebar === true ? "" : "Mails"} placement="right-start" > 
            <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
              <span> <IoMailOpenOutline className="text-2xl font-semibold"/> </span> 
              { context?.isOpenSidebar === true && "Mails"}     
            </Link>
            </BootstrapTooltip>
        </li>

        <li>
          <BootstrapTooltip title={context?.isOpenSidebar === true ? "" : "Chats"} placement="right-start" > 
             <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
               <span> <IoChatbubbleEllipsesOutline className="text-2xl font-semibold"/> </span> { context?.isOpenSidebar === true && "Chats"}     
             </Link>
          </BootstrapTooltip>
        </li>

        <li>
          <BootstrapTooltip title={context?.isOpenSidebar === true ? "" : "LogOut"} placement="right-start" > 
             <Link href="/" className="text-[#171717] text-[14px] capitalize font-medium rounded transition-all duration-300 flex gap-2 items-center hover:bg-[#f5f5f5] px-3 py-3 ">
               <span> 
              <RiLogoutBoxRLine className="text-2xl font-semibold"/> 
              </span>
             { context?.isOpenSidebar === true && "LogOut"}     
            </Link>
          </BootstrapTooltip>
        </li>

      </ul>
 </aside>

   )
}
export default SideBar



