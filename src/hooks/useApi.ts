import axios from 'axios';

const api = axios.create ({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token:string) => {
        return {
            user: {id: 3, name: 'jose', email:"jose@hotmail.com"},
            token: '12871723871823'
        };

        const response = await api.post ('/validate', {token});
        return response.data;
    },
// return é false pq nao fizemos autenticacao real no .env... entao criamos um requisitor falso
// o return é embaixo do const.

    signin: async (email:string, password: string) => {
         return {
            user: {id: 3, name: 'jose', email:"jose@hotmail.com"},
            token: '12871723871823'
        };
        
        const response = await api.post('/signin', {email, password});
       
        return response.data;
    },
    logout: async () => {
        return {status: true};
        const response = await api.post('/logout');
        return response.data;

    }
});