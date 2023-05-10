import app from './app.js'

const PORT = 8000
const ready = () => console.log('server ready on port: '+ PORT)
app.listen(PORT, ready)