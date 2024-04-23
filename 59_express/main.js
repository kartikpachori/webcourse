const express = require('express')
const app = express()
const port = 3000


//app.get or app.put.app.post app.delete(path,handler)
// app.get('/', (req, res) => {
//     res.send('Hello World2!')
// })

// app.get('/about', (req, res) => {
//     res.send('About us')
// })

// app.get('/contact', (req, res) => {
//     res.send('Contact me!!')
// })


// app.get('/blog', (req, res) => {
//     res.send('Blogging..')
// })

app.get('/blog/:slug', (req, res) => {
    // console.log(req)

    console.log(req.params)
    console.log(req.query)
    res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})