const express = require("express");
const app = express();

// const __filename= fileURLToPath(import.meta.url);
// const __dirname= dirname(__filename);

app.get("/", (req, res) => {
  res.send("<h1>Hello my friend</h1>!");
});
  

const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));