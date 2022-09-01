import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { UpdateLikeUnlikesAsync } from "../../features/videos/videosSlice";

export default function LikeUnlike({ likes, unlikes, id }) {
    const dispatch = useDispatch();
    const LikesUnlikeshandler = (status) => {
        let data;
        if (status === "likes") {
            data = likes + 1;
        } else {
            data = unlikes + 1;
        }
        dispatch(UpdateLikeUnlikesAsync({ status, id, data }));
    };
    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img className="w-5 block" src={likeImage} alt="Like" />
                </div>
                <div
                    className="text-sm leading-[1.7142857] text-slate-600"
                    onClick={() => LikesUnlikeshandler("likes")}
                >
                    {likes}
                </div>
            </div>
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img className="w-5 block" src={unlikeImage} alt="Unlike" />
                </div>
                <div
                    className="text-sm leading-[1.7142857] text-slate-600"
                    onClick={() => LikesUnlikeshandler("unlikes")}
                >
                    {unlikes}
                </div>
            </div>
        </div>
    );
}
