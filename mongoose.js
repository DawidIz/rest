import mongoose from 'mongoose'
const password = ''
const user = ''
const uri = `mongodb+srv://${user}:${password}@cluster0-jfimm.mongodb.net/rest?retryWrites=true&w=majority`

mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true})
.then(() => console.log('connected'))
.catch(()=>console.log('sth is no yes'))

const UserSchema = {
    name :String,
    date : Date
}

const User = mongoose.model('User',UserSchema)

export const showUsers = async () => {
    const data = await User.find({})
    console.log(data)
}

export const addUser = async (data) => {
    await new User(data).save()
    console.log('added user')
    showUsers()
}

// addUser({
//     name : 'dave',
//     date : new Date().toString()
// })
