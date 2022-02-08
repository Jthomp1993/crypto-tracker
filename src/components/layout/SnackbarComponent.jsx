import * as React from 'react';
import { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import SnackbarContext from '../../context/SnackbarContext';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackbarComponent() {
    const { snackbar } = useContext(SnackbarContext);
    const { handleClose } = useContext(SnackbarContext);

    return snackbar !== null && (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={snackbar.snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackbar.type} sx={{ width: '100%' }}>
          {snackbar.msg}
        </Alert>
      </Snackbar>
    </Stack>
    )
}

export default SnackbarComponent;
