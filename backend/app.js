const express = require('express');
const connectDB = require('./config/db');
const app = express();
let cors = require('cors');
const bodyParser = require('body-parser');
const teamRoutes = require('./routes/api/team');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", '*');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/team', teamRoutes);

connectDB();

app.use(cors({origin: true, crednetials: true}));


app.use(express.json({extended: false}));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on ${port}`));
