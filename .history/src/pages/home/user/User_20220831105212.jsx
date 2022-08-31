import "./user.css";
import {MdPermIdentity,  MdCalendarToday, MdPhoneAndroid, MdMailOutline, MdLocationSearching } from "react-icons/md";

export default function User(){
    return(

        <div className="user">
            <div className="userTitleContainer flex items-center justify-between">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton border-none cursor-pointer---">Create</button>
            </div>
            <div className="userContainer flex">
              <div className="userShow">
              <div className="userShowTop flex items-center">
              <img src="images/member1.jpg" alt="image" className="userShowImg w-6 h-6 rounded-full object-cover" />
            <div className="userShowTopTitle flex">
              <span className="userShowUsername font-semibold ">Anna Nation</span>
              <span className="userShowUserTitle font-light">FrontEnd Developer</span>
            </div>
          </div>
              </div>

              <div className="userShowBottom">
            <span className="userShowTitle font-semibold">Account Details</span>
            <div className="userShowInfo">
              <MdPermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annnation430</span>
            </div>
            <div className="userShowInfo">
              <MdCalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MdPhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MdMailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annanation430@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <MdLocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
              <div className="userUpdate"></div>
            </div>
      
    )
}