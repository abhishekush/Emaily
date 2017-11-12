const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const morgan = require('morgan');

require('./models/User');
mongoose.connect(keys.mongoURI);

require('./services/passport');

/*
  each app.use is wiring up a middleware in the application,
  - middlewares are small functions that are used to modify (filter) incoming 
    requests before they are sent to route handlers

    Request -> cookieSession (Extracts cookie data) -> passport -> deserialize user 
*/
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

/* Log every request to console in development mode */
app.use(morgan('dev'));

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
console.log(PORT);

app.listen(PORT);
