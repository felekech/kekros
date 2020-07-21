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
            <br/>
            <br/>
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
        text:'Deutschland gehört europaweit zu den Ländern mit den häufigsten Vorfällen schwerer rechter Gewalt – auch unter Berücksichtigung der Bevölkerungszahl. Während es im Jahr 2019 in vielen Ländern Westeuropas keine oder nur sehr wenige Fälle von schweren rechtsextremen Gewalttaten und Terrorplänen gab, kam es in Deutschland im vergangenen Jahr zu nicht weniger als 35 solcher Ereignisse. Dies ist eines der Ergebnisse des von uns veröffentlichten Trendreports zu Rechtsterrorismus und rechter Gewalt des Center for Research on Extremism (C-REX) an der Universität Oslo.'
      },

      image:{
        url:"https://img.zeit.de/gesellschaft/zeitgeschehen/2020-07/rechtsterrorismus-deutschland-hoechste-anzahl-studie-rtv-universitaet-oslo-bild-2/wide__950x422__mobile",
        caption:"The brother of one of those killed in Hanau laid flowers to commemorate. © Thomas Lohnes / Getty Images"
      },

      image_text1:{
        url:"https://img.zeit.de/gesellschaft/zeitgeschehen/2020-07/anders/original__350x467__mobile",
        caption:"Dr. Anders Ravik Jupskås, Deputy Head of the Center for Research on Extremism (C-REX), University of Oslo © private",
        text:'Aus unseren Recherchen geht auch hervor, dass dieser Befund kein statistischer Ausreißer ist. Kein anderes Land in Westeuropa hat seit 1990 so viel schwere rechte Gewalt erlebt wie Deutschland. Deutsche Rechtsextremisten haben in den Jahren seit der Wiedervereinigung mindestens 121 Menschen getötet. Besonders bedeutend ist dabei der Vergleich: 80 Tote gab es im selben Zeitraum in Norwegen (davon 77 durch den Anschlag von Utøya), 36 in Großbritannien und 22 in Spanien. <br/>Entsprechend dem vorherrschenden Trend der letzten Jahre, insbesondere bei Anschlägen mit tödlichem Ausgang, ist der häufigste Tätertyp in Deutschland der sogenannte Einzeltäter. Dieser Tätertyp bereitet Angriffe allein und auf eigene Initiative vor, was ihre Prävention erschwert. Allerdings sind viele dieser Täter nur in einem relativen Sinne allein. Oft sind sie inspiriert durch andere Attentäter wie Brenton Tarrant, der 51 Muslime in Christchurch in Neuseeland tötete. Sogenannte Einzeltäter sind in einigen Fällen Mitglieder von oder assoziiert gewesen mit Gruppen wie der neofaschistischen CasaPound in Italien oder der Reichsbürgerbewegung, die von den deutschen Behörden als eine eigene Form des Extremismus eingestuft wird. ',
      },

        image_text2:{
        url:"https://img.zeit.de/gesellschaft/zeitgeschehen/2020-07/daniel-koehler/original__350x515__mobile",
        caption:"Dr. Daniel Köhler, Head of the German Institute on Radicalization and De-Radicalization Studies (GIRDS)",
        text:'Während in anderen Ländern mit relativ hohen Gewaltraten wie Spanien und Italien die Täter häufiger Teil einer organisierten Gruppe sind, waren "Einzeltäter" für rund die Hälfte der schweren Anschläge in Deutschland im Jahr 2019 verantwortlich, darunter auch für den versuchten Terroranschlag auf eine Synagoge in Halle. In den letzten Jahren gab es allerdings auch in Deutschland Gewalttaten oder Anschlagspläne von organisierten rechtsextremen Gruppen, unter ihnen die "Oldschool Society", die "Gruppe Freital" und "Revolution Chemnitz". Viele hatten auch starke Verbindungen zur rechtsextremen NPD. Darüber hinaus wurden mehrere Gruppen entdeckt, die Waffen lagerten und sich anscheinend auf einen bewaffneten Kampf vorbereiteten. Mindestens vier dieser Entdeckungen standen im Zusammenhang mit der Reichsbürgerbewegung, während in anderen Fällen weniger bekannte Gruppen wie die "National Socialist Knights of the Ku Klux Klan Deutschland" und "Der harte Kern" beteiligt waren. Die deutschen Behörden haben es also sowohl mit gewalttätigen Einzelpersonen als auch mit organisierten Formen rechtsextremer Gewalt zu tun.',
      }

     
    };
  },
 
    methods: {
   
    }
}
</script>

<style >

</style>