const express = require('express')
const user = require('./router/user');

const app = express()

app.use('/api/users', user)

app.listen(3030, () => {
  console.log('Server is listen 3030')
})
