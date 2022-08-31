import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';



export default function UserList(){

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user',
     headerName: 'User', 
     width: 200,
     renderCell: (params) =>{
      return(
        <div className="userListUser flex items-center">
        <img className="userListImg w-6 h-6 rounded-full object-cover" src={params.row.avatar} alt="" />
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
    
  ];
  
  const rows = [
    { id: 1,
       userName: 'Jon Snow',
        avater:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active" ,
        transaction: "$120.00"
      },

      { id: 2,
        userName: 'Jon Snow',
        avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },

       { id: 3,
        userName: 'Jon Snow',
         avater: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },

       { id: 4,
        userName: 'Jon Snow',
         avater: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },

       { id: 5,
        userName: 'Jon Snow',
         avater: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },

       { id: 6,
        userName: 'Jon Snow',
         avater: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },

       { id: 7,
        userName: 'Jon Snow',
         avater:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },

       { id: 8,
        userName: 'Jon Snow',
         avater: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },


       { id: 9,
        userName: 'Jon Snow',
         avater: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },

       { id: 10,
        userName: 'Jon Snow',
         avater:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },
  
  ];


    return(
        <div className="userList">
          <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}