// const CityRepository = require("./city-repository")

const AirportRepository = require('./airport-repository');
const FlightRepository = require('./flight-repository');

module.exports = {
    CityRepository : require('./city-repository'),
    FlightRepository : require('./flight-repository'),
    AirplaneRepository : require('./airplane-repository'),
    AirportRepository : require('./airport-repository'),
    CrudRepository : require('./crud-repository')
}