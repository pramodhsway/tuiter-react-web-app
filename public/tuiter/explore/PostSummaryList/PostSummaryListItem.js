
const PostSummaryListItem = (post) => {
    return(`
            <div class="row">
            <div class="col-10 wd-trend-style">
                <p3 class="wd-gray-text">${post.topic}</p3>
                <p3 class="wd-news-text">${post.userName}
                    <i class="fas fa-check-circle"></i>
                    <p3 class="wd-gray-text">- ${post.time}</p3>
                </p3>
                <p3 class="wd-news-text">${post.title}
                </p3>
            </div>
            <div class="col-2 ps-0">
                <img src=${post.image}
                    height="100%" width="100%">
            </div>
        </div>
        <hr>
    `);
   }
   export default PostSummaryListItem;