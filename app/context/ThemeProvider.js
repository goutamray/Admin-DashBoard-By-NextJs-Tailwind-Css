"use client"

import { useEffect, useState } from "react"
import SideBar from "../components/SideBar";
import Header from "../components/Header";

const { MyContext } = require("./ThemeContext")


const ThemeProvider = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState();

 const sideBarOpenCloseFun = () => {
     setIsOpenSidebar(!isOpenSidebar);
 }

  const values = {
    isOpenSidebar,
    setIsOpenSidebar,
    sideBarOpenCloseFun
  }

  return (
    <MyContext.Provider value={values}>
         <main className="main w-full"> </main>
           <SideBar />
           <div className={`right-content transition ${isOpenSidebar === true ? "open" : "close"}`} >
             <Header /> 
             <div className="wrapperContainer p-10 transition">
                {children}
             </div>
           </div>
    </MyContext.Provider>
  )
}


// export default provider
export default ThemeProvider;
