const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const authRouter = require('./routes/authRouter');
const questionRouter = require('./routes/questionRouter');
const statsRouter = require('./routes/statsRouter');

const buildHtml = path.resolve(process.env.PWD, '..', 'client', 'build', 'index.html');
const buildStatic = path.resolve(process.env.PWD, '..', 'client', 'build');
const serverStatic = path.resolve(process.env.PWD, 'public');

const PORT = process.env.PORT ?? 5000;

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: new Date('Dec 31, 2021'),
    httpOnly: true,
  },
};

const app = express();
app.use(session(sessionConfig));

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(buildStatic));
app.use(express.static(serverStatic));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/api/questions', questionRouter);
app.use('/api/stats', statsRouter);

app.get('*', (req, res) => {
  res.sendFile(buildHtml);
});

app.listen(PORT, () => {
  console.log('server started');
});
