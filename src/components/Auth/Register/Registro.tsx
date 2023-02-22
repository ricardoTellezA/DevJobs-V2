import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import styles from "../Login/Login.module.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";



const Registro = ({ isLogin }: { isLogin: any }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    name: false,
    lastName: false,
    email: false,
    password: false,
  });
  const theme = createTheme({
    palette: {
      primary: {
        main: "#6e07f3",
        dark: "#6e07f3",
      },



      warning: {
        main: "#FF0000",
        dark: "#FF0000",
      }
    },
  });





  const handleChange = (e: string, name: string) => {
    setUserInfo({ ...userInfo, [name]: e });
  };


  const handleSendInfo = () => {

    if (!userInfo.name || !userInfo.lastName || !userInfo.email || !userInfo.password) {
      setError({
        name: !userInfo.name ? true : false,
        lastName: !userInfo.lastName ? true : false,
        email: !userInfo.email ? true : false,
        password: !userInfo.password ? true : false,
      })
    }


  };

  useEffect(() => {
    if (userInfo.name || userInfo.lastName || userInfo.email || userInfo.password) {
      setError({
        name: userInfo.name ? false : true,
        lastName: userInfo.lastName ? false : true,
        email: userInfo.email ? false : true,
        password: userInfo.password ? false : true,
      })
    }
  }, [userInfo]);



  return (
    <>
      <h1 className={styles.title}>REGISTRO</h1>

      <ThemeProvider theme={theme}>
        <div className={styles.container}>

          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Nombre
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }

                onChange={(e) => handleChange(e.target.value, "name")}
                value={userInfo.name}
                error={error.name}

              />
            </FormControl>
            <TextField
              id="input-with-icon-textfield"
              label="Apellido"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"

              onChange={(e) => handleChange(e.target.value, "lastName")}
              value={userInfo.lastName}
              error={error.lastName}


            />
          </Box>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
              <Input
                type="email"
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }

                onChange={(e) => handleChange(e.target.value, "email")}
                value={userInfo.email}
                error={error.email}

              />

            </FormControl>
            <TextField
              type="password"
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

              onChange={(e) => handleChange(e.target.value, "password")}
              value={userInfo.password}
              error={error.password}

            />
          </Box>

          <div>
            <p
              className="text-primary text-[15px] cursor-pointer"
              onClick={() => isLogin(true)}
            >
              Iniciar Sesión
            </p>
          </div>
          <div className="mt-2">
            <Button variant="outlined" color="primary" onClick={handleSendInfo}>
              Registrarse
            </Button>
          </div>

        </div>
      </ThemeProvider>
    </>
  );
};

export default Registro;
