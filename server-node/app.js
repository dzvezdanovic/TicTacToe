const express = require('express');
const body = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(body.urlencoded({ extended: true }));
app.use(body.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
    
    const user = {
        username: req.body.username,
        password: req.body.password
    };
    console.log(user);
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json')).toString().trim());
    console.log(users);
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === user.username) {
            if (users[i].password === user.password) {
                return res.json({
                    success: true,
                    message: "OK"
                });
            } else {
                return res.json({
                    success: false,
                    message: "Wrong password!"
                });
            }
        } 
    }

    return res.json({
        success: false,
        message: "Username doesn't exist!"
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));