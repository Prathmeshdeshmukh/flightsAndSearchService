const { CityRepository } = require('../repository/index');

class CityService{
    constructor(){
        this.CityRepository = new CityRepository();
    }

    async createCity(data){
         try {
            const city = await this.CityRepository.createCity(data);
            return city;
         } catch (error) {
            throw{error}
         }
    }
    async deleteCity(cityId){
        try {
            this.CityRepository.deleteCity(cityId);
        } catch (error) {
            throw{error}
           
        }
    }

    async getCity(cityId){
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            throw{error}
         
        }
    }

    async updateCity(cityId, data){
        try {
            const city = await this.CityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            throw{error}
        
        }
    }

}

module.exports = CityService;