const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req , res)=>{
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data : flight,
            success : true,
            err : {},
            message : 'successfully created a flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success : false,
            message: "not able to create a flight",
            err : error
        })
    }

    
}

const getAll = async (req, res) =>{
        try {
            const flights = await flightService.getAllFlightData(req.query);
            return res.status(200).json({
                data : flights,
                message : 'successfully able to fetch flights',
                err : {},
                success: true
            })
        } catch (error) {
            console.lof('error');
            return res.status(500).json({
                data : {},
                message : 'not able to fetch flights',
                err : error,
                success: false
            })
        }
}

module.exports = 
{
    create,
    getAll
 }