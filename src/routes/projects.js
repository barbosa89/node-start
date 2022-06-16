const path = require('path')
const multer = require('multer')
const router = require('../core/router')
const { checkSchema } = require('express-validator')
const storeProject = require('../app/http/requests/store-project')
const projectController = require('../app/http/controllers/project')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('src/storage/app/public/'))
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), projectController.upload)

router.get('/', projectController.index)

router.post('/', checkSchema(storeProject), projectController.store)

router.get('/:id', projectController.show)

router.put('/:id', projectController.update)

router.delete('/:id', projectController.delete)

module.exports = router
