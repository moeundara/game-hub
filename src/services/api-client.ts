import axios,{AxiosError, CanceledError} from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bdbd5d81f27b470e82d74ee56249d8f5'
    }
});

export {AxiosError, CanceledError}