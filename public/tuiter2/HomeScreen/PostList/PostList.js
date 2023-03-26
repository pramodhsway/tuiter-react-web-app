import items from "./items.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
                ${
        items.map(p => {
            return(PostItem(p));
        }).join('')
    }
    `);
}
export default PostList;