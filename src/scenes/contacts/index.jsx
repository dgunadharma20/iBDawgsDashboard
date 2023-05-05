import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import mockDataContacts from "../../data/filt_data.json";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

mockDataContacts.forEach((item, i) => {
  item.id = i+1;
})

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "Fwd_Packet_Length_Max",
      headerName: "Fwd_Packet_Length_Max",
      flex: 1,
    },
    {
      field: "Init_Win_bytes_forward",
      headerName: "Init_Win_bytes_forward",
      flex: 1,
    },
    {
      field: "Subflow_Fwd_Bytes",
      headerName: "Subflow_Fwd_Bytes",
      flex: 1,
    },
    {
      field: "Fwd_Packet_Length_Mean",
      headerName: "Fwd_Packet_Length_Mean",
      flex: 1,
    },
    {
      field: "Subflow_Fwd_Packets",
      headerName: "Subflow_Fwd_Packets",
      flex: 1,
    },
    {
      field: "Avg_Fwd_Segment_Size",
      headerName: "Avg_Fwd_Segment_Size",
      flex: 1,
    },
    {
      field: "Destination_Port",
      headerName: "Destination_Port",
      flex: 1,
    },
    {
      field: "Bwd_Packet_Length_Min",
      headerName: "Bwd_Packet_Length_Min",
      flex: 1,
    },
    {
      field: "Total_Length_of_Fwd_Packets",
      headerName: "Total_Length_of_Fwd_Packets",
      flex: 1,
    },
    {
      field: "act_data_pkt_fwd",
      headerName: "act_data_pkt_fwd",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Feature Selection"
        subtitle="List of top 10 features"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
