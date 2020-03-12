<template>
  <div class="all-text">
    <div class="border-style">
      <div class=" big-img">
        <img
          src="https://img.zeit.de/politik/ausland/2020-03/syrien-wladimir-putin-russland-baschar-al-assad/cinema__1000x428"
          width="100%" height="100%"
        />
      </div>
      <div>
        <div class="card shadow p-md-3  mb-5 bg-white rounded mx-md-4 position-relative home-card">
          <div>
 <div class="ml-lg-5 mx-md-4 story" v-for=" story in story" :key="story.id">
            <font class="co-slug">{{story.top_story_slugline}}</font>
            <font>
              <h2 class="co-header">{{story.top_story_headline}}</h2>
            </font>
            <div class="row">
              <div class="col-xl-8 col-lg-9">
                <font
                  class="co-abstract"
                >{{story.top_story_abstract}}</font>
              </div>
            </div>
            <div class="mt-2">
              <font class="co-byline">{{story.top_story_byline}}</font>
            </div>
          </div>
          </div>
         
         <div>
            <div class="row mt-5 mx-lg-4 mx-md-1 pl-sm-0">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="card" style="width:auto" >
                <img
                  src="https://img.zeit.de/politik/2020-03/recep-tayyip-erdogan-tuerkei-syrien-eu-fluechtlinge-wladimir-putin-bild-1/cinema__405x174__desktop"
                  alt width="auto"
                />
              </div>
              <div class="mt-4">
                <div class="col-lg-11 col-md-12 ">
                  <font class="de-slug">Recep Tayyip Erdoğan</font>
                  <font>
                    <h3 class="de-header">The Russian President can congratulate himself</h3>
                  </font>
                  <font
                    class="de-abstract"
                  >Turkish President Recep Tayyip Erdoğan provokes the EU with the opening of the border and bombs in Syria. Another one benefits from the escalation: Vladimir Putin.</font>
                  <font>
                    <p class="de-byline mt-3">By Özlem Topçu and Michael Thumann</p>
                  </font>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="card"  style="width:auto"  >
                <img
                  src="https://img.zeit.de/politik/ausland/2020-03/fluechtlinge-griechenland-lesbos-ausweisung-eu-migration/cinema__405x174__desktop"
                  alt width="auto"
                />
              </div>
              <div class="mt-4">
                <div class="col-lg-10">
                  <font class="de-slug">Refugees</font>
                  <font>
                    <h3
                      class="de-header"
                    >Greece expels migrants - Turkey sends 1,000 police officers</h3>
                  </font>
                  <font
                    class="de-abstract"
                  >The Athens government recently sent illegally migrants back to their countries of origin. The Turkish police are strengthening their units on the Evros border river.</font>
                </div>
              </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      story:[
           {  
             id:1,
          top_story_slugline:'Syria' ,
          top_story_headline:'under our eyes'  ,
          top_story_abstract:'Nobody can say that it is a shock that Putins military is committing war crimes. He is responsible for the crimes in Syria. And the Europeans are accomplices.',
          top_story_byline:'A commentary by Alice Bota',

             },
      ],
      stories: [
        
        {
          id: 1,
          src: "https://img.zeit.de/politik/2020-03/recep-tayyip-erdogan-tuerkei-syrien-eu-fluechtlinge-wladimir-putin-bild-1/cinema__405x174__desktop",
          slugline: "Recep Tayyip Erdoğan",
          headline: "The Russian President can congratulate himself",
          abstract: "Turkish President Recep Tayyip Erdoğan provokes the EU with the opening of the border and bombs in Syria. Another one benefits from the escalation: Vladimir Putin.",
          byline: "By Özlem Topçu and Michael Thumann"
        },
        {
          id: 2,
          src:  ".https://img.zeit.de/politik/ausland/2020-03/fluechtlinge-griechenland-lesbos-ausweisung-eu-migration/cinema__405x174__desktop",
          slugline: "Refugees",
          headline: "Greece expels migrants - Turkey sends 1,000 police officers",
          abstract: "The Athens government recently sent illegally migrants back to their countries of origin. The Turkish police are strengthening their units on the Evros border river.",
          
        }
      ]
    };
  }
};
</script>

<style  scoped>
.border-style {
  background-color: #dfdfe1;
}
.all-text {
  font-family: "TabletGothic", "Helvetica Neue", Helvetica, Arial, FreeSans,
    sans-serif;
}
.home-card {
  margin-top: -3.5rem;
}
.co-slug {
  font-size: 1.2rem;
  color: #b91109;
}
.co-header {
  font-size: 2rem;
  font-weight: bolder;
}
.co-abstract {
  color: #44444c;
  font-size: 1.18rem;
}
.co-byline {
  font-size: 1.01rem;
  color: #69696c;
}
.de-slug {
  color: #b91109;
}
.de-header {
  font-weight: bolder;
  font-size: 1.6rem;
  color: #252525;
}
.de-abstract {
  font-size: 1.1rem;
  color: #69696c;
}
.de-byline {
  font-size: 1rem;
  color: #69696c;
}
a {
  color: #69696c;
  font-size: 1.1rem;
}
a:hover {
  color: brown;
}
@media (max-width: 540px) {
  .home-card {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: -1.1rem;
  }
  .story{
    padding-left: 1rem
  }
 
}
@media (max-width: 768px)  {
  .co-abstract{
  font-size: 1rem  
  }

  .de-header{
    font-size: 1rem  
  }
  .de-abstract{
    font-size: 0.76rem
  }
  .de-byline{
   font-size: 0.74rem
  }
}
</style>