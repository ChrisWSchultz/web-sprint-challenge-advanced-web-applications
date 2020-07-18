import axios from "axios";
import { axiosWithAuth } from "./axiosAuth";

const BASE_URL = "http://localhost:5000/api/";
const LOGIN = "login/";
const COLORS = "colors/";

export const bubbleLogin = (credentials) => {
    return axios.post(`${BASE_URL}${LOGIN}`, credentials)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};

export const addColor = (colorInfo) => {
    return axiosWithAuth().post(`${BASE_URL}${COLORS}`, colorInfo)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};

export const getColors = () => {
    return axiosWithAuth().get(`${BASE_URL}${COLORS}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};

export const updateColor = (colorID, colorInfo) => {
    return axiosWithAuth().put(`${BASE_URL}${COLORS}${colorID}`, colorInfo)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};

export const removeColor = (colorID) => {
    return axiosWithAuth().delete(`${BASE_URL}${COLORS}${colorID}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
};
