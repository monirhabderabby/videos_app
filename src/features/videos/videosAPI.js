import axios from "../../utils/axios";

export const getVideos = async (tags, search, page, author) => {
    let queryString = "";

    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
        queryString += `&q=${search}`;
    }

    // // pagination
    if (queryString !== "") {
        queryString += `&_page=${page}&_limit=3`;
    } else {
        queryString += `_page=${page}&_limit=3`;
    }

    // filtering by author
    if (author !== "") {
        queryString = `author=${author}`;
    }

    const response = await axios.get(`/videos/?${queryString}`);

    return response.data;
};

export const UpdateLikeUnlikestoServer = async (status, id, data) => {
    if (status === "likes") {
        const res = await fetch(`http://localhost:9000/videos/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                likes: data,
            }),
            headers: {
                "content-type": "application/json",
            },
        });

        const videos = await res.json();
        return videos;
    } else {
        const res = await fetch(`http://localhost:9000/videos/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                unlikes: data,
            }),
            headers: {
                "content-type": "application/json",
            },
        });

        const videos = await res.json();
        return videos;
    }
};
