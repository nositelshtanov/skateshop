import axios from "axios";

export class Categories {
    static async getAll() {
        const res = axios.get("https://62fe58e341165d66bfbe2ded.mockapi.io/categories");
        return res;
    }
}
