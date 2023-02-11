const { FlightRepository , AirplaneRepository } = require('../repository/index');

class FlightService{
    constructor(){
        this.airPlaneRepository = new AirplaneRepository();   
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            // const airPlaneRepository = new AirplaneRepository();
             const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
             const flight = await this.flightRepository.createFlight({
                ...data , totalSeats : airplane.capacity
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