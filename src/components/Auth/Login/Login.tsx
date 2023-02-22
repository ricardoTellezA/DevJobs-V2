import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import styles from "./Login.module.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Login = ({ isLogin }: { isLogin: any }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#6e07f3",
        dark: "#6e07f3",
      },

      secondary: {
        main: "#6e07f3",
        dark: "#6e07f3",
      },
    },
  });
  return (
    <>
      <h1 className={styles.title}>INICIA SESIÓN</h1>

      <ThemeProvider theme={theme}>
        <div className={styles.container}>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <TextField
              id="input-with-icon-textfield"
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Box>
          <div>
            <p
              onClick={() => isLogin(false)}
              className="text-primary text-[15px] cursor-pointer"
            >
              Registrarse
            </p>
          </div>
          <div className="mt-2">
            <Button variant="outlined" color="primary">
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Login;
