import axios from 'axios';

export function cloud(config) {
    const instance = axios.create({
        baseURL: '/cloud',
        timeout: 1000 * 5,
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Cache-Control": "max-age=0",
        },
    })
    instance.interceptors.request.use(config => {
        return config;
    }, err => {
        console.log(err);
    })
    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        console.log(err);
        throw err;
    })

    return instance(config);
}




export function transfer(config) {
    const instance = axios.create({
        baseURL: '/api',
        timeout: 1000 * 5,
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Cache-Control": "max-age=0",
        },
    })
    instance.interceptors.request.use(config => {
        return config;
    }, err => {
        console.log(err);
    })
    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        console.log(err);
        throw err;
    })
    return instance(config);
}


