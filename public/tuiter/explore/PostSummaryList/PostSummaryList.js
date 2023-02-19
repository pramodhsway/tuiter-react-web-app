import posts from "./posts.js";
import PostSummaryListItem from "./PostSummaryListItem.js";

const PostSummaryList = () => {
    return(`
                    <div class="row">
                    <div class="col-11">
                        <div class="input-group">
                            <span class="wd-search-icon"><i class="fas fa-search"></i></span>
                            <input type="text" class="form-control rounded-pill" placeholder="Search Twitter"
                                aria-label="from" aria-describedby="from">
                        </div>
                    </div>
                    <div class="col-1">
                        <a href="explore-settings.html"><i style="color: ##299fd6"
                                class="fa fa-cog fa-lg wd-settings-icon"></i></a>
                    </div>
                </div>
                <div class="row mt-2 ps-2 pe-3">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="links/for-you.html">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="links/trending.html">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="links/news.html">News</a>
                        </li>
                        <li class="nav-item d-none d-md-block">
                            <a class="nav-link" href="links/sports.html">Sports</a>
                        </li>
                        <li class="d-none d-xxl-block">
                            <a class="nav-link" href="links/entertainment.html">Entertainment</a>
                        </li>
                    </ul>
                </div>
                <div class="row mt-2">
                <figure class="position-relative">
                    <img , src="images/spacex.webp" , alt="Image description">
                    <figcaption class="position-absolute bottom-0 p-1" style="color: #fff;">
                        <h3>SpaceX's Starship</h3>
                    </figcaption>
                </figure>
                </div>
                ${
                    posts.map(p => {
                        return(PostSummaryListItem(p));
                    }).join('')
                }
    `);
}
export default PostSummaryList;