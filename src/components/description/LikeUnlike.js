import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import {
    updateLike,
    updateLikeandUnlike,
    updateUnlike,
} from "../../features/video/videoSlice";

export default function LikeUnlike({ id, likes, unlikes }) {
    const dispatch = useDispatch();
    const LikesUnlikeshandler = (status) => {
        if (status === "likes") {
            dispatch(updateLike());
            dispatch(updateLikeandUnlike(id, likes + 1));
        } else {
            dispatch(updateUnlike());
        }
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
