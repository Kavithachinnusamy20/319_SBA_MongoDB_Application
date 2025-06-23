import express from 'express'
import mongoose from 'mongoose'
import Post from './models/post.js'

import 'dotenv/config'

const app = express()

const PORT = process.env.PORT

app.use(express.json())

await mongoose.connect(process.env.MONGO_URL)

console.log('MONGO connected')
app.get('/', (req, res) => {
    res.send("Hello World")

})
app.get('/posts', async (req, res) => {
    const posts = await Post.find({})
    console.log(posts)
    res.json(posts)
})

app.post('/posts', async (req, res) => {
    try {
        console.log(req.body)
        const postDoc = new Post({
            author: req.body.author,
            title: req.body.title,
            body: req.body.body,
            email: req.body.email
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
        const result = await Post.findByIdAndDelete(req.params.id)

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
        const resultUpdate = await Post.findByIdAndUpdate(
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
