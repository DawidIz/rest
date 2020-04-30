import mongoose from 'mongoose'

export const connect = async (user, password) => {
    try {
        const uri = `mongodb+srv://${user}:${password}@cluster0-jfimm.mongodb.net/rest?retryWrites=true&w=majority`
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('db connected')
    } catch (err) {
        console.error('db not connected', err)
    }
}
