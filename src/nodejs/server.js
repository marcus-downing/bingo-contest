
const viewsDir = __dirname+'/views/';
const publicDir = __dirname+'/../../public';


// Config
const conf = require('./config');
const viewHelpers = require('./view-helpers')(conf);


// Web server
const express = require('express');
const express_hbs  = require('express-handlebars');

const app = express();

var xhbs = express_hbs.create({
    // extname: '.hbs',
    defaultView: 'default',
    defaultLayout: 'main',
    layoutsDir: viewsDir + 'layouts/',
    partialsDir: viewsDir + 'partials/',
    helpers: viewHelpers,
  });

app.engine('handlebars', xhbs.engine);
app.set('view engine', 'handlebars');
app.set('views', viewsDir);
app.use(express.static(publicDir));


// Auth
// const auth = require('./auth')(conf);


var loginGuard = function(fn) {
  return function (req, res) {
    // if (conf('require_login') && !auth.isLoggedIn(req)) {
    //     return renderLogin(req, res);
    // }
    return fn();
  }
};




// Pages
// app.get('/', (req, res) => loginGuard(req, res, () => renderHome(req, res)));
// app.get('/', (req, res) => loginGuard(req, res, () => res.render('index', { title: 'Bingo Writing Contests', isLoggedIn: auth.isLoggedIn(req) })));
app.get('/', (req, res) => res.render('index', { title: 'Bingo Writing Contests' }));
// app.get('/contest/:game', (req, res) => loginGuard(req, res, () => renderContestPage(req, res)));



// go!
let listen_port = conf.listen_port;
app.listen(listen_port, () => console.log(`Listening on http://localhost:${listen_port}/\n\n`));
