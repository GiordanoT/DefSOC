import Axios from 'axios';

export type Response = {code: number, data: unknown}
class Api {
    private static headers(): {'auth-token': string} {
        return {'auth-token': process.env['REACT_APP_TOKEN'] || ''};
    }
    static async get(path: string): Promise<Response> {
        try {
            const response = await Axios.get(path, {headers: this.headers()});
            return {code: response.status, data: response.data};
        } catch (e) {
            return {code: 400, data: null};
        }
    }
}

export default Api;
