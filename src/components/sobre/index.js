import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'Planta',
    headerName: 'Planta',
    width: 150,
    editable: true,
  },
  {
    field: 'Status',
    headerName: 'Status',
    width: 150,
    editable: true,
  },
  {
    field: 'Tempo',
    headerName: 'Tempo',
    type: 'number',
    width: 110,
    editable: true,
  },
 
];

const rows = [
  { id: 1, Status: 'Normal', Planta: 'Tomate', Tempo: 35 },
  { id: 2, Status: 'Normal', Planta: 'Alface', Tempo: 42 },
  { id: 3, Status: 'Normal', Planta: 'Tomate', Tempo: 45 },
  { id: 4, Status: 'Normal', Planta: 'Tomate', Tempo: 16 },
  { id: 5, Status: 'Normal', Planta: 'Tomate', Tempo: 75 },
  { id: 6, Status: 'Alterado', Planta: 'Morango', Tempo: 150 },
  { id: 7, Status: 'Normal', Planta: 'Morango', Tempo: 44 },
  { id: 8, Status: 'Alterado', Planta: 'Tomate', Tempo: 36 },
  { id: 9, Status: 'Alterado', Planta: 'Alface', Tempo: 65 },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '40%', mt: 12, ml: 7 }}>
        <h3>STATUS</h3>
      <DataGrid 
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
