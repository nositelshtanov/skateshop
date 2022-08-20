import axios from "axios";


export default class BrandsService {
    static async getAll() {
        const res = axios.get(`https://62fe58e341165d66bfbe2ded.mockapi.io/brands`);
        return res;
    }

    static async getById(id) {
        const res = axios.get(`https://62fe58e341165d66bfbe2ded.mockapi.io/brands/${id}`);
        return res;
    }
}