import express from 'express'

const app = express()
const PORT = 3001

app.get('/', (req, res) => {
  res.json({ message: 'Da 10 aí estressadinho' })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})