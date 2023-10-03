const Product = require('../models/Product');
const Option = require('../models/Option');
const fs = require('fs');

exports.createProduct = (req, res, next) => {
    const {name, description, price, category, options, stock} = req.body;
    const images = req.files.map(file => {
        return req.protocol+'://'+req.get('host')+'/images/products/'+file.filename
    });
    const product = new Product({
        name, description, price, category, images, stock
    });
    product.save()
    .then((product) => { 
        if (!options) {
            res.status(201).json({ message: "Product saved without options!" });
        } else {
            let parsedOptions;
            try {
                parsedOptions = JSON.parse(options);
            } catch (error) {
                console.error('Invalid JSON format for options:', error);
                return res.status(400).json({ error: 'Invalid JSON format for options' });
            }
            const promisesOptions = parsedOptions.map((option) => {
                const {name, values} = option;
                const optionModel = new Option({ product: product._id, name, values })
                return optionModel.save();
            })
            Promise.all(promisesOptions)
            .then((savedOptions) => {
                product.options = savedOptions.map((option) => option._id);
                product.save()
                .then(() => res.status(201).json({ message: "Product saved!" }))
                .catch((error) => res.status(400).json({ error }));
            })
            .catch(error => {
                console.error('Error saving options:', error);
                res.status(400).json({ error })
            });
        }
    })
    .catch(error => {
        console.error('Error saving options 2:', error);
        res.status(400).json({ error })
    });
};


exports.getOneProduct = (req, res, next) => {
    Product.findOne({ _id: req.params.id })
    .populate('options')
    .then((product) => {
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product)
    })
    .catch(error => res.status(404).json({ error }));
};

exports.getProducts = (req, res) => {
    const productIds = req.body.productIds;

    if (!Array.isArray(productIds)) {
        return res.status(400).json({ error: 'productIds must be an array' });
    }

    Product.find({ _id: { $in: productIds } })
        .populate('options')
        .then(products => {
            res.status(200).json(products);
        })
        .catch(error => res.status(500).json({ error }));
}

exports.modifyProduct = (req, res, next) => {
    const {name, description, price, category, stock} = req.body;
    const images = req.files ? (
        req.files.map(file => {
        return req.protocol+'://'+req.get('host')+'/images/products/'+file.filename
    })) : '';
    const productObject = req.files ? {
        name, description, price, category, images, stock
    } : { 
        name, description, price, category, stock 
    };
    Product.findOne({ _id: req.params.productId })
    .then(() => {
        Product.updateOne({ _id: req.params.productId }, { ...productObject, _id: req.params.productId })
        .then(() => res.status(200).json({ message: 'Product updated!' }))
        .catch(error => res.status(401).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
};


exports.modifyOption = (req, res) => {
    const optionId = req.params.optionId;
    const { name, values } = req.body;
  
    Option.findByIdAndUpdate(optionId, { name, values }, { new: true })
      .then(option => {
        if (!option) {
          return res.status(404).json({ error: 'Option not found' });
        }
        res.status(200).json({ message: 'Option updated !' });
      })
      .catch(error => res.status(400).json({ error }));
};


exports.deleteProduct = (req, res, next) => {
    const productId = req.params.productId

    // Find the product by ID
    Product.findOne({ _id: productId })
    .then(product => {
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Delete each image associated with the product
        const imagesUrl = product.images
        for(const imageUrl of imagesUrl) {
            const filename = imageUrl.split('/images/products/')[1];
            fs.unlink('images/products/'+ filename, () => {})
        }

        // Delete the product from the database
        Product.findByIdAndDelete(productId)
        .then(() => {
            // Delete all options associated with the product
            Option.deleteMany({ product: productId })
            .then(() => res.status(200).json({ message: 'Product and options deleted' }))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(401).json({error }));
};

// DELETE an option
exports.deleteOption = (req, res) => {
    const optionId = req.params.optionId;
  
    Option.findByIdAndDelete(optionId)
      .then(option => {
        if (!option) {
          return res.status(404).json({ error: 'Option not found' });
        }
        res.status(200).json({ message: 'Option deleted' });
    })
    .catch(error => res.status(400).json({ error }));
};


exports.getAllProducts = (req, res, next) => {
    Product.find()
    .populate('options')
    .then(products => res.status(200).json(products))
    .catch(error => res.status(400).json({ error }));
};