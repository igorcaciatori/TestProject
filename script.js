const express = require('express');
const cors = require('cors');
const PORT = 3000;
const router = require('./Routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log('PORTA: 3000');
});