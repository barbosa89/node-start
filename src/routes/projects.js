const router = require('./router')
const multer = require('multer')
const path = require('path')
const projectController = require('../controllers/project')

// const upload = multer({dest: __dirname + '/storage/app/public/'})

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('src/storage/app/public/'))
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

router.post('/projects/upload', upload.single('image'), projectController.upload)

router.get('/projects', projectController.index)

router.post('/projects', projectController.store)

router.get('/projects/:id', projectController.show)

router.put('/projects/:id', projectController.update)

router.delete('/projects/:id', projectController.delete)

module.exports = router

