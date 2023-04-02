import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
    <div class="row ps-2 pt-2 pb-2 wd-follow-background">
    <p3 class="wd-follow-text">Who to Follow</p3>
    </div>

    ${
        who.map(w => {
            return(WhoToFollowListItem(w));
        }).join('')
    }

    `);
}
export default WhoToFollowList;