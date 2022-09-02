import axios from "../../utils/axios";

export const getVideo = async (id) => {
    const response = await axios.get(`/videos/${id}`);

    return response.data;
};

// export const updateLikeForAsync = async (id, likes) => {
//     const res = await fetch(`http://localhost:9000/videos/${id}`, {
//         method: "PATCH",
//         body: JSON.stringify({
//             likes: likes + 1,
//         }),
//         headers: {
//             "content-type": "application/json",
//         },
//     });
//     const result = res.json();
//     return result;
// };
