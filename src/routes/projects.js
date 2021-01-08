const router = require('./router')
const projectController = require('../controllers/project')

router.get('/projects', projectController.index)

router.post('/projects', projectController.store)

router.get('/projects/:id', projectController.show)

router.put('/projects/:id', projectController.update)

router.delete('/projects/:id', projectController.delete)

module.exports = router

