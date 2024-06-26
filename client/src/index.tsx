import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import TweetService from "./services/tweet";
import AuthService, { AuthErrorEventBus } from "./services/auth";
import { AuthProvider } from "./context/Auth";
import { HttpHelper } from "./network/http";

const httpHelper = new HttpHelper(process.env.REACT_APP_BASE_URL!);
const tweetService = new TweetService(httpHelper);
const authService = new AuthService(httpHelper);
const authErrorEventBus = new AuthErrorEventBus();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider authService={authService} authErrorEventBus={authErrorEventBus}>
                <App tweetService={tweetService} />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
