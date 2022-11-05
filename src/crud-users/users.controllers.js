const uuid = require('uuid')

//Database
const usersDB = [
    {
        id: '968dc483-dd6e-4ee1-9e8e-129e76c26446',
        first_name: 'Andy',
        last_name: 'Sastre',
        email: 'sastreandy@gmail.com',
        password: '123456',
        birthday: '1999-08-10'

    },
    {
        id: '968dc483-dd6e-4ee1-9e8e-129e76c26558',
        first_name: 'Ary',
        last_name: 'Sastre',
        email: 'arysastre@myemail.com',
        password: '123456',
        birthday: '2008-03-13'

    },
    {
        id: '968dc483-dd6e-4ee1-9e8e-129e76c26112',
        first_name: 'Rafael',
        last_name: 'Sastre',
        email: 'rafasas@myemail.com',
        password: '123456',
        birthday: '1978-10-26'

    }

]

//Get all the users in the database
const getAllUsers = () => {
    return usersDB
}

//Get only one user
const getUserById = (id) => {
    const data = usersDB.find(query => query.id === id)
    return data
}

//Create a new user
const createUser = (first_name, last_name, email, password, birthday) => {
    const newUser = {
        id: uuid.v4(), 
        first_name, 
        last_name,
        email,
        password,
        birthday
    }

    //Pushing the new user to the database
    usersDB.push(newUser)
    return newUser
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}