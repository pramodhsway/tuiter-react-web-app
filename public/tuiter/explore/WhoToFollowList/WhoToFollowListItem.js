const WhoToFollowListItem = (who) => {
    return(`
    <div class="row pt-2 pb-2 wd-follow-background">
        <div class="col-2 pe-1">
            <img src=${who.avatarIcon} height="100%" width="100%" style="border-radius: 50%; ">
        </div>
        <div class="col-6 wd-trend-style">
            <p3 class="wd-news-text">${who.userName} 
                <i class="fas fa-check-circle"></i>
            </p3>
            <p3 class="wd-user-text">@${who.handle}</p3>

        </div>
        <div class="col-4 mx-auto">
            <a class="btn btn-primary rounded-pill" href="#">Follow</a>
        </div>
    </div>
    `);
   }
   export default WhoToFollowListItem;
   
   