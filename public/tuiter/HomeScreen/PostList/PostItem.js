

const PostItem = (post) => {
    return(`
        <li class="list-group-item" style="background: black; color: white; border-bottom-color: grey; border-width: 0.5px;">
                    <div class="grid">
                    <div class="col-12 col-md-12">
                    <div class="row">
                            <div class = "col-2 col-sm-2 col-md-1 me-2">
                                        <img src=${post.avatar} class="sidebar-images">
                            </div>
                            <div class="col-10 col-sm-10 col-md-10 wd-trend-style">
                                <div>
                                <p3 class="wd-news-text">${post.userName}
                                    <i class="fas fa-check-circle"></i>
                                    <p3 class="wd-gray-text">&nbsp;@${post.handleName} &middot; ${post.time}</p3>
                                </p3>
                                </div>
                           
                                <div class="row text-news">
                                    <p style="color: white; font-weight: 12px">${post.tweet}<br><br>
                                    </p>
                                </div>

                                <div class="row ms-0 mt-1">
                                    <div class="col-12 col-md-12" style="border-style: solid; border-radius:20px;border-width: 0.001em; border-color: grey">
                                    <div class="row"> 
                                    <img src=${post.image} class = "text-item-image">
                                    </div>
                                    <hr>
                                    <div class="wd-tweet-text">${post.title}</div>
                                    <div class="wd-gray-news-text">${post.newsText} </br></br>
                                    </div>
                                </div>
                        <div class="row" style="margin-top: 8px;">
                                    <span style="color: lightgray">
                                    <a href="#" class="icon-size"><i class="fa-regular fa-comment"></i>&nbsp;&nbsp;${post.comments}&nbsp;&nbsp;</a>
                                    <a href="#" class="icon-size"><i class="fa-solid fa-retweet"></i>&nbsp;&nbsp;${post.retweets}&nbsp;&nbsp;</a>
                                    <a href="#" class="icon-size"><i class="fa-regular fa-heart"></i>&nbsp;&nbsp;${post.likes}&nbsp;&nbsp;</a>
                                    <a href="#" class="icon-size"><i class="fa-solid fa-download"></i></a>
                                    </span>
                                    </div>         
                                </div>
                            </div>
                        </div>
                    </div>
</div>
                </li>
                </br>
    `);
}
export default PostItem;