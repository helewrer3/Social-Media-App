const path = require('path')
const express = require('express')
const {db} =  require('./src/db/models')
const {userRoute} = require('./src/routes/users')
const {postRoute} = require('./src/routes/posts')
const {commentRoute} = require('./src/routes/posts/comments')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/comments', commentRoute)
app.use('/', express.static(path.join(__dirname, '/src/public')));

db.sync()
.then(() => {
    const port = process.env.PORT;
    app.listen(process.env.PORT, () => console.log(process.env.PORT));
})
.catch((err) =>{
    console.error(err);
})
