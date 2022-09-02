import axios from "../../utils/axios";

export const getVideo = async (id) => {
    const response = await axios.get(`/videos/${id}`);

    return response.data;
};

export const updateLikeForAsync = async (id, updatedLikes) => {
    const res = await fetch(`http://localhost:9000/videos/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            likes: updatedLikes,
        }),
    });
    const result = res.json();
};
