import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  Stack,
  Button,
  Collapse,
  Alert,
  AlertTitle,
  Snackbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TicketsPage = () => {
  // state
  const [selectionModel, setSelectionModel] = useState([]);
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [collapseAlert, setCollapseAlert] = useState(false);
  // other
  const columns = [
    { field: "requester", headerName: "Requester", flex: 2 },
    { field: "subject", headerName: "Subject", flex: 4 },
    { field: "assignee", headerName: "Assignee", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "last_message", headerName: "Last Message", flex: 1 },
  ];
  const rows = [
    {
      id: 1,
      requester: "Abdallah Hameur Lain",
      subject: "Calcul Paye erroné",
      assignee: "Aymen",
      status: "Unresolved",
      last_message: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      requester: "Abdallah Hameur Lain",
      subject: "Bug Module Achat",
      assignee: "Aymen Boumegoura",
      status: "Unresolved",
      last_message: new Date().toLocaleDateString(),
    },
    {
      id: 3,
      requester: "Adel Tahraoui",
      subject: "Impression impossible",
      assignee: "El Hadi Tlili",
      status: "Unresolved",
      last_message: new Date().toLocaleDateString(),
    },
  ];
  // handlers
  const handleRowDelete = () => {
    if (selectionModel.length !== 0) {
      setSnackbarOpen(true);
    } else {
      setCollapseAlert(true);
      setTimeout(() => {
        setCollapseAlert(false);
      }, 2500);
    }
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  return (
    <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
      <Stack direction="row" spacing={2} p={1}>
        <Button
          variant="contained"
          color="success"
          endIcon={<AddIcon />}
          onClick={() => {
            navigate("new");
          }}
        >
          New Ticket
        </Button>
        <Button
          variant="contained"
          color="error"
          endIcon={<DeleteIcon />}
          onClick={handleRowDelete}
        >
          Delete
        </Button>
      </Stack>
      <Collapse in={collapseAlert}>
        <Alert severity="warning">Cannot Delete — No row is selected</Alert>
      </Collapse>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          checkboxSelection
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
          columns={columns}
          rows={rows}
          components={{
            Toolbar: GridToolbar,
          }}
          disableColumnMenu
        />
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          action={
            <Button
              color="inherit"
              size="small"
              onClick={(event, reason) => handleSnackbarClose(event, reason)}
            >
              UNDO
            </Button>
          }
          variant="filled"
          severity="success"
        >
          <AlertTitle>Success</AlertTitle>
          Event(s) deleted successfully
        </Alert>
      </Snackbar>
    </div>
  );
};

export default TicketsPage;
