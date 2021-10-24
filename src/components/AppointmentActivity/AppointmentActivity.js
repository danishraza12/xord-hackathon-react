import './appointmentActivity.css';
import { connect } from 'react-redux';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';

const AppointmentActivity = ({ appointmentRows }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'Name',
      width: 170,
      renderCell: (params) => {
        return (
          <div class="iconList">
            <img className="iconListImg" src={params.row.avatar} alt="User" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 210 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'visitTime', headerName: 'Visit Time', width: 130 },
    { field: 'doctor', headerName: 'Doctor', width: 160 },
    { field: 'conditions', headerName: 'Conditions', width: 160 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button className="appointmentListEdit">Edit</button>
            <DeleteOutline className="appointmentListDelete" />
          </>
        );
      },
    },
  ];

  const rows = appointmentRows;
  const [page, setPage] = useState(0);

  return (
    <div className="appointmentsContainer">
      <div className="appointment">
        <div className="appointmentTitleItem">
          <h3 className="appointmentTitle">Appointment Activity</h3>
        </div>
      </div>
      <div className="appointment">
        <div className="appointmentItem">
          <DataGrid
            page={page}
            rows={rows}
            columns={columns}
            onPageChange={(newPage) => setPage(newPage)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            pagination
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appointmentRows: state.appointmentRows,
  };
};

export default connect(mapStateToProps, {})(AppointmentActivity);
