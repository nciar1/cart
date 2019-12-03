let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// product Model
let productSchema = require('../Models/product');

// CREATE product
router.route('/create-product').post((req, res, next) => {
  productSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ product
router.route('/').get((req, res) => {
  productSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single product
router.route('/edit-product/:id').get((req, res) => {
  productSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update product
router.route('/update-product/:id').put((req, res, next) => {
  productSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('product updated successfully !')
    }
  })
})

// Delete product
router.route('/delete-product/:id').delete((req, res, next) => {
  productSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;