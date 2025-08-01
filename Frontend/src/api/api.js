import axios from 'axios';
import config from '../config/config';

class ApiServices{
    apiClient;

    constructor(){
        this.apiClient = axios.create({
            baseURL: config.apiurl,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            timeout: 10000
        })
    }

    async getDashboardData(){
        try {
            const { data } = await this.apiClient.get('/api/dashboard');

            return data || null;

        } catch (error) {
            throw error;
        }
    }

    async getLeaderboardData(){
       try {
            const { data } = await this.apiClient.get('/api/leaderboard');
            
            return data || null;

       } catch (error) {
            throw error;
       }
    }
};

const apiServices = new ApiServices();

export default apiServices;