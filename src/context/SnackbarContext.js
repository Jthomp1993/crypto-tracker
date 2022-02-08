import { createContext, useReducer } from 'react';
import snackbarReducer from './SnackbarReducer';

const SnackbarContext = createContext();

export const SnackbarProvider = ({children}) => {
    const initialState = null;

    const [state, dispatch] = useReducer(snackbarReducer, initialState);

    const setSnackbar = (snackbarOpen, type, msg) => {
        dispatch({
            type: 'SET_SNACKBAR',
            payload: {snackbarOpen, type, msg}
        })

        setTimeout(() => dispatch({ type: 'REMOVE_SNACKBAR'}), 5000);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
    }
    dispatch({ type: 'REMOVE_SNACKBAR'})
    };

    return <SnackbarContext.Provider value={{ snackbar: state, setSnackbar, handleClose }}>
        {children}
    </SnackbarContext.Provider>
}

export default SnackbarContext;