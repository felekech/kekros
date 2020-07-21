<template>
    <div class="mx-lg-5">
        <div class="mx-3 containers">
            <TextViewer :dataPassed="type"  class="type"/>
            <TextViewer :dataPassed="header"  class="header"/>
            <TextViewer :dataPassed="title"  class="title"/>
            <TextViewer :dataPassed="contributors"  class="contributors"/>
            <TextViewer :dataPassed="comments"  class="comments"/>
            <br/>
            <FileViewer :dataPassed="image" class="image"/>
            <TextViewer :dataPassed="news"  class="newsText"/>
            <FileTextViewer :dataPassed="image_text1"/>
            <FileTextViewer :dataPassed="image_text2"/>
        </div>
    </div>
</template>
<script>
import FileViewer from '../../components/news_components/file_viewer.vue';
import TextViewer from '../../components/news_components/text_viewer.vue';
import FileTextViewer from '../../components/news_components/file_text_viewer.vue';

export default {
    components: {
    FileViewer,
    TextViewer,
    FileTextViewer,
    
  },
  data() {
    return {
      type:{
        text:"Right-wing terrorism"
      },
      header:{
        text:"An unflattering top spot"
      },
      title:{
        text:"Germany leads right-wing violence and right-wing terrorism in Western Europe. Not in short supply and not only recently."
      },
      contributors:{
        text:'A guest contribution by <a href="" style="color:black;"><b>Anders Ravik Jupskås</b></a> and <a href="" style="color:black;"><b>Daniel Köhler</b></a>'
      },
      comments:{
        text:"July 20, 2020, 1:33 p.m.   /    74 comments"
      },

      news:{
        text:'Our research also shows that this finding is not a statistical outlier. No other country in Western Europe has experienced as much serious right-wing violence since 1990 as Germany. German right-wing extremists have killed at least 121 people in the years since reunification. The comparison is particularly significant: there were 80 deaths in Norway during the same period (77 of them as a result of the Utøya attack ), 36 in Great Britain and 22 in Spain. In line with the prevailing trend in recent years, particularly in the case of attacks with a fatal outcome, the most common type of perpetrator in Germany is the so-called individual perpetrator. This type of perpetrator prepares attacks on their own and on their own initiative, which makes their prevention difficult. However, many of these perpetrators are only in a relative sense alone . They are often inspired by other assassins such as Brenton Tarrant, who killed 51 Muslims in Christchurch in New Zealand. In some cases, so-called individual perpetrators have been members of or associated with groups such as the neo-fascist CasaPound in Italy or the Reich Citizens Movement, which the German authorities classify as a separate form of extremism.'
      },

      image:{
        url:"https://img.zeit.de/gesellschaft/zeitgeschehen/2020-07/rechtsterrorismus-deutschland-hoechste-anzahl-studie-rtv-universitaet-oslo-bild-2/wide__950x422__mobile",
        caption:"The brother of one of those killed in Hanau laid flowers to commemorate. © Thomas Lohnes / Getty Images"
      },

      image_text1:{
        url:"https://img.zeit.de/gesellschaft/zeitgeschehen/2020-07/anders/original__350x467__mobile",
        caption:"Dr. Anders Ravik Jupskås, Deputy Head of the Center for Research on Extremism (C-REX), University of Oslo © private",
        text:"While in other countries with relatively high rates of violence, such as Spain and Italy, the perpetrators are more often part of an organized group, \"individual perpetrators\" were responsible for around half of the serious attacks in Germany in 2019, including the attempted terrorist attack on a synagogue in Halle . In recent years, however, there have also been acts of violence or attack plans by right-wing extremist groups in Germany, including the \"Oldschool Society\", the \"Freital Group\" and \"Revolution Chemnitz\". Many also had strong ties to the far-right NPD. In addition, several groups were discovered that stored weapons and appeared to be preparing for an armed struggle. At least four of these discoveries were related to the Reich Citizens' Movement, while in other cases less well-known groups such as the \"National Socialist Knights of the Ku Klux Klan Germany\" and \"The Hard Core\" were involved. The German authorities are dealing with both violent individuals and organized forms of extreme right-wing violence. organized forms of extreme right-wing violence. organized forms of extreme right-wing violence. organized forms of extreme right-wing violence. organized forms of extreme right-wing violence. organized forms of extreme right-wing violence. organized forms of extreme right-wing violence. organized forms of extreme right-wing violence.",
      },

        image_text2:{
        url:"https://img.zeit.de/gesellschaft/zeitgeschehen/2020-07/daniel-koehler/original__350x515__mobile",
        caption:"Dr. Daniel Köhler, Head of the German Institute on Radicalization and De-Radicalization Studies (GIRDS)",
        text:'While in other countries with relatively high rates of violence, such as Spain and Italy, the perpetrators are more often part of an organized group, "individual perpetrators" were responsible for around half of the serious attacks in Germany in 2019, including the attempted terrorist attack on a synagogue in Halle . In recent years, however, there have also been acts of violence or attack plans by right-wing extremist groups in Germany, including the "Oldschool Society", the "Freital Group" and "Revolution Chemnitz". Many also had strong ties to the far-right NPD. In addition, several groups were discovered that stored weapons and appeared to be preparing for an armed struggle. At least four of these discoveries were related to the Reich Citizens Movement, while in other cases less well-known groups such as the "National Socialist Knights of the Ku Klux Klan Germany" and "The Hard Core" were involved. The German authorities are dealing with both violent individuals and organized forms of extreme right-wing violence.',
      }

     
    };
  },
 
    methods: {
   
    }
}
</script>

<style >

</style>