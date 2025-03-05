import { useState } from "react"
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
    const [bannerUrl, setBannerUrl] = useState("../assets/cover.jpg");

    const [profileUrl, setProfileUrl] = useState("../assets/Dog.png");

    const handleBannerChange = (event: any) => {
        const file = event.target.files[0]

        if(file){
            setBannerUrl(URL.createObjectURL(file));
        }
    }

    const handleProfileChange = (event: any) => {
        const file = event.target.files[0]

        if(file){
            setProfileUrl(URL.createObjectURL(file))
        }
    }

  return (
        <div className="relative w-[94%] ml-[5rem]">
            <div className="relative">
                <img src={bannerUrl} alt=""  className="w-full h-60 object-cover bg-gray-200"/>
                <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
                    <label htmlFor="banner-upload" className="cursor-pointer">
                        <FaCamera size={24} />
                    </label>

                <input type="file" id="banner-upload" accept="image/" className="hidden" 
                       onChange={handleBannerChange}/>

                </button>
            </div>

            {/* LOGO */}
            <div className="flex items-center ml-4 mt-[2rem]">
                <img src={profileUrl} alt="" 
                      className="w-40 h-40 object-cover rounded-full border-white relative bg-gray-200"    
                    />  

            <button className="absolute ml-[3.5rem] z-10 mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
                <label htmlFor="profile-upload" className="cursor-pointer">
                    <FaCamera size={24}/>
                </label>
                <input type="file" id="profile-upload" accept="image/" className="hidden" 
                       onChange={handleProfileChange}/>
            </button>  

            {/* DETAILS */}
            <div className="ml-4 mt-4">
                <h1 className="text-2xl font-bold ml-[1rem]">Dog</h1>
                <p className="ml-[1rem]">1M Views</p>
                <p className="mt-2 ml-[1rem]">
                    Short description of the Channel. An overview of the content and what to expect.
                </p>
                <button className="ml-[1rem] mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
                    Subscribe
                </button>
            </div>
            </div> 

                <Tabs />

        </div>
  )
}

export default Profile