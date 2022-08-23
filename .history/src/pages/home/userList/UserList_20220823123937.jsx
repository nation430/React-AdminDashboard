import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';



export default function UserList(){

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
  ];
  
  const rows = [
    { id: 1, userName: 'Jon Snow', avater: ' <img src="images/member1.jpg" alt="image" className="wiggetLgImg w-6 h-6 rounded-full object-cover" />', age: 35 },
  
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