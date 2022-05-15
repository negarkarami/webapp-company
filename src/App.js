
import './App.css';
import { Routes, Route } from "react-router-dom"
import LoginPage from "./component/views/login/LoginPage";
import { createTheme, ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import Menu from "./component/views/menu/Menu";
import Test from "./component/views/Test";


const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

const theme = createTheme({
    typography: {
        fontFamily: [
            ""
        ].join(",")
    }
});

function App() {
  return (
      <RTL>
          <div className="App" dir="rtl">
              <ThemeProvider theme={theme}>
                  <Typography>
                      <Routes>
                          <Route path="/login"  element={<LoginPage/>} exact />
                          <Route path="/"  element={<Menu/>} exact />
                      </Routes>
                  </Typography>
              </ThemeProvider>
          </div>
      </RTL>
  );
}

export default App;
