const express = require('express');
const router = express.Router();

// Define your item-related routes here
router.get('/', (req, res) => {
    res.send('Items route');
});

module.exports = router;
