<template>
  <div>
    <!-- This is the navigational bar -->
    <b-navbar toggleable="md" text-variant="dark" variant="white">
          <b-navbar-toggle target="nav-collapse d-xs-inline-block d-md-none">
            <!-- The log image when the device is getting larger -->
        <img :src="img_src" width="220px" /> 
      </b-navbar-toggle>  
      <!-- Button that will collapse when the device get smaller -->
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
            <!-- The log when the device get smaller -->
            <router-link to="/index">
            <img :src="img_src" />
            </router-link>
          </b-navbar-brand>       
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto mt-lg-3">
          <b-nav-form class="ml search">
            <!-- form for input filed and search-->
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
<style src='../assets/css/navbar.css' scoped >

</style>