import User from '../models/user.js'

export default {
    add: async data => {
        try {
            await new User(data).save()
        } catch (err) {
            console.log(err)
        }
    },
    remove: async data => {
        try {
            console.log('deleting...')
            await User.deleteOne(data)
        } catch (err) {
            console.log(err)
        }
    },
    find: async (data = {}, filter = {}) => {
        try {
            return await User.find(data, filter)
        } catch (err) {
            console.log(err)
        }
    },

    show: async () => {
        try {
            const data = await User.find({})
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    },
}
