const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const EmailService = require('./utils/emailService');
const emailService = new EmailService();
emailService.envCheck();
emailService.email.to = process.env.EMAIL_ACCOUNT;
emailService.email.subject = "Coffee Capital Email Service Started"
emailService.email.html = "Coffee Capital Email Service Started";
emailService.sendEmail(emailService.email.to, emailService.email);

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


// Fallback route 
app.get('*', (req, res) =>
  res.send(
    `INVALID ROUTE @: http://localhost:${PORT}`
  )
);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Coffee Capital ☕ listening at http://localhost:${PORT}...`));
});

// Xserver copy.js
// const express = require('express');
// const routes = require('./routes');
// const sequelize = require('./config/connection');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // turn on routes
// app.use(routes);

// // turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}...`));
// });
