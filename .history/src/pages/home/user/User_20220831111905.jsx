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
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg mg w-6 h-6 rounded-full object-cover "
            />
            <div className="userShowTopTitle flex">
              <span className="userShowUsername font-semibold">Anna Becker</span>
              <span className="userShowUserTitle font-light">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo flex items-center ">
              <MdPermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annanation430</span>
            </div>
            <div className="userShowInfo flex items-center">
              <MdCalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle flex items-center">Contact Details</span>
            <div className="userShowInfo">
              <MdPhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle flex items-center">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MdMailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <MdLocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
              <div className="userUpdate"></div>
              </div>
            </div>
      
    )
}