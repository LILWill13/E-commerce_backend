const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
  try{
    Category.findAll({ include: [Product] })
    .then((categories) => res.json(categories))
  } catch(err) {
    res.status(500).json(err);
  };
});

router.get('/:id', (req, res) => {
  try{
    Category.findOne({ where: { id: req.params.id },
      include: [Product] })
    .then((category) => res.json(category))
  } catch(err) {
    res.status(400).json(err)
  }
});

router.post('/', (req, res) => {
  try{
    Category.create(req.body)
    .then((category) => res.json(category))
  } catch(err) {
    res.status(400).json(err)
  };
});

router.put('/:id', (req, res) => {
  try{
    Category.update(req.body, { where: { id: req.params.id }})
    .then((category) => res.json(category))
  } catch(err) {
    res.status(400).json(err)
  };
});

router.delete('/:id', (req, res) => {
  try{
    Category.destroy({ where: { id: req.params.id }})
    .then((category) => res.json(category))
  } catch(err) {
    res.status(400).json(err)
  };
});

module.exports = router;
