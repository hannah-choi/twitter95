import moment from "moment";
import { Tweet } from "../model/schema";

let tweets: Tweet[] = [
    {
        id: 1,
        text: "lorem ipsum",
        created: "21 Sun",
        nickname: "Lobo",
        username: "lobo",
        url: ""
    },
    {
        id: 2,
        text: "sit dolor amet",
        created: "21 Sun",
        nickname: "Lobo",
        username: "lobo",
        url: ""
    },
    {
        id: 3,
        text: "uno dos tres cuatro",
        created: "22 Sun",
        nickname: "Nana",
        username: "nana",
        url: ""
    }
];

export async function getAll() {
    return tweets;
}

export async function getByTweetId(id: string) {
    return tweets.filter((tweet) => tweet.id === parseInt(id, 10));
}

export async function getAllByUsername(username: string) {
    return tweets.filter((tweet) => tweet.username === username);
}

export async function create(text: string, username: string, url: string, nickname: string) {
    const newTweet = {
        text,
        username,
        url,
        nickname,
        id: tweets.length + 1,
        created: moment().startOf("hour").fromNow()
    };

    tweets = [newTweet, ...tweets];
    return newTweet;
}

export async function remove(id: string) {
    tweets = tweets.filter((tweet) => tweet.id !== parseInt(id, 10));
    return;
}

export async function update(id: string, text: string) {
    const tweet = tweets.find((tweet) => tweet.id === parseInt(id, 10));
    if (tweet) {
        tweet.text = text;
    }

    return tweet;
}
