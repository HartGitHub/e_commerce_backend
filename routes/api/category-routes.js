const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try{
    const getCategories = await Category.findAll({
     include: [{model: Category}],

    })
  }
  // find all categories
  // be sure to include its associated Products
});

// // GET all readers
// router.get('/', async (req, res) => {
//   try {
//     const readerData = await Reader.findAll({
//       // TODO: Add a comment describing the functionality of this property
//       //Finds all readerData that includes a library card. 
//       include: [{ model: LibraryCard }],
//     });
//     res.status(200).json(readerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
