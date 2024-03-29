import React from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import "react-toastify/dist/ReactToastify.css"

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  )
}
