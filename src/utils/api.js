import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer " + process.env.API_APP_TOKEN,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            'http://localhost:8000/api'+ url,
            // process.env.API_URL + url,
            params
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
