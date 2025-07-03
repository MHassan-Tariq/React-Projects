import React from 'react'

const Footer = () => {
  return (
    <div className="mt-20">
    <div className="text-center">
        <img src="assets/logo.png" alt="" className="w-36 mx-auto mb-2  dark:hidden"/>

        <img src="assets/logo_dark.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block"/>
        <div className="w-max flex items-center gap-2 mx-auto">
            <img src="assets/mail_icon.png" alt="" className="w-6 dark:hidden"/>
            <img src="assets/mail_icon.png" alt="" className="w-6 hidden dark:block"/>
            hassanit1192@gmail.com
        </div>
    </div>
    <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
    <p>2025 Hassan Tariq. All rights reserved.</p>
    <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
        
        <li><a href="https://github.com/MHassan-Tariq">GitHub</a></li> 
        
        <li><a href="https://www.linkedin.com/in/hassan-tariq-sunny-084873266/">LinkedIn</a></li> 
        
        <li><a href="#">Twitter</a></li> 
    </ul>
</div>
   </div>
  )
}

export default Footer
