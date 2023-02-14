const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            data : response,
            success : true,
            err : {},
            message : 'successfuly created a airport'
        })
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            message : 'not able to create a airport',
            data : {},
            err : error,
            success : false
        })
    }
}

const get = async (req, res) => {
    try {
        const response = await airportService.get(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            err : {},
            message : 'successfuly fetched a airport'
        })
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            message : 'not able to fetch a airport',
            data : {},
            err : error,
            success : false
        })
    }
}

module.exports = {
    create,
    get
}