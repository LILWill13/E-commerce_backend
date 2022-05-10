const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  try{
    Tag.findAll({
      include: [ { model: Product, through: ProductTag }]})
    .then((tags) => res.status(200).json(tags));
  } catch(err) {
    res.status(500).json(err);
  };
});

router.get('/:id', (req, res) => {
  try{
    Tag.findOne({ where: { id: req.params.id },
      include: [{ model: Product, through: ProductTag }]})
    .then((tag) => res.status(200).json(tag));
  } catch(err) {
    res.status(404).json(err);
  };
});

router.post('/', (req, res) => {
  try{
    Tag.create(req.body)
    .then((tag) => res.status(200).json(tag));
  } catch(err) {
    res.status(404).json(err);
  };
});

router.put('/:id', (req, res) => {
  try{
    Tag.update(req.body, { where: { id: req.params.id }})
    .then((tag) => res.status(200).json(tag));
  } catch(err) {
    res.status(404).json(err);
  };
});

router.delete('/:id', (req, res) => {
  try{
    Tag.destroy({ where: { id: req.params.id }})
    .then((tag) => res.status(200).json(tag));
  } catch(err) {
    res.status(404).json(err);
  };
});


module.exports = router;
