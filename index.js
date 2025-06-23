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
    console.log(req.body)
    const postDoc = new Post({
        author: req.body.author
    })
    const result = await postDoc.save()
    //Alternative;
    //const result =await Post.create({author:req.body.author})
    res.json(result)
})


app.listen(PORT, () => {
    console.log(`Express web server listening on port http://localhost:${PORT}`);
});
