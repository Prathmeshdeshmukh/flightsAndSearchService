const { FlightRepository , AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');


class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();   
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            // const airPlaneRepository = new AirplaneRepository();
            if(!compareTime(data.arrivalTime , data.departureTime)){
                throw {error : 'arrival time cannot be less than departure time'}
            }
             const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
             const flight = await this.flightRepository.createFlight({
                ...data , totalSeats:airplane.capacity
             })
             return flight;
        } catch (error) {
            throw { error};
        }
    }

    async getFlightData(){
        try {
            //todo
        } catch (error) {
            
        }
    }
}

module.exports = FlightService;