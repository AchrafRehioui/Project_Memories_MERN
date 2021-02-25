const { getPosts, createPost, updatePost, deletePost } = require('../controllers/posts.js')
const express = require('express');

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);



module.exports = router;
