import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from "react-query";
import {RecoilRoot} from "recoil";
import {darkTheme} from "./theme";
import {ThemeProvider} from "styled-components";
import 'antd/dist/antd.css';

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ThemeProvider theme={darkTheme}>
                <QueryClientProvider client={queryClient}>
                    <App/>
                </QueryClientProvider>
            </ThemeProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
