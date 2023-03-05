import posts from "./posts.js";
import PostSummaryListItem from "./PostSummaryListItem.js";

const PostSummaryList = () => {
    return(`
                ${
                    posts.map(p => {
                        return(PostSummaryListItem(p));
                    }).join('')
                }
    `);
}
export default PostSummaryList;