require('dotenv').config();
// require('./config/passport');

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const connectDB = require('./config/db');
const app = express();
let cors = require('cors');
const bodyParser = require('body-parser');
const teamRoutes = require('./routes/api/team');
const authRoutes = require('./routes/api/auth');

app.use(cookieParser());
mongoose.Promise = global.Promise;
app.use(passport.initialize());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", '*');
//     next();
// });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    //  Remove caching
    res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/team', teamRoutes);
app.use('/', authRoutes);


// app.use(passport.initialize());
connectDB();

app.use(cors({origin: true, credentials: true}));


app.use(express.json({extended: false}));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on ${port}`));



// const express = require('express');
// const connectDB = require('./config/db');
// const app = express();
// let cors = require('cors');
// const bodyParser = require('body-parser');
// const teamRoutes = require('./routes/api/team');

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", '*');
//     next();
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.get('/', (req, res) => res.send('Hello World!'));
// app.use('/team', teamRoutes);

// connectDB();

// app.use(cors({origin: true, crednetials: true}));


// app.use(express.json({extended: false}));

// const port = process.env.PORT || 8082;

// app.listen(port, () => console.log(`Server running on ${port}`));

