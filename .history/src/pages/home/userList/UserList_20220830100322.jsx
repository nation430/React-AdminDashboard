import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import {MdOutlineDeleteOutline} from "react-icons/md";
import { userRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList(){
  const [data, setData] = useState(userRows);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user',
     headerName: 'User', 
     width: 200,
     renderCell: (params) =>{
      return(
        <div className="userListUser flex items-center">
        <img className="userListImg w-6 h-6 rounded-full object-cover mr-3" src={params.row.avatar} alt="" />
        {params.row.userName}
      </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },

      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
             <Link to={"/user/" + params.row.id}>
              <button className="userListEdit border-none text-white">Edit</button>
            </Link>
              <MdOutlineDeleteOutline className="userListDelete text-red-700 text-lg cursor-pointer ..."/>
            </>
          );

      },
    },
    
  ];

    return(
        <div className="userList">
          <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}