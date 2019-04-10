let express = require('express')
let path = require('path')
let router = express.Router()
let classList = ['suc', 'loc', 'mel'] // our class list array

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})
router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})
router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})
router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

router.get('/api/list', function (req, res) {
  res.json(classList) // Respond with JSON
})
router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id]) // Notice the wildcard in the URL?
// Try browsing to /api/get/0 once you've added some entries
})
router.post('/api/create', function (req, res) {
  console.log('Creating the following student:', req.body)
  classList.push(req.body.student)
  console.log('creating a student entry')
})
router.post('/api/delete', function (req, res) {
  console.log('deleting the following student:', req.body.toDel)
  classList.splice(req.body.toDel, 1)
  res.redirect(req.baseUrl + '/api/list')
  console.log('deleting a student entry')
})
router.post('/api/edit', function (req, res) {
  console.log('editing the following student:', req.body.ids)
  classList[req.body.ids] = req.body.name
  res.redirect(req.baseUrl + '/api/list')
  console.log('editing a student entry')
})

module.exports = router
