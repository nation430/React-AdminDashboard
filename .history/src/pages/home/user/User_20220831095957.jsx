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
                  <div className="userShowTop"></div>
                  <div className="userSHowBottom"></div>
              </div>
              <div className="userUpdate"></div>
            </div>
        </div>
    )
}