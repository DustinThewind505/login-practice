const express = require('express');

const server = express();

const PORT = 420;

server.listen(PORT, () => 
    console.log(`\n ** API listening on http://localhost${PORT} ** n\`)
);