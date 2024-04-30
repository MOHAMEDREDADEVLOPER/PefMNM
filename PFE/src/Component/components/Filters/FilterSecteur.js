import React from 'react'
import { useSelector } from 'react-redux'

export default function FilterSecteur() {
    const secteurs = useSelector(state => state.secteur.secteurs);
  return (
   
     <div className="flex items-center border  bg-white  lg:backdrop-blur rounded-lg border-gray-300 shadow-lg px-5 py-2 ">
     <div className="mr-2 flex items-center">
       <img src="/images/three_10097571.png" alt="Logo" className="h-11 w-11 mr-3" />
       <div>
         <h2 className="text-lg font-semibold">Secteurs</h2>

         <select className=" py-2 outline-none text-gray-600">
         <option disabled selected hidden>Choisir une Ville</option>
         {
            secteurs.map((secteur,index)=>{
              return(
                <option key={index} value={secteur.id}>{secteur.nom}</option>
              ) 
            })
         }
      </select>

       </div>
     </div>

   </div>
  )
}
