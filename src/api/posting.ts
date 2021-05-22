import express, { Request, Response } from "express";

const router = express.Router();

import Posting from "../models/Posting";

/**
 *  @route GET api/posting
 *  @desc Get all posts
 *  @access Private
 */
router.get("/", async (req: Request, res: Response) => {
    try {
        const posting = await Posting.find();
        res.json(posting);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

/**
 *  @route GET api/category/:category
 *  @desc Get post by category
 *  @access Private
 */
router.get("/category/:category", async (req: Request, res: Response) => {
    try {
        const post = await Posting.find({ category: req.params.category });


        if (!post) {
            return res.status(404).json({ msg: "Post not found 404" });
        }
        res.json(post);
    } catch (error) {
        console.error(error.message);
        if (error.kind === "ObjectId") {
            return res.status(404).json({ msg: "Post not found 404!!" });
        }
        res.status(500).send("Server Error");
    }
});

/**
 *  @route GET api/detail/:id
 *  @desc Get post detail by ID
 *  @access Private
 */
router.get("/detail/:id", async (req: Request, res: Response) => {
    try {
        const post = await Posting.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: "Post not found" });
        }
        res.json(post);
    } catch (error) {
        console.error(error.message);
        if (error.kind === "ObjectId") {
            return res.status(404).json({ msg: "Post not found" });
        }
        res.status(500).send("Server Error");
    }
});

module.exports = router;