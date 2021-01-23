const route = require('express').Router();
const {getUserById, createUser} = require('../../controllers/users')

route.get('/:id', async (req, res) => {
    let user;
    user = await getUserById(req.params.id);
    console.log(req.params.id);
    if(user) res.status(200).send(user);
    else res.send('Invalid User Id/Name');
})

route.post('/', async(req, res) => {
    const user = await createUser();
    res.status(201).send(user);
})

module.exports = {userRoute: route}