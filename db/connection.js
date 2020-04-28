import mongoose from 'mongoose'

// mongoose
//     .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('connected'))
//     .catch(() => console.log('sth is no yes'))

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
