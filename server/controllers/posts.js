const { PostMessage } = require('../models/postMessage.js');

exports.getPosts = async (req, res) => {

    try {

        const postMessages = await PostMessage.find();

        console.log(postMessage);

        res.status(200).json(postMessage);

    } catch (error) {
        res.status(404).json({ messgae: error.message });
    }
}

exports.createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}