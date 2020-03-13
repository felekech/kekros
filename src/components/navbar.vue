<template>
  <div>
    <b-navbar toggleable="md" text-variant="dark" variant="white">
          <b-navbar-toggle target="nav-collapse d-xs-inline-block d-md-none">
        <img :src="img_src" width="220px" />
      </b-navbar-toggle>  
      <b-navbar-toggle
        class="btn btn-outline-light border-0"
        style="color:white; background-color:white"
        target="nav-collapse"
        v-on:click=" type == 'clicked' ? type = '' : type = 'clicked'"
      >
        <div class="nav-menu" :class="type">
          <div></div>
        </div>
      </b-navbar-toggle>
      <div></div>
    </b-navbar>
    <b-navbar toggleable="md" text-variant="dark" variant="white">
      <b-collapse id="nav-collapse" is-nav class="mt-lg-n3">
        <b-navbar-nav class="mr-auto p-0 d-none d-md-block">
          <b-navbar-brand class="navbar-brand-collapse-5 pr-5rem ml-lg-3 ml-md-3 mt-lg-3" href="#">
            <router-link to="/index">
            <img :src="img_src" />
            </router-link>
          </b-navbar-brand>       
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto mt-lg-3">
          <b-nav-form class="ml search">
            <form class="form-inline my-2 my-lg-0">
              <div class="input-group" >
                <input type="text" class="form-control" placeholder="Search this blog"  />
                <div class="input-group-append">
                  <router-link to="/search">
                  <button class="btn " type="button" style="border: 1px solid #cecece" >
                    <i class="fa fa-search"></i>
                  </button>
                  </router-link>                
                </div>
              </div>
            </form>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-navbar toggleable="md" text-variant="dark" variant="white" class="p-4 w-100">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="w-100">
          <ul class="list pt-0 list2 w-100 ml-lg-n5 mt-md-n3 ml-md-n5 sos">
              <li class="pl-lg-3 pl-md-2 ">
              <a href="#">{{link}}</a>
            </li>
            <hr class="hor-zontal" />
          </ul>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
  </div>
</template>
<style scoped >

@media (max-width: 768px) and (min-width: 720px) {
  .list2 {
    font-size: 0.765rem;
  }
 
}

@media (min-width: 1024px) {
  @font-face {
    font-family: "TabletGothic";
    src: url("../assets/fonts/gothic2.ttf");
  }

  .list a {
    font-family: TabletGothic;
  }
  .list2 {
    font-size: 0.965rem;
  }

}
@media (max-width: 576px) {
  .link-list li {
    display: inline-block;
  }
  .link-list li a {
    font-family: "TabletGothic", "Helvetica Neue", Helvetica, Arial, FreeSans,
      sans-serif;
    color: #252525;
  }
  .wrap {
    border-bottom: 1px solid #cccccf;
  }
}

@media (min-width: 576px) {
  .link-list {
    display: none;
  }
  .subtitle {
    display: none;
  }
  .wrap-wrap {
    display: none;
  }
}
@media (min-width: 576px) {
  .small-list {
    display: none;
  }
}

@media (max-width: 576px) {
  .small-list {
    display: block;
    margin-top: -4rem;
    margin-left: -3rem;
  }
}
@media (max-width: 576px) {
  .list {
    display: none;
  }
  a:after {
    content: "•";
    color: #99999c;
    display: inline-block;
    padding-left: 1ch;
  }
}
@media (max-width: 576px) {
  .search {
    display: none;
  }
}

.more li {
  display: inline;
}
.more {
  font-size: 0.675rem;
  font-family: "Tablet Gothic", "Helvetica Neue", Helvetica, Arial, FreeSans,
    sans-serif;
  color: #252525;
}
.list li {
  display: inline;
  font-family: "Tablet Gothic", "Helvetica Neue", Helvetica, Arial, FreeSans,
    sans-serif;
}
.list2 li {
  display: inline;

  font-family: "Tablet Gothic", "Helvetica Neue", Helvetica, Arial, FreeSans,
    sans-serif;
}
.list li a:hover {
  text-decoration-line: none;
}
.list li a {
  color: #252525;
}
.nav-menu:after,
.nav-menu:before,
.nav-menu div {
  background-color: #0b4150;
  border-radius: 3px;
  content: "";
  display: block;
  height: 3px;
  margin: 6px 0;
  width: 30px;
  transition: all 0.2s ease-in-out;
}
.nav-menu.clicked:before {
  transform: translateY(9px) rotate(135deg);
}
.nav-menu.clicked:after {
  transform: translateY(-9px) rotate(-135deg);
}
.nav-menu.clicked div {
  transform: scale(0);
}
.centered {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.edit_hover_class a {
  display: none;
}
.edit_hover_class:hover a {
  display: block;
}
a:hover {
  background-color: #8ed8a6;
  background-color: rgba(0, 0, 0, 0.05);
  opacity: 0.4;
}


a:hover {
  text-decoration: none;
}
.cp-region {
  border: 0 solid #cccccf;
}
.page__content {
  color: #252525;
}

em {
  font-style: italic;
}
.image-color {
  opacity: 1;
  background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.5);
}

.image {
  background-color: rgba(255, 255, 255, 1);
}
.text {
  transform: translateY(-50%);
  font-size: 1em;
  margin: 0;
  padding: 0 1.25rem;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
}
.text-text {
  color: #eeeef0;
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.125em;
  margin-bottom: 0.4em;
  text-transform: uppercase;
}
.row {
  background-color: #fff;
  box-shadow: 0px 0px 0px 0px white;
  margin: 60px auto;
  width: 100%;
}
.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.podcast-links {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}

a {
  text-decoration: none;
  background-color: transparent;
}
</style>

<script>
/* eslint-disable no-console */
export default {
  data: () => {
    return {
      type: "",
      img_src: require('../assets/zeit-online-logo.png'),
      link:'Politics'


    };
  },
   

};
</script>