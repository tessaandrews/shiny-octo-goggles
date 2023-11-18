const PORT = 3001;
const express = require('express');
const app = express();
const path = require('path');
const userData = require('./db/db.json');
app.use(express.static('public'));


//get route to notes.html
app.get('/api/notes', (req, res) =>
 res.sendFile(path.join(__dirname, '/public/notes.html'))
 )


//get route to index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


//GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get('/userData', (req, res) => res.json(userData));


//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
app.post('/api/post-path-parameter/:name', (req, res) => {
    // Coerce the specific search term to lowercase
    const requestedName = req.params.name;
    console.log(requestedName);
  
    // Return a message if the term doesn't exist in our DB
    return res.json(requestedName);
});


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);