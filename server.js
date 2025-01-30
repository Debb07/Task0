const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my Task0 API');
});

app.get('/info', (req, res) => {
    const sentInfo = {
        email: 'latonadeborah@gmail.com',
        currentDatetime: new Date().toISOString(),
        githubUrl: 'https://github.com/Debb07/Task0'
    };
    res.status(200).json(sentInfo);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});