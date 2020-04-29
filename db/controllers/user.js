import User from '../models/user.js'

// export default {
//     updateUser = async () => {},
// }

export const addUser = async data => {
    try {
        await new User(data).save()
    } catch (err) {
        console.log(err)
    }
}

export const removeUser = async data => {
    try {
        console.log('deleting...')
        await User.deleteOne(data)
    } catch (err) {
        console.log(err)
    }
}

export const showUsers = async () => {
    try {
        const data = await User.find({})
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
