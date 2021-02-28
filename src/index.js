import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import MenuBar from "./menu/MenuBar";
import AppRoutes from "./AppRoutes";
import amber from "@material-ui/core/colors/amber";

const theme = createMuiTheme({
    palette: {
        secondary: amber,
    },
});

ReactDOM.render(
    <React.StrictMode>

        <ThemeProvider theme={theme}>
            <MenuBar/>

            <AppRoutes/>

        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
