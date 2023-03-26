const NavigationSidebar = () => {
  return(`
      <ul class="list-group" style="background-color: rgba(231, 233, 234, 0.1); color: white">
          <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
              <i class="fab fa-twitter fa-lg"></i>
          </li>
          <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
              <div class="grid">
                  <div class="row">
                  <div class="col col-md-1" style="float: left">
                          <i class="fa-solid fa-home"></i>
                      </div>
                      <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                          <a href="../HomeScreen/index.html">
                          Home
                          </a>
                      </div>
                  </div>
              </div>
          </li>
          <li class="list-group-item active">
              <div class="grid">
                  <div class="row">
                      <div class="col col-md-1" style="float: left">
                          <i class="fa-solid fa-hashtag"></i>
                      </div>
                      <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                          Explore
                      </div>
                  </div>
              </div>
          </li>
          <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
              <div class="grid">
                  <div class="row">
                      <div class="col col-md-1" style="float: left">
                          <i class="fa-solid fa-bell"></i>
                      </div>
                      <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                          Notification
                      </div>
                  </div>
              </div>
          </li>
          <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
              <div class="grid">
                  <div class="row">
                      <div class="col col-md-1" style="float: left">
                          <i class="fa-solid fa-envelope"></i>
                      </div>
                      <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                          Messages
                      </div>
                  </div>
              </div>
          </li>
          <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
              <div class="grid">
                  <div class="row">
                      <div class="col col-md-1" style="float: left">
                          <i class="fa-solid fa-bookmark"></i>
                      </div>
                      <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                          Bookmarks
                      </div>
                  </div>
              </div>
          </li>
          <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
              <div class="grid">
                  <div class="row">
                      <div class="col col-md-1" style="float: left">
                          <i class="fa-solid fa-list"></i>
                      </div>
                      <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                          Lists
                      </div>
                  </div>
              </div>
          </li>
          <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
              <div class="grid">
                  <div class="row">
                      <div class="col col-md-1" style="float: left">
                          <i class="fa-solid fa-user"></i>
                      </div>
                      <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                          Profile
                      </div>
                  </div>
              </div>
          </li>
          <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
              <div class="grid">
                  <div class="row">
                      <div class="col col-md-1" style="float: left">
                          <i class="fa fa-ellipsis"></i>
                      </div>
                      <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                          More
                      </div>
                  </div>
              </div>
          </li>
      </ul>
      <div class="d-grid mt-2">
      <a href="../tuit.html"
         class="btn btn-primary btn-block rounded-pill">
         Tweet</a>
    </div>
   `);
 }
 export default NavigationSidebar;