import express from 'express'
import mongoose from 'mongoose'
import BookEntry from './models/BookEntry.js'
import User from './models/user.js'
import CheckOut from './models/checkout.js'

import 'dotenv/config'

const app = express()

const PORT = process.env.PORT

app.use(express.json())

await mongoose.connect(process.env.MONGO_URL)

console.log('MONGO connected')
app.get('/', (req, res) => {
    res.send("Hello World")

})
// Book Entry CURD APIs
app.get('/posts', async (req, res) => {
    const posts = await BookEntry.find({})
    console.log(posts)
    res.json(posts)
})

app.post('/posts', async (req, res) => {
    try {
        console.log(req.body)
        //let newUser =User.create(req.body)
        const postDoc = new BookEntry({
            author: req.body.author,
            title: req.body.title,
            genre: req.body.genre
           
        })
        const result = await postDoc.save()
        //Alternative;
        //const result =await Post.create({author:req.body.author})
        res.json(result)
    } catch (error) {
        return res.status(500).send({ message: 'Error while inserting item', error });
    }
})


app.delete('/posts/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        const result = await BookEntry.findByIdAndDelete(req.params.id)

        if (!result) {
            return res.status(404).send({ message: 'Item not found' });
        }
        res.send({ message: 'Item deleted successfully', Post: result });
    } catch (error) {
        return res.status(500).send({ message: 'Error while deleting item', error });
    }
})


app.patch('/posts/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        const resultUpdate = await BookEntry.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        )
        if (!resultUpdate) {
            return res.status(404).send({ message: 'Item not found' });
        }
        res.send({ message: 'Item updated successfully', Post: resultUpdate });
    } catch (error) {
        return res.status(500).send({ message: 'Error while updating item', error });
    }
})



// Users schema POST APIs
app.post('/users', async (req, res) => {
    try {
        console.log(req.body)
            const usersDoc = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
            
        })
        const result = await usersDoc.save()
        
        res.json(result)
    } catch (error) {
        return res.status(500).send({ message: 'Error while inserting item', error });
    }
})





// CheckOut schema POST APIs

app.post('/checkOut', async (req, res) => {
    try {
        console.log(req.body)
        //let newUser =User.create(req.body)
        const postDoc = new CheckOut({
            author: req.body.author,
            title: req.body.title,
            genre: req.body.genre
           
        })
        const result = await postDoc.save()
        //Alternative;
        //const result =await Post.create({author:req.body.author})
        res.json(result)
    } catch (error) {
        return res.status(500).send({ message: 'Error while inserting item', error });
    }
})




// CheckOut schema PATCH APIs

app.patch('/checkOut/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        const resultUpdate = await CheckOut.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        )
        if (!resultUpdate) {
            return res.status(404).send({ message: 'Item not found' });
        }
        res.send({ message: 'Item updated successfully', Post: resultUpdate });
    } catch (error) {
        return res.status(500).send({ message: 'Error while updating item', error });
    }
})


app.listen(PORT, () => {
    console.log(`Express web server listening on port http://localhost:${PORT}`);
});
