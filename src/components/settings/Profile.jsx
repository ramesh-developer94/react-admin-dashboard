import React from 'react'
import SettingSection from './SettingSection'
import { User } from 'lucide-react'

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className='flex flex-col sm:flex-row items-center mb-6'>
        <img 
        src='https://img.freepik.com/free-vector/profile-picture-design_742173-13745.jpg'
        alt='Profile'
        className='rounded-full w-20 h-20 object-cover mr-4'
         />

         <div>
            <h3 className='text-lg font-semibold text-gray-100'>Ramesh Jha</h3>
            <p className='text-gray-100'>ramesh@buzinessware.com</p>
         </div>
      </div>
      <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				Edit Profile
			</button>
    </SettingSection>
  )
}

export default Profile