import NavigationSidebar from "./NavigationSidebar/index.js";
import WhoToFollowList from "./WhoToFollowList/WhoToFollowList.js";
import ExploreComponent from "./ExploreComponent.js";


function exploreComponent() {
   $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 text-white">
   ${ExploreComponent()}
   </div>
   <div class="d-none d-lg-block col-lg-4 col-xl-4 text-white">
   ${WhoToFollowList()}
   </div>
   `);
}
$(exploreComponent);