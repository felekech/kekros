<template>
  <div class="all">
    <div>
      <app-navbar></app-navbar>
    </div>
    <div v-for=" detail in  details" :key=" detail.id">
    <div class="row">
      <div class="col-lg-7 col-md-7 text">
        <font>
          <p class="key_word">{{ detail.key_word}}</p>
        </font>
        <font>
          <h1 class="headline">
            <b>{{ detail.headline}}</b>
          </h1>
        </font>
        <font class="abstract">
          <p
            class="mt-lg-3"
          >{{ detail.abstract}}</p>
        </font>
        <font>
          <p v-html=" detail.byline" class="byline">  </p>
        </font>
        <div class="date">
          <font>{{ detail.time_created}}</font>
          <font>{{ detail.edited}}</font>
          <font>{{ detail.number}}</font>
          <font>{{ detail.modifyed}}</font>
          <font>{{ detail.comments}}</font>
        </div>
      </div>
    </div>
    <div>
      <div class="mt-5">
       <img :src="detail.image_src" alt="">
      </div>
      <div class="col-lg-7 col-md-10 caption">
        <font class="">Russia's President Vladimir Putin during the March 1 military parade in Pskov © Mikhail Svetlov / Getty Images</font>
      </div>
    </div>
    <div class="row mt-lg-4 mt-md-5">
      <div class="col-lg-8 col-md-8 col-sm-12 detail">
        <div>
          <font>
            {{detail.body_one}}
          </font>
          <font>
            <h1 class="header mt-lg-4">
              <b>{{detail.headline_two}}</b>
            </h1>
          </font>
          <font>
           {{detail.body_two}}
          </font>
        </div>
      </div>
    </div>
    </div>
    <div>
      <app-footer></app-footer>
    </div>
  </div>
</template>
<script>
import navbar from "../../../components/navbar";
import footer from "../../../components/footer";
export default {
  components: {
    appNavbar: navbar,
      appFooter: footer,
  },
      data(){
        return{
          details:[
            {
              id:1,
              image_src: 'https://img.zeit.de/politik/ausland/2020-03/syrien-wladimir-putin-russland-baschar-al-assad/wide__820x461__desktop',
              key_word:'Syria',
              headline:'Under our eyes',
              abstract:'Vladimir Putin is responsible for the crime in Syria. The Europeans are complicit.',
              byline:'A commentary by <b>Alice Bota</b>',
              time_created:'March 4,2020, 4:51p.m.',
              edited:'/Edited March 5,2020, 1:16pm',
              number:'/ DIEZEIT No. 11/2020,',
              modifyed:'March 5,2020/',
              comments:'102 comments/',
              body_one:' Can you be shocked if you cannot be surprised - by the terrible pictures of the refugees from Syria? These pictures tell a story. And Vladimir Putin got them rolling.  So let no one say the news that Putins military is committing war crimes is a shock. Or the message that his air force targeted targeted civilian facilities. She shot to four hospitals in May last year in the Idlib province . In a marketplace, she killed particularly perfidiously just two months later: after the bombs had hit and people had rushed to rescue the dead and take care of the wounded, the planes turned and struck again. 43 civilians were killed. Less than a month later, the Russian Air Force bombed a refugee camp, killing 20 people. In the past few years, journalists and human rights organizations have put all of this and an unbearable amount of things together again and again. Now an independent UN commission for Syria has confirmed what everyone could know, or should have known: the air strikes against civilian facilities, hospitals and marketplaces were not errors of the Russian army - they were a calculation. Terror to demoralize.',
              headline_two:'Women and children sleep in tents that sink into the mud',
              body_two:'  Those who do not support Assads regime should fear for their lives, flee - Idlib, with just over three million inhabitants, is the last province that is not under Assads control. About a million people have made their way and have been waiting for weeks before the Turkish border. They fled in haste, left everything behind. Women and children sleep in tents that sink into the mud, they have no drinking water. Babies freeze to death in their mothers arms.What is happening around Idlib is no longer a civil war. It is the last stage in a displacement war. And Putin is responsible - without him, his protégé Assad could not have waged this war. Putins air force bombed. If it doesnt bomb it, it will secure military superiority in Syria. But Putin is not held responsible.'



            }
          ]
        }
      }
  
};
</script>
<style src='../../../assets/css/detailpage.css' scoped>

</style>