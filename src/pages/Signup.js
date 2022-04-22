import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';


const Error = styled.p`
  color: red;
  font-size: 12px;
  padding-left: 7px;
`


const theme = createTheme();

function SignUp() {

const [firstname, setFirstname] = React.useState('')
const [lastname, setLastname] = React.useState('')
const [email, setEmail] = React.useState('')
const [password, setPassword] = React.useState('')
const [fnameValid, setFnameValid] = React.useState(true)
const [lnameValid, setLnameValid] = React.useState(true)
const [emailisValid, setEmailisValid] = React.useState(true)
const [passwordisValid, setPasswordisValid] = React.useState(true)


const firstnamehandler = (e) => {
  setFirstname(e.target.value)
}

const lastnamehandler = (e) => {
  setLastname(e.target.value)
}

const emailhandler = (e) => {
  setEmail(e.target.value)
}

const passwordhandler = (e) => {
  setPassword(e.target.value)
}

  const handleSubmit = (event) => {
    event.preventDefault();

    if(firstname.trim().length === 0) {
      setFnameValid(false)
      return
    }
    setFnameValid(true)

    if(lastname.trim().length === 0) {
      setLnameValid(false)
      return
    }
    setLnameValid(true)

    if(email.trim().length === 0 || !email.includes('@')) {
      setEmailisValid(false)
      return
    }
    setEmailisValid(true)

    if(password.trim().length === 0 || password.trim().length < 8) {
      setPasswordisValid(false)
      return
    }
    setPasswordisValid(true)



    console.log(firstname, lastname, email, password)
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={firstnamehandler}
                  value={firstname}
                />
              {!fnameValid && <Error>Enter Name</Error>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={lastnamehandler}
                  value={lastname}
                />
                {!lnameValid && <Error>Enter Name</Error>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={emailhandler}
                  value={email}
                />
                {!emailisValid && <Error>Email should include @</Error>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={passwordhandler}
                  value={password}
                />
                {!passwordisValid && <Error>Password should be atleast 8 characters</Error>}
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:'#17C5C2' }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}

export default SignUp