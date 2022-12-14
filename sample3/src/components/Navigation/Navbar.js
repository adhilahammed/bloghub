import React from 'react'
import { useSelector } from 'react-redux'

import AdminNavbar from './Admin/AdminNavbar'
import PrivateNavbar from './private/PrivateNavbar'
import PublicNavbar from './public/PublicNavbar'



const Navbar = () => {
    //get user from store
    const state=useSelector(state=>state.users)
   const {userAuth}=state
   const isAdmin=userAuth?.isAdmin
   console.log(isAdmin);
  return (
    <>
    {isAdmin?<AdminNavbar/>:userAuth?<PrivateNavbar/>:<PublicNavbar/>}
    </>
  )
}

export default Navbar    