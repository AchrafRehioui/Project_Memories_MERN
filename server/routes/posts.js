const { getPosts, createPost, updatePost } = require('../controllers/posts.js')
const express = require('express');

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);

module.exports = router;
