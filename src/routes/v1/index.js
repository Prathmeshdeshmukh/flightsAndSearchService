const express= require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-cntroller');
const AirportController = require('../../controllers/airport-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id' , CityController.get);
router.get('/city' , CityController.getAll);
router.patch('/city/:id' , CityController.update);


router.post('/flights', FlightController.create);
router.get('/flights' , FlightController.getAll);

router.post('/aiports' , AirportController.create);
router.get('/aiports/:id' , AirportController.get);


module.exports = router;
