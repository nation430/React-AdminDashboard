import "./user.css";

export default function User(){
    return(

        <div className="user">
            <div className="userTitleContainer flex">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Create</button>
            </div>
        </div>
    )
}