<template>
  <div class="mt-5" >
    <div v-for="link in links" :key="link.id">
    <div style="padding-top:3rem " class="footer">
      <div class="first-row">
        <div class="d-flex justify-content-lg-center justify-content-md-center">
          <strong>
            <ul class="nav navbar-nav d-inline-flex">
              <li class="nav-item" >
                <ul class="list-inline-mb-0">
                  <li class="list-inline-item p-2" v-for="list in link.items" :key="list.id">{{list.item}}</li>
                </ul>
              </li>
            </ul>
          </strong>
        </div>
        <div class="d-flex justify-content-lg-center justify-content-md-center">
          <div>
            <ul class="nav navbar-nav d-inline-flex">
              <li class="nav-item">
                <ul class="list-inline-mb-0 list_item">
                  <li class="list-inline-item p-2" style="font-weight:bold">{{link.text}}</li>
                  <li class="list-inline-item p-2" v-for="list in link.items_two" :key="list.id">{{list.item}}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <!-- *************************** -->
        <div class="d-flex justify-content-center" style="width:100%; height:100%">
          <div>
            <ul class="nav navbar-nav d-inline-flex">
              <li class="nav-item">
                <ul class="list-inline-mb-0 list_items">
                  <li class="list-inline-item p-2" style="font-weight:bold">{{link.texts}}</li>
                  <li class="list-inline-item p-2" v-for="list in link.items_three" :key="list.id">{{list.item}}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="foo-foo">
        <div class="d-flex justify-content-center">
          <strong>
            <ul class="nav navbar-nav d-inline-flex">
              <li class="nav-item">
                <ul class="list-inline-mb-0">
                  <li class="list-inline-item p-2" v-for="list in link.items_four" :key="list.id">{{list.item}}</li>
                </ul>
              </li>
            </ul>
          </strong>
        </div>
        <div class="d-flex justify-content-center btn">
          <button type="button" class="btn btn-outline-light" @click="backtoTop">UP</button>
        </div>
      </div>
    </div>
    <!-- ******************************************************************** -->
    <div class="row justify-content-sm-center foot2 ">
      <div class="toper" style>
        <div class="d-flex justify-content-center pl-4 mr-0">
          <strong>
            <ul class="nav navbar-nav d-inline-flex">
              <li class="nav-item">
                <ul class="list-inline-mb-0">
                  <li class="list-inline-item p-2" v-for="list in link.items_five" :key="list.id">{{list.item}}</li>
                </ul>
              </li>
            </ul>
          </strong>
        </div>
        <hr />
        <div class="d-flex justify-content-center" style="padding-top:-5px">
          <p
            class="mt-n3"
            type="text"
            style="background-color:#eeeef0"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            More
           <i class="fa fa-angle-down" aria-hidden="true"></i>
          </p>
        </div>
      </div>

      <div class="drop mt-n5" style="background-color:#383838;">
        <div class="wrap collapse" id="collapseExample" style="margin-top:-59px">
          <div class="row" style="background-color:#383838; color:white">
            <div class="col-6">
              <div>
                <ul class="nav navbar-nav">
                  <li class="nav-item">
                    <ul class="list-inline-mb-0">
                      <li class="list-inline-item p-2" style="font-weight:bold">{{link.text}}:</li>
                      <li class="list-inline-item p-2 pt-4" v-for="list in link.items_two" :key="list.id">{{list.item}}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6">
              <div>
                <ul class="nav navbar-nav">
                  <li class="nav-item">
                    <ul class="list-inline-mb-0">
                      <li class="list-inline-item p-2" style="font-weight:bold">{{link.texts}}:</li>
                      <li class="list-inline-item p-2" v-for="list in link.items_three" :key="list.id">{{list.item}}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class=" line" />
          <div class="row col-6" style="background-color:#383838; color:white">
            <div class="d-flex justify-content-center">
              <strong>
                <ul class="nav navbar-nav">
                  <li class="nav-item">
                    <ul class="list-inline-mb-0">
                      <li class="list-inline-item p-2" v-for="list in link.items_four" :key="list.id">{{list.item}}</li>
                    </ul>
                  </li>
                </ul>
              </strong>
            </div>
          </div>
        </div>

        <div class="p-0" style="background-color:#383838; margin-top:-10px; height:150px
        ">
          <hr class=" line" />
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-outline-light" @click="backtoTop">UP</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
/* eslint-disable no-console */
export default {
  data() {
    return {
      links:[
        {
           items:[
             {
               id:1,
               item:'imprint'

             },
             {
               id:2,
               item:'Conditions'

             },
             {
               id:3,
               item:'privacy'

             },
             {
               id:4,
               item:'Cookies & Tracking'

             },
           ],
           text : 'Deals:',
           items_two:[
             {
               id:1,
               item:'SUBSCRIPTION'

             },
             {
               id:2,
               item:'Vouchers'

             },
             {
               id:3,
               item:'Shop'

             },
             {
               id:4,
               item:'Christ & World'

             },
             {
               id:5,
               item:'Time travel'

             },
             {
               id:6,
               item:'Time for the school'

             },
             {
               id:7,
               item:'TIME events'

             },
           ],
           texts : 'Publishing company:',
           items_three:[
             {
               id:1,
               item:'Advertise'

             },
             {
               id:2,
               item:'Media data'

             },
             {
               id:3,
               item:'Press'

             },
             {
               id:4,
               item:'Companies'

             },
             {
               id:5,
               item:'Rights & Licenses'

             },
             {
               id:6,
               item:'Career'

             },
             
           ],
            items_four:[
             {
               id:1,
               item:'image rights'

             },
             {
               id:2,
               item:'Help/Contact'

             },
             {
               id:3,
               item:'Newsletter'

             },
             {
               id:4,
               item:'RSS'

             },
            ],
            items_five:[
             {
               id:1,
               item:'imprint'

             },
             {
               id:2,
               item:'Conditions'

             },
             {
               id:3,
               item:'privacy'

             },
             {
               id:4,
               item:'Cookies & Tracking'

             },
            ],
        }       
      ]
    };
  },
  methods: {
    backtoTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>
<style  scoped>
.first-row {
  background-color: #eeeef0;
  height: 170px;
}
.foo-foo {
  background-color: #1f1d1d;
  color: gainsboro;
  height: 250px;
  padding-top: 20px;
}
.btn {
  margin-top: 20px;
  background-color: #1f1d1d;
}
.btn:hover {
  color: white;
}
@media (max-width: 767px) {
  .footer {
    display: none;
  }

}
@media (max-width: 768px){
  .list_item{
    font-size: 0.7rem;
    margin-top:1rem;
    margin-bottom: 1.3rem;
  }
  .list_items{
    font-size: 0.7rem;
  }
}
@media (max-width: 767px) {
  .foot2 {
    display: block;
  }
}
@media (min-width: 767px) {
  .foot2 {
    display: none;
  }
}
.toper {
  background-color: #eeeef0;
  height: 196px;
  width: 100%;
  margin: 0px;
  padding: 0px;
  left: 0px;
  right: 0px;
}
.line {
  border-top: 1px solid white;
}
</style>