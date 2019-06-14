const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));

const PORT = process.env.PORT || 8888;


app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});