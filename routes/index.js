const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');
// Do work here
// router.get('/', (req, res) => {
//   res.json(req.query);
// });
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));
// router.get('/reverse/:name', (req, res) => {
//   res.send(req.params.name);
// });
module.exports = router;
