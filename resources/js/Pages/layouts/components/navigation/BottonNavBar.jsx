import React from 'react'

function BottomNavBar() {
  return (
    <div>
        <nav className="bg-blue-900 px-8 pt-2 shadow-md">
     <div class="-mb-px flex justify-center">
         <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
             People
         </a>
         <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
             Likes
         </a>
       
     </div>
</nav>
    </div>
  )
}

export default 
BottomNavBar