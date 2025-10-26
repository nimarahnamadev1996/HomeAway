import { fetchProfileImage } from '@/utils/actions'
import { LucideUser } from 'lucide-react'
import React from 'react'

const UserIcon = async() => {

   const profileImage = await fetchProfileImage()

   if(profileImage){
    return(
       <img src={profileImage} className='w-6 h-6 rounded-full object-cover' />
    )
   }else{
    return  <LucideUser className='w-6 h-6 bg-primary rounded-full text-white'/>
   }

}

export default UserIcon