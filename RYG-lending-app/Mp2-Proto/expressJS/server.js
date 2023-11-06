const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

const usersPath = path.join(__dirname, 'users.json');

app.get('/users', (req, res) => {
  try {
    const usersData = fs.readFileSync(usersPath);
    const users = JSON.parse(usersData);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/users/:userId', (req, res) => {
    const userId = Number(req.params.userId);
    try {
        const usersData = fs.readFileSync(usersPath);
        const users = JSON.parse(usersData).users;
        const user = users.find(user => user.id === userId);

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({
                status: false,
                message: 'User not found'
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error reading users.json' });
    }
});

  
  app.post('/register', (req, res) => {
    const { name, username, password } = req.body;
  
    if (name || username || password) {
      try {
        const usersData = fs.readFileSync(usersPath);
        let users = JSON.parse(usersData).users;
  
        const randomId = Date.now() + Math.floor(Math.random() * 1000);
        const user = { id: randomId, name, username, password };
  
        const userExists = users.some(user => user.username === username);
  
        if (userExists) {
          res.status(400).json({
            status: false,
            message: 'User already exists'
          });
        } else {
          users.push(user);
          fs.writeFileSync(usersPath, JSON.stringify({ users }, null, 2));

          res.status(200).json({
            status: true,
            message: 'User registered successfully',
            user
          });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error processing registration' });
      }
    } else {
      res.status(400).json({
        status: false,
        
        message: 'Fields cannot be empty',
      });
    }
  });
  
  

app.listen(PORT, () => {
  console.log(`Express server is listening to http://localhost:${PORT}`);
});
