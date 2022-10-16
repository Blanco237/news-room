import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:5500'
});

export const getMain = async () => {
    try{
        const res = await Axios.get('/main');
        return res.data;
    }
    catch(e) {
        console.error(`Error:: ${e.message}`);
    }
}

export const getSpotlight = async () => {
    try{
        const res = await Axios.get('/spotlight');
        return res.data;
    }
    catch(e) {
        console.error(`Error:: ${e.message}`);
    }
}