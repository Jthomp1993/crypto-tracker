import { useState, Fragment, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged  } from 'firebase/auth';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import SnackbarContext from '../context/SnackbarContext';

function Account() {
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [emailErrorText, setEmailErrorText] = useState(null);
    const [passwordErrorText, setPasswordErrorText] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',    });

    const { email, password } = formData;
    const { setSnackbar } = useContext(SnackbarContext);

    const useStyles = makeStyles({
        root: {
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0d96d6"
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0d96d6"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0d96d6"
          },
          "& .MuiFormLabel-root": {
              color: "#0d96d6"
          },
          "& .MuiFilledInput-root": {
              background: "#0d96d6"
          } 
        }
      });

      const classes = useStyles();
    
    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
    const uid = user.uid;
        console.log(`user is signed in with the id ${uid}`);
    // ...
    } else {
        console.log('user is signed out @@@');
    }
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        var emailRe = /\S+@\S+\.\S+/;
        var testEmail = emailRe.test(formData.email);
        if(testEmail === false) {
            setEmailInvalid(true);
            setEmailErrorText('Please enter a valid email');
        } else {
            setEmailInvalid(false);
            setEmailErrorText(null);
        }
    
        var passwordRe = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        var testPassword = passwordRe.test(formData.password);
        if(testPassword === false) {
            setPasswordInvalid(true);
            setPasswordErrorText('Please enter a password that contains between 6 and 20 characters and at least one uppercase and one lowercase letters.');
        } else {
            setPasswordInvalid(false);
            setPasswordErrorText(null);
        }

        if(testEmail && testPassword) {
            try {
                const auth = getAuth();
    
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
                if(userCredential.user) {
                    navigate('/');
                    setSnackbar(true, 'success', 'Your are now signed in.');
                }
            } catch (error) {
                console.log('Error');
            }
        }

        
    }

    return ( 
        <Fragment>
            <Box component='form' onSubmit={onSubmit} sx={{ '& .MuiTextField-root': { m: 1, width: { xs: '30ch', sm: '40ch'} } }}
                noValidate autoComplete="off">
                <Grid container direction="column" columnSpacing={1} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <Item>
                            <TextField error={emailInvalid} helperText={emailErrorText} onChange={onChange} required className={classes.root} sx={{  input: {color: 'white'}, mb: '1rem' }} id="email" type="email" label="Email" variant="outlined"  />
                        </Item>
                        <Item>
                            <TextField onChange={onChange} required error={passwordInvalid} helperText={passwordErrorText} className={classes.root} sx={{  input: {color: 'white'}, mb: '1rem' }} id="password" type="password" label="Password" variant="outlined" autoComplete="off" />
                        </Item>
                        <Item>
                            <Button type='submit' sx={{ mt: '1rem', mx: '1rem', backgroundColor: '#13cf81', float: 'right' }} variant="contained">Sign In</Button>
                        </Item>
                        <Item>
                            <Link style={{ color: '#fff'}} to="/sign-up">
                                <p>Don't have an account? Sign up instead</p>
                            </Link>
                        </Item>
                    </Grid>
                </Grid> 
            </Box>
        </Fragment>
    )
}

export default Account
