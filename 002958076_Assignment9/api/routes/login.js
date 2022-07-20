const express = require('express');
const { loginUser } = require('../controllers/loginController');
const path = require('path');
const router = express.Router();

router.get('/login', (req, res) => {
        // Render login template
    res.sendFile(path.join(__dirname, '../view', '/login.html'));
});

router.post('/auth', loginUser);

module.exports = router;
