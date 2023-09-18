const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Serve static files (HTML, JavaScript, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the calculator HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calculator.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
