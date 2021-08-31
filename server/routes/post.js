const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Post = require("../models/post");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const requireLogin = require("../middlewares/requireLogin");

router.post("/createPost", requireLogin, (req, res) => {
	const { title, body, photo } = req.body;
	console.log(title, body, photo);
	if (!title || !body || !photo) {
		return res.status(401).json({
			message: "Please fill mandatory fields",
		});
	}
	req.user.password = undefined;
	const post = new Post({
		title,
		body,
		photo,
		postedBy: req.user,
	});
	post
		.save()
		.then((saved) => {
			res.json({
				post: saved,
				message: "POST SAVED",
			});
		})
		.catch((err) => console.log(err));
});

router.get("/allPosts", requireLogin, (req, res) => {
	Post.find()
		.populate("postedBy", "_id name")
		.then((posts) => {
			res.json({
				posts,
			});
		})
		.catch((err) => console.log(err));
});

router.get("/myPost", requireLogin, (req, res) => {
	Post.find({ postedBy: req.user._id })
		.populate("postedBy", "_id name ")
		.then((myPosts) => {
			console.log(req.user);
			res.json({
				myPosts,
			});
		})
		.catch((err) => console.log(err));
});

module.exports = router;
