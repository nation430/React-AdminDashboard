import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';



export default function UserList(){

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userName', headerName: 'userName', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
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
        avater: ' <img src="images/member1.jpg" alt="image" className="wiggetLgImg w-6 h-6 rounded-full object-cover" />',
        email: "jon@gmail.com",
        status: "active" ,
        transaction: "$120.00"
      },

      { id: 2,
        userName: 'Jon Snow',
         avater: ' <img src="images/member1.jpg" alt="image" className="wiggetLgImg w-6 h-6 rounded-full object-cover" />',
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },

       { id: 3,
        userName: 'Jon Snow',
         avater: ' <img src="images/member1.jpg" alt="image" className="wiggetLgImg w-6 h-6 rounded-full object-cover" />',
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },

       { id: 4,
        userName: 'Jon Snow',
         avater: ' <img src="images/member1.jpg" alt="image" className="wiggetLgImg w-6 h-6 rounded-full object-cover" />',
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },

       { id: 5,
        userName: 'Jon Snow',
         avater: ' <img src="images/member1.jpg" alt="image" className="wiggetLgImg w-6 h-6 rounded-full object-cover" />',
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },

       { id: 6,
        userName: 'Jon Snow',
         avater: ' <img src="images/member1.jpg" alt="image" className="wiggetLgImg w-6 h-6 rounded-full object-cover" />',
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },

       { id: 7,
        userName: 'Jon Snow',
         avater: ' <img src="images/member1.jpg" alt="image" className="wiggetLgImg w-6 h-6 rounded-full object-cover" />',
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },

       { id: 8,
        userName: 'Jon Snow',
         avater: ' <img src="images/member1.jpg" alt="image" className="wiggetLgImg w-6 h-6 rounded-full object-cover" />',
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },


       { id: 9,
        userName: 'Jon Snow',
         avater: ' <img src="images/member1.jpg" alt="image" className="wiggetLgImg w-6 h-6 rounded-full object-cover" />',
         email: "jon@gmail.com",
         status: "active" ,
         transaction: "$120.00"
       },

       { id: 10,
        userName: 'Jon Snow',
         avater: ' <img src="images/member1.jpg" alt="image" className="wiggetLgImg w-6 h-6 rounded-full object-cover" />',
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