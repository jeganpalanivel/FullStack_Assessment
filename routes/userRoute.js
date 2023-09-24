const multer = require('multer');
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const path = require("path");
const app = express();
// storage engine 

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  storage: storage,
  
})

router.post("/upload", upload.single('profile'), (req, res) => {
  if(!req.file){
    res.status(400).json('Please upload file');
  }

  res.json({
      success: 1,
      message: "Image uploaded successfully"
  })
})



// Define your routes
router.post('/adduser', userController.createuserBridal);
router.get('/getUser', userController.getUser);
router.put('/updateUser/:id', userController.updateUserDetails);
router.delete('/deleteUser/:id', userController.deleteUser);
router.get('/getUserById/:id', userController.userById);


module.exports = router;
