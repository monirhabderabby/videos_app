import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import {
    updatedLike,
    updatedUnLike,
    updateLike,
    updateUnlike,
} from "../../features/video/videoSlice";

export default function LikeUnlike({ id, likes, unlikes }) {
    const dispatch = useDispatch();

    const Likesshandler = () => {
        dispatch(updateLike());
        dispatch(updatedLike({ id, likes }));
    };
    const unlikesHandler = () => {
        dispatch(updateUnlike());
        dispatch(updatedUnLike({ id, unlikes }));
    };

    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img className="w-5 block" src={likeImage} alt="Like" />
                </div>
                <div
                    className="text-sm leading-[1.7142857] text-slate-600"
                    onClick={() => Likesshandler("likes")}
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
                    onClick={unlikesHandler}
                >
                    {unlikes}
                </div>
            </div>
        </div>
    );
}
