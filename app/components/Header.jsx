
"use client"

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi"; 
import { CiSettings } from "react-icons/ci";
import { LuMailOpen } from "react-icons/lu"; 

import { useState } from "react";
import userPhoto from "@/public/goutamray.png"


import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import Image from "next/image";
import Link from "next/link";


const Header = () => {

  const [accountDrop, setAccountDrop] = useState(null);
  const open = Boolean(accountDrop);
  const handleClick = (event) => {
    setAccountDrop(event.currentTarget);
  };
  const handleClose = () => {
    setAccountDrop(null);
  };

  const [notificationDrop, setNotificationDropDrop] = useState(null);
  const open2 = Boolean(notificationDrop);
  const handleClickNoti = (event) => {
    setNotificationDropDrop(event.currentTarget);
  };
  const handleCloseNoti = () => {
    setNotificationDropDrop(null);
  };

  return (
    <>
      <div className='bg-white px-4 py-2 w-full flex items-center '>
       <div className="flex items-center gap-3">
          <button className="h-10 w-10 hover:bg-[#f1f1f1] transition-all duration-300 rounded-full flex items-center justify-center "> 
             <HiOutlineMenuAlt2 className="text-xl text-black "/> 
          </button>
          <button className="h-10 w-10 hover:bg-[#f1f1f1] transition-all duration-300 rounded-full flex items-center justify-center "> 
             <IoSearch className="text-xl text-black "/> 
          </button>
       </div>
       <div className="flex items-center gap-4 ml-auto">
           <div className="dropdownwrapper flex items-center gap-2">
            <div>
              <button className="h-10 w-10 hover:bg-[#f1f1f1] transition-all duration-300 rounded-full flex items-center justify-center relative" onClick={handleClickNoti}> 
                  <FaRegBell className="text-xl text-black "/> 
                  <span className="bg-red-500 text-white h-5 w-5 p-2 rounded-full flex items-center justify-center text-xs absolute -top-1 left-5"> 9+ </span>
              </button>
             <Menu
                anchorEl={notificationDrop}
                id="account-menu"
                open={open2}
                onClose={handleCloseNoti}
                onClick={handleCloseNoti}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                className=""
              >
                <MenuItem onClick={handleCloseNoti} className="flex justify-between gap-3">
                   <h2> Notifications </h2>
                   <span> <LuMailOpen /> </span>
                </MenuItem>
             <div className="scroll w-full max-h-[200px] overflow-y-scroll overflow-x-hidden ">
                   <MenuItem onClick={handleCloseNoti} className="flex gap-3 items-start w-80 border-b">
                      <Image src={userPhoto} alt="user" width={35}  height={35} className="rounded-full object-cover mt-1"/>
                      <div className="text-wrap">
                        <h3 className="text-sm" > <span className="text-md font-semibold"> Goutam Ray </span>  mentioned your in comment.</h3>
                        <h4 className="text-xs mt-1"> 2 minutes ago </h4>
                      </div>
                  </MenuItem>
                   <MenuItem onClick={handleCloseNoti} className="flex gap-3 items-start w-80 border-b">
                      <Image src={userPhoto} alt="user" width={35}  height={35} className="rounded-full object-cover mt-1"/>
                      <div className="text-wrap">
                        <h3 className="text-sm" > <span className="text-md font-semibold"> Goutam Ray </span>  mentioned your in comment.</h3>
                        <h4 className="text-xs mt-1"> 2 minutes ago </h4>
                      </div>
                  </MenuItem>
                   <MenuItem onClick={handleCloseNoti} className="flex gap-3 items-start w-80 border-b">
                      <Image src={userPhoto} alt="user" width={35}  height={35} className="rounded-full object-cover mt-1"/>
                      <div className="text-wrap">
                        <h3 className="text-sm" > <span className="text-md font-semibold"> Goutam Ray </span>  mentioned your in comment.</h3>
                        <h4 className="text-xs mt-1"> 2 minutes ago </h4>
                      </div>
                  </MenuItem>
                   <MenuItem onClick={handleCloseNoti} className="flex gap-3 items-start w-80 border-b">
                      <Image src={userPhoto} alt="user" width={35}  height={35} className="rounded-full object-cover mt-1"/>
                      <div className="text-wrap">
                        <h3 className="text-sm" > <span className="text-md font-semibold"> Goutam Ray </span>  mentioned your in comment.</h3>
                        <h4 className="text-xs mt-1"> 2 minutes ago </h4>
                      </div>
                  </MenuItem>
              </div>
                <MenuItem onClick={handleCloseNoti} className="flex justify-between gap-3">
                  <div className="w-full">
                     <Link href="#" className="py-3 block px-10 w-full bg-blue-600 text-center text-white rounded-md text-md font-medium"> View All Activity </Link>
                  </div>
                </MenuItem>
              </Menu>
            
            </div>
              <button className="h-10 w-10 hover:bg-[#f1f1f1] transition-all duration-300 rounded-full flex items-center justify-center "> 
                  <IoSettingsOutline className="text-xl text-black relative"/> 
              </button>
              <div>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>
                     <Image src={userPhoto} alt="user" width={70}  height={40}/>
                  </Avatar>
                </IconButton>
              </Tooltip>
                <Menu
                  anchorEl={accountDrop}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleClose} className="flex gap-3">
                    <Image src={userPhoto} alt="user" width={35}  height={35} className="rounded-full object-cover"/>
                    <div>
                      <h3 className="text-md"> Goutam Ray </h3>
                      <h4 className="text-sm"> goutamr362@gmail.com </h4>
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <span> <FiUser className="mr-4 text-xl" /> </span> Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                  <span> <CiSettings className="mr-4 text-xl" /></span>
                      Account Setting 
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
           </div>
       </div>
      </div>
    </>
  )
}

export default Header
