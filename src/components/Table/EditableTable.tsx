import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridRowModesModel,
  useGridApiRef,
  GridRowId,
  GridPaginationModel,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { useState } from "react";
import toast from "react-hot-toast";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';

const EditableGridForm = () => {
  const apiRef = useGridApiRef();
  const [rows, setRows] = useState<GridRowsProp>([
    {
      id: 1,
      seqno: "",
      chkDigit: "",
      presentReading: "",
      prevReading: "",
      qnty: "",
    },
  ]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 5,
    page: 0,
  });

    // Mock function to fetch previous reading
    const fetchPrevReading = async (seqno: string, chkDigit: string) => {
        // Replace this with your actual API call or logic
        return new Promise<string>((resolve) => {
          setTimeout(() => {
            resolve('10'); 
          }, 500);
        });
      };

  // Function to handle row updates
  const handleProcessRowUpdate = async(newRow: any) => {
    const { id, seqno, chkDigit, presentReading, prevReading } = newRow;

    if (seqno && chkDigit) {
        try {
          const fetchedPrevReading = await fetchPrevReading(seqno, chkDigit);
  
          // Update row with fetched previous reading
          const updatedRow = {
            ...newRow,
            prevReading: fetchedPrevReading,
            qnty:
              presentReading && fetchedPrevReading
                ? Number(presentReading) - Number(fetchedPrevReading)
                : '',
          };
  
          setRows((prevRows) =>
            prevRows.map((row) => (row.id === updatedRow.id ? updatedRow : row))
          );
  
          // Dynamically add a new row if the last row is edited
          if (newRow.id === rows[rows.length - 1].id) {
            handleAddNewRow();
          }
  
          toast.success('Row successfully updated!');
          return updatedRow;
        } catch (error) {
          toast.error('Failed to fetch previous reading');
          console.error('Error fetching previous reading:', error);
          throw error;
        }
      }
  };

  // Function to add a new row
  const handleAddNewRow = () => {
    const newId = rows.length ? Math.max(...rows.map((row) => row.id)) + 1 : 1;
    const newRow = {
      id: newId,
      seqno: "",
      chkDigit: "",
      presentReading: "",
      prevReading: "",
      qnty: "",
    };

    setRows((prevRows) => [...prevRows, newRow]);

    // Focus on the new row
    setTimeout(() => {
      apiRef.current.setCellFocus(newId, "seqno");
    }, 500);
  };

  // Function to handle key pres (left- right)
  const handleCellKeyDown = (
    params: { field: string; id: GridRowId },
    event: { key: string; preventDefault: () => void }
  ) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();

      const fieldIndex = columns.findIndex((col) => col.field === params.field);
      const nextField = columns[(fieldIndex + 1) % columns.length].field;

      // Move focus to the next cell
      apiRef.current.setCellFocus(params.id, nextField);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();

      const fieldIndex = columns.findIndex((col) => col.field === params.field);
      if (fieldIndex == 0) {
        return;
      }
      const nextField = columns[(fieldIndex - 1) % columns.length].field;

      // Move focus to the next cell
      apiRef.current.setCellFocus(params.id, nextField);
    }
  };
  function handleSaveRow(id:any){
    console.log('Save params with id : ',id);
  }
  function handleDeleteRow(id:any){
    console.log('Delete params with id : ',id);
  }

  const columns: GridColDef[] = [
    { field: "seqno", headerName: "Seq No", editable: true, flex: 1 },
    { field: "chkDigit", headerName: "Chk Digit", editable: true, flex: 1 },
    {
      field: "presentReading",
      headerName: "Present Reading",
      editable: true,
      flex: 1,
    },
    {
      field: "prevReading",
      headerName: "Previous Reading",
      editable: true,
      flex: 1,
    },
    { field: "qnty", headerName: "Consum Quantity", editable: false, flex: 1 },
    {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 100,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<CheckCircleOutlineSharpIcon className="text-blue-500" />}
            label="Save"
            onClick={() => handleSaveRow(params.id)}
            // showInMenu
          />,
          <GridActionsCellItem
            icon={<RemoveCircleOutlineSharpIcon className="text-red-500"/>}

            label="Delete"
            onClick={() => handleDeleteRow(params.id)}
            // showInMenu
          />,
        ],
      },
  ];

  return (
    <div style={{ height: "auto", width: "100%" }}>
      <DataGrid
        sx={{
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#0069db",
            color: "#ffff",
            font: "bold",
          },
        }}
        columnHeaderHeight={35}
        rowHeight={30}
        rows={rows}
        columns={columns}
        apiRef={apiRef}
        processRowUpdate={handleProcessRowUpdate}
        // onRowEditStop={handleAddNewRow}
        onCellKeyDown={handleCellKeyDown} // Handle keydown events
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={setRowModesModel}

        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
        pageSizeOptions={[5, 10, 20]} 

        // experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
};

export default EditableGridForm;
