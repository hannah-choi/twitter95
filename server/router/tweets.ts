import { Router } from "express";
import { createTweet, deleteTweet, getTweets, getTweetsById, updateTweet } from "../controller/tweetController";

const router = Router();

router.get("/", getTweets);

router.get("/:id", getTweetsById);

router.post("/", createTweet);

router.delete(`/:id`, deleteTweet);

router.put(`/:id`, updateTweet);

export default router;
