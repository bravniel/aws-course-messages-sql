const express = require('express');
const cors = require('cors');

const port = process.env.PORT;
const sequelize = require('./db/sequelize');
const messagesRouter = require('./routers/messageRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use(messagesRouter);

app.use("/", (req, res) => {
    res.send("ok");
});

sequelize
  .sync()
    .then(() => app.listen(port, () => console.log('Server Connectes, port: ', port)))
    .catch(err => console.log('err', err));