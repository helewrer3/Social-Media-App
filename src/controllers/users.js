const {generate} = require('../utils/username');
const {User} = require('../db/models');

async function createUser() {
    const user = await User.create({
        name: generate()
    })
    return user
}

async function getUserById(id) {
    return await User.findOne({where: {id: id}})
}

// async function task(){
//     console.log(await createUser());
//     console.log(await createUser());
//     console.log(await createUser());
//     console.log(await createUser());
//     console.log(await createUser());
//     console.log(await createUser());
//     console.log(await createUser());
// }

// task();

module.exports = {createUser, getUserById}