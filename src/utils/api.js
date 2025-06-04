import axios from "axios";
const BASE_URL = " https://www.googleapis.com/customsearch/v1"
const params ={
    key:'AIzaSyBIpdbDpWcVnkxu_rAVdk_oY-6RR9dj7L0',
    cx:'26a44310473334fcd'
}

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL,{
        params:{...params,...payload}
    })
    return data;
};
