const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    const sentInfo = {
        email: 'latonadeborah@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/Debb07/Task0'
    };
    res.status(200).json(sentInfo);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});