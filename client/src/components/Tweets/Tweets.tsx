import React, { useEffect, useState } from "react";
import { Tweet } from "../../model/model";
import { TweetCard } from "../TweetCard/TweetCard";
import { ITweetService } from "../../services/tweet";
import Message from "../Message/Message";
import { useHistory } from "react-router-dom";
import TweetWriter from "../TweetWriter/TweetWriter";

import styles from "./Tweets.module.scss";
import UserProfile from "../UserProfile/UserProfile";
import { useAuth } from "../../context/Auth";

type Props = {
    tweetService: ITweetService;
    username?: string;
    writable?: boolean;
};

const Tweets = React.memo(({ tweetService, username, writable = false }: Props) => {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [error, setError] = useState<string>("");
    const [showWriter, setShowWriter] = useState<boolean>(true);
    const history = useHistory();
    const user = useAuth();

    useEffect(() => {
        tweetService
            .getTweets(username)
            .then((tweets) => {
                setTweets([...tweets]);
            })
            .catch(onError);
    }, [tweetService]);

    const onCreate = (tweet: Tweet) => {
        setTweets((tweets) => [tweet, ...tweets]);
    };

    const onDelete = (tweetID: number) =>
        tweetService
            .deleteTweet(tweetID)
            .then(() => setTweets((tweets) => tweets.filter((tweet) => tweet.tweetID !== tweetID)))
            .catch((error: Error) => setError(error.toString()));

    const onError = (error: Error) => {
        setError(error.toString());
        setTimeout(() => {
            setError("");
        }, 3000);
    };

    const onUpdate = (tweetID: number, text: string) => {
        tweetService
            .updateTweet(tweetID, text)
            .then((updated) =>
                setTweets((tweets) => tweets.map((item) => (item.tweetID === updated.tweetID ? updated : item)))
            )
            .catch((error) => error.toString());
    };

    const onWriterClose = () => {
        setShowWriter(false);
    };

    const onUsernameClick = (tweet: Tweet) => history.push(`/${tweet.username}`);

    return (
        <>
            {!writable && username && <UserProfile username={username} />}
            {writable && showWriter && (
                <TweetWriter
                    onWriterClose={onWriterClose}
                    tweetService={tweetService}
                    onCreate={onCreate}
                    onError={onError}
                />
            )}
            {error && <Message text={error} isAlert={true} />}
            {(tweets.length === 0 || !tweets) && <p className='tweets-empty'>No Tweets Yet</p>}
            <ul className={styles.tweetsContainer}>
                {tweets.length === 0 && <p>No tweets yet</p>}
                {tweets.map(
                    (tweet) =>
                        tweet && (
                            <TweetCard
                                key={tweet.tweetID}
                                tweet={tweet}
                                onDelete={onDelete}
                                onUpdate={onUpdate}
                                onUsernameClick={onUsernameClick}
                            />
                        )
                )}
            </ul>
        </>
    );
});

export default Tweets;
