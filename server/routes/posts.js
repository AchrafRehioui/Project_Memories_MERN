const { getPosts, createPost } = require('../controllers/posts.js')
const express = require('express');

const router = express.Router();

router.get('/', getPosts);

module.exports = router;
