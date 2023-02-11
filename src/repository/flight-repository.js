// const flights = require('../models/flights');
const { Flights } = require('../models/index');

class FlightRepository {

    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
           console.log("error");
           throw{ error}; 
        }

    }
}

module.exports = FlightRepository;