import axios from "../../utils/axios";

export const getVideos = async (tags, search, page) => {
    let queryString = "";

    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
        queryString += `&q=${search}`;
    }

    if (queryString !== "") {
        queryString += `&_page=${page}&_limit=3`;
    } else {
        queryString += `_page=${page}&_limit=3`;
    }

    const response = await axios.get(`/videos/?${queryString}`);

    return response.data;
};
