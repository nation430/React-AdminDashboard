import "./user.css";
// import {MdPermIdentity,  MdCalendarToday, MdPhoneAndroid, MdMailOutline, MdLocationSearching } from "react-icons/md";

export default function User(){
    return(

        <div className="user">
            <div className="userTitleContainer flex items-center justify-between">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton border-none cursor-pointer---">Create</button>
            </div>
            <div className="userContainer flex">
             

            
      
              <div className="userUpdate"></div>
              </div>
            </div>
      
    )
}