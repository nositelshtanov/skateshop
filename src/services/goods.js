import axios from "axios";

export default class Goods {
    static async getAll() {
        const res = axios.get("https://62fe58e341165d66bfbe2ded.mockapi.io/goods");
        return res;
    }
    static async getByBrandId(brandName) {
        const res = axios.get(`https://62fe58e341165d66bfbe2ded.mockapi.io/goods`, {
            params: {
                brandName: brandName
            }
        });
        return res;
    }
    static async getById(id) {
        const res = axios.get(`https://62fe58e341165d66bfbe2ded.mockapi.io/goods/${id}`);
        return res;
    }
}