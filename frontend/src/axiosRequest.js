import axios from 'axios';

export const axiosSetup = () => {
    axios.defaults.withCredentials = true;
    axios.interceptors.response.use((response) => {
        return response;
    }, function (error) {
        if (error.response.status === 401) {
            window.location.href = '/login';
            return Promise.reject(error);
        } else {
            return error.response.data.error
        }
    });
}

export const axiosGetRequest = async (path) => {
    return (await axios.get(`http://localhost:8082/${path}`)).data;
};

export const axiosPostRequest = async (path, data) => {
    return axios.post(`http://localhost:8082/${path}`, data);
}