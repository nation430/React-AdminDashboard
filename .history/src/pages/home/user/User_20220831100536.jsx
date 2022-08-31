import "./user.css";

export default function User(){
    return(

        <div className="user">
            <div className="userTitleContainer flex items-center justify-between">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton border-none cursor-pointer---">Create</button>
            </div>
            <div className="userContainer flex">
              <div className="userShow">
                  <div className="userShowTop">
                  <img src="images/member1.jpg" alt="MemberImg" class="memberAvater w-6 h-6 rounded-full object-cover">
                  </div>
                  <div className="userShowTopTitle">
                  <span className="userShowUsername">Anna Nation</span>
                  <span className="userShowUserTitle">FrontEnd Developer</span>
            </div>
              </div>
              <div className="userUpdate"></div>
            </div>
        </div>
    )
}