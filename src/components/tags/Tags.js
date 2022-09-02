import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterReset } from "../../features/filter/filterSlice";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

export default function Tags() {
    const { tags } = useSelector((state) => state.tags);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    const resetHandler = () => {
        dispatch(filterReset());
    };

    return tags?.length > 0 ? (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {tags.map((tag) => (
                    <Tag key={tag.id} title={tag.title} />
                ))}
                <button
                    className="bg-red-400 text-white px-4 py-1 rounded-full cursor-pointer hover:bg-red-500"
                    onClick={resetHandler}
                >
                    Reset
                </button>
            </div>
        </section>
    ) : null;
}
