const router = require('express').Router();
const { Product } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const products = await Product.findAll();

        res.status(200).json(products);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id);

        if (!productData) {
            res.status(404).json({ message: 'No Product found with this id!' });
            return;
        }

        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
