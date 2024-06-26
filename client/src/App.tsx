import React from "react";
import Header from "./components/Header/Header";
import { Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { ITweetService } from "./services/tweet";
import AllTweets from "./pages/AllTweets";
import UserTweets from "./pages/UserTweets";
import classNames from "classnames";
import styles from "./App.module.scss";
import { useAuth } from "./context/Auth";

type Props = {
    tweetService: ITweetService;
};

function App({ tweetService }: Props) {
    const history = useHistory();
    const { user, logout } = useAuth();

    const onAllTweets = () => {
        history.push("/");
    };

    const onMyTweets = () => {
        history.push(`/${user?.username}`);
    };

    const onLogout = () => {
        if (window.confirm("Do you want to log out?")) {
            logout();
            history.push("/");
        }
    };

    return (
        <div className={classNames(styles.app, "window")}>
            <Header title='Twitter 98' />
            <Navbar onLogout={onLogout} onAllTweets={onAllTweets} onMyTweets={onMyTweets} />
            <Switch>
                <main className={styles.main}>
                    <Route exact path='/'>
                        <AllTweets tweetService={tweetService} />
                    </Route>
                    <Route exact path='/:username'>
                        <UserTweets tweetService={tweetService} />
                    </Route>
                </main>
            </Switch>
        </div>
    );
}

export default App;
