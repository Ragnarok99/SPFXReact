
import { fecth } from 'isomorphic-fetch';

export default class api {

    private baseUrl:string = "https://jsonplaceholder.typicode.com";

    public async getImages(page:number = 1) {
        const response = await fetch(`${this.baseUrl}/photos?_page=${page}`);
        const data = await response.json();

        return data;
    }


}