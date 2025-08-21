import express from "express"
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public")); // Let me access style.css and script.js from views 
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

import rotas from './routes/routes.js'
app.use(rotas);

app.listen(3000)