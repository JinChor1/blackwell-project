"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PillInternal from "../ui/link/PillInternal"
import { useUserStore } from "@/store/user";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

export default function NavbarUser(){
    const userStores = useUserStore((state) => state.user);
    const dispatchLogout = useUserStore(prevState=>prevState.logout);

    return(
        <div className="content-center">
            {userStores?
                <button className="justify-center px-2 flex items-center cursor-pointer hover:scale-110 transition-all duration-200" onClick={()=>dispatchLogout()}>
                    <p className="text-white mr-2">{userStores.username}</p>
                    <FontAwesomeIcon icon={faSignOut} color="white"/>
                </button> 
             :
                
                <PillInternal color="orange" link='/auth/register'>REGISTER NOW</PillInternal>
            }
        </div>
    )
}