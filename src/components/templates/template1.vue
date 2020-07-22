<template>
    <div class="m-lg-5">
        <div class="mx-3 containers">
        <div v-for="(dataValue, index1) in titles" :key="index1">
        <TextViewer :dataPassed="dataValue"  :class="dataValue.type" />
        </div>
        <div v-for="(dataValue2, index2) in headers[current]" :key="index2">
        <ImageViewer :dataPassed="dataValue2.image" :class="dataValue2.type" v-if="dataValue2.type=='image'"/>
        <TextViewer :dataPassed="dataValue2" v-else  :class="dataValue2.type" />
        </div>
        
        <TableOfContent :btnClickChange="this.changeSelection" :dataPassed="tableContent"/>

        <div v-for="(dataValue, index3) in data.articles[current]" :key="index3">
   
            <ImageViewer :dataPassed="dataValue.image" :class="dataValue.type" v-if="dataValue.type=='image'"/>

            <ImageTextViewer :dataPassed="dataValue.image_and_text" v-else-if="dataValue.type=='imageAndText'"/>

            <VideoTextViewer :dataPassed="dataValue.video_and_text" v-else-if="dataValue.type=='videoAndText'"/>
            
            <VideoViewer :dataPassed="dataValue.video" v-else-if="dataValue.type=='video'"/>
            
            <TextViewer :dataPassed="dataValue" v-else  :class="dataValue.type" />
            

        </div>
        <Paggination :btnClickChange="this.changeSelection" :currentDataPassed="current" :dataPassed="data.articles"/>
        </div>
    </div>
</template>
<script>
import ImageViewer from '../../components/image_component/image_viewer1.vue';
import TextViewer from '../../components/text_component/text_viewer1.vue';
import VideoViewer from '../../components/video_component/video_viewer1.vue';
import ImageTextViewer from '../../components/imageandtext_component/image_text_viewer1.vue';
import VideoTextViewer from '../../components/videoandtext_component/video_text_viewer1.vue';
import TableOfContent from '../../components/form_component/collapse.vue';
import Paggination from  '../../components/form_component/paggination.vue';


export default {
    components: {
    ImageViewer,
    TextViewer,
    ImageTextViewer,
    VideoViewer,
    VideoTextViewer,
    TableOfContent,
    Paggination,
  },
  data() {
    return {
        current:0,
        tableContent:{
            type:"tableOfContent",
            title:"INHALT",
            subtitle:"Auf einer Seite lesen",
            lists:[{
                name:"Seite 1",
                detail:"Auf einer Seite lesen",
                url: "",
            },
            {
                name:"Seite 2",
                detail:"Harte Lektionen",
                url: "",
            }
            ]
        },
        titles:[
                {
            text:"Rechtsterrorismus",
            type:"type",
         
        },
        {
            text:"Ein unschmeichelhafter Spitzenplatz",
            type:"header",
        },
        ],
        headers:[
        [

        {
            text:"Deutschland führt bei rechter Gewalt und Rechtsterrorismus in Westeuropa. Nicht knapp und nicht erst seit Kurzem. ",
            type:"title",
            
        },
        {
            text:'Ein Gastbeitrag von <a href="" style="color:black;"><b>Anders Ravik Jupskås</b></a> and <a href="" style="color:black;"><b>Daniel Köhler</b></a>',
            type:"contributors",
            
        },
        {
            text:"20. Juli 2020, 13:33 Uhr    /    449 Kommentare",
            type:"comments",
        },
       
        {
            type:"image",
            
            image:{
                url:"https://img.zeit.de/gesellschaft/zeitgeschehen/2020-07/rechtsterrorismus-deutschland-hoechste-anzahl-studie-rtv-universitaet-oslo-bild-2/wide__950x422__mobile",
                caption:"The brother of one of those killed in Hanau laid flowers to commemorate. © Thomas Lohnes / Getty Images"
            },
           
        },
        ],
         [
        {
            text:"Seite 2/2: Harte Lektionen",
            type:"title",
            
        },
         ]  
            
        ],

        data:{

        articles:[[

        {
            type:"newsText",
            text: 'Deutschland gehört europaweit zu den Ländern mit den häufigsten Vorfällen schwerer rechter Gewalt – auch unter Berücksichtigung der Bevölkerungszahl. Während es im Jahr 2019 in vielen Ländern Westeuropas keine oder nur sehr wenige Fälle von schweren rechtsextremen Gewalttaten und Terrorplänen gab, kam es in Deutschland im vergangenen Jahr zu nicht weniger als 35 solcher Ereignisse. Dies ist eines der Ergebnisse des von uns veröffentlichten Trendreports zu Rechtsterrorismus und rechter Gewalt des Center for Research on Extremism (C-REX) an der Universität Oslo.'

        },
        {
            type:"imageAndText",
            
            image_and_text:{
                url:"https://img.zeit.de/gesellschaft/zeitgeschehen/2020-07/anders/original__350x467__mobile",
        caption:"Dr. Anders Ravik Jupskås, Deputy Head of the Center for Research on Extremism (C-REX), University of Oslo © private",
        text:'Aus unseren Recherchen geht auch hervor, dass dieser Befund kein statistischer Ausreißer ist. Kein anderes Land in Westeuropa hat seit 1990 so viel schwere rechte Gewalt erlebt wie Deutschland. Deutsche Rechtsextremisten haben in den Jahren seit der Wiedervereinigung mindestens 121 Menschen getötet. Besonders bedeutend ist dabei der Vergleich: 80 Tote gab es im selben Zeitraum in Norwegen (davon 77 durch den Anschlag von Utøya), 36 in Großbritannien und 22 in Spanien. <br/>Entsprechend dem vorherrschenden Trend der letzten Jahre, insbesondere bei Anschlägen mit tödlichem Ausgang, ist der häufigste Tätertyp in Deutschland der sogenannte Einzeltäter. Dieser Tätertyp bereitet Angriffe allein und auf eigene Initiative vor, was ihre Prävention erschwert. Allerdings sind viele dieser Täter nur in einem relativen Sinne allein. Oft sind sie inspiriert durch andere Attentäter wie Brenton Tarrant, der 51 Muslime in Christchurch in Neuseeland tötete. Sogenannte Einzeltäter sind in einigen Fällen Mitglieder von oder assoziiert gewesen mit Gruppen wie der neofaschistischen CasaPound in Italien oder der Reichsbürgerbewegung, die von den deutschen Behörden als eine eigene Form des Extremismus eingestuft wird. ',
            },
        },
        {
            type:"imageAndText",
            
            
            image_and_text:{
                url:"https://img.zeit.de/gesellschaft/zeitgeschehen/2020-07/daniel-koehler/original__350x515__mobile",
                caption:"Dr. Daniel Köhler, Head of the German Institute on Radicalization and De-Radicalization Studies (GIRDS)",
                text:'Während in anderen Ländern mit relativ hohen Gewaltraten wie Spanien und Italien die Täter häufiger Teil einer organisierten Gruppe sind, waren "Einzeltäter" für rund die Hälfte der schweren Anschläge in Deutschland im Jahr 2019 verantwortlich, darunter auch für den versuchten Terroranschlag auf eine Synagoge in Halle. In den letzten Jahren gab es allerdings auch in Deutschland Gewalttaten oder Anschlagspläne von organisierten rechtsextremen Gruppen, unter ihnen die "Oldschool Society", die "Gruppe Freital" und "Revolution Chemnitz". Viele hatten auch starke Verbindungen zur rechtsextremen NPD. Darüber hinaus wurden mehrere Gruppen entdeckt, die Waffen lagerten und sich anscheinend auf einen bewaffneten Kampf vorbereiteten. Mindestens vier dieser Entdeckungen standen im Zusammenhang mit der Reichsbürgerbewegung, während in anderen Fällen weniger bekannte Gruppen wie die "National Socialist Knights of the Ku Klux Klan Deutschland" und "Der harte Kern" beteiligt waren. Die deutschen Behörden haben es also sowohl mit gewalttätigen Einzelpersonen als auch mit organisierten Formen rechtsextremer Gewalt zu tun.',
            },
        },

         {
            text:'Deutschland gehört europaweit zu den Ländern mit den häufigsten Vorfällen schwerer rechter Gewalt – auch unter Berücksichtigung der Bevölkerungszahl. Während es im Jahr 2019 in vielen Ländern Westeuropas keine oder nur sehr wenige Fälle von schweren rechtsextremen Gewalttaten und Terrorplänen gab, kam es in Deutschland im vergangenen Jahr zu nicht weniger als 35 solcher Ereignisse. Dies ist eines der Ergebnisse des von uns veröffentlichten Trendreports zu Rechtsterrorismus und rechter Gewalt des Center for Research on Extremism (C-REX) an der Universität Oslo.',
            type:"newsText",
            
        },
        {
        title:"Immer wieder gegen Einwanderer",
        text:'Zudem hat es in Deutschland auch mehrere rechte Angriffe auf hochrangige Politiker gegeben. Walter Lübcke, Henriette Reker und Andreas Hollstein wurden wegen ihrer flüchtlingsfreundlichen Politik ermordet oder verletzt. Auch mehrere andere Bürgermeister und Politiker auf kommunaler und Landesebene wurden attackiert oder konkret ins Visier genommen. An einigen dieser Terrorpläne sind Gruppen wie "Nordkreuz" beteiligt, die anscheinend darauf hinarbeiten, das gesamte politische System zu stürzen. ',
        type:"newsText"
        },

        
        ],
        [
        {
            type:"newsText",
            text: 'Das alles liefert uns mindestens drei wichtige Erkenntnisse. Erstens: Die Art der rechten Gewalt unterscheidet sich stark von Land zu Land. Während sich einige Länder wie Großbritannien in erster Linie mit sogenannten Einzelakteuren mit islamfeindlichen Motiven befassen müssen, stehen andere stärker vor dem Problem organisierter Gewalt. Dazu gehören Angriffe auf politische Gegner wie in Spanien oder auf Geflüchtete wie in Griechenland. Deutschland ist mit einer noch komplexeren Situation konfrontiert. Hier gibt es sowohl Einzelakteure als auch militante Gruppen.'

        },
        {
            type:"newsText",
            text: 'Zweitens: Die unterschiedlichen Formen rechter Gewalt lassen sich unterschiedlich erklären. In Südeuropa scheinen hohe Gewaltraten mit einer Kombination aus sozioökonomischen Problemen, nationalistisch-autoritären Hinterlassenschaften vorheriger Staatsformen und etablierter linksextremer Militanz einherzugehen. Diese Kombination verstärkt eine bereits polarisierte Links-Rechts-Spaltung, die gelegentlich zu mehr rechtsextremer Gewalt führt. '

        },
        {
            type:"newsText",
            text: 'Während diese Erklärung teils auch in Deutschland, insbesondere im Osten in den Neunziger- und frühen Zweitausenderjahren, eine Rolle spielt, scheint das relativ hohe Niveau rechtsextremer Gewalt in Nordeuropa mit der Kombination aus hoher Zuwanderung, geringer Wahlunterstützung für einwandererfeindliche Parteien und umfassender öffentlicher Repression gegen rechtsextreme Akteure und Meinungen zusammenzuhängen. In diesen Ländern scheint die extreme Rechte in der Lage zu sein, Anhänger zu mobilisieren und Gewalt zu motivieren, zumindest teilweise aufgrund der Dominanz einwanderungsfreundlicher Eliten in Politik und Gesellschaft. Dies bedeutet jedoch nicht, dass eine erfolgreichere Anti-Einwanderer-Partei automatisch die Gewaltrate reduziert, vor allem nicht, wenn diese teilweise von Rechtsextremisten gekapert wird.'

        },
         {
            type:"video",
            
            video:{
                title:'Shisha-Bars - "Das kann jetzt überall passieren"',
        url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        caption:"Für viele Menschen mit Migrationshintergrund waren Shisha-Bars bislang Rückzugsräume. Wie fühlen sie sich nach dem Attentat von Hanau? Unsere Reporter haben nachgefragt. © Foto: Sven Wolters / ZEIT Online",
                    },
        },
        {
            type:"newsText",
            text: 'Drittens ist die Prävention solcher Anschläge und gewalttätiger Radikalisierung, die zu Terrorismus führt, ein komplexes Unterfangen. Die Behörden müssen mehr tun, auch in Deutschland. Zwar wurden hier die personellen Kapazitäten im Staatsschutz erheblich aufgestockt und endlich ein Instrument zur Risikoabschätzung für rechtsextremistische Gefährder entwickelt, doch erhalten Neonazis immer noch zu leicht Zugang zu Waffen.',
            title: 'Ein komplexes Unterfangen',
        },

                {
            type:"newsText",
            text: 'Und während das Bundeskriminalamt in jüngster Zeit mit sogenannten "virtuellen Agenten" versucht, potenzielle Attentäter zu identifizieren, ist das Aufspüren onlinebasierter Radikalisierungsprozesse noch deutlich unterentwickelt. Die Behörden wissen zu wenig über neue Milieus rechtsextremer Radikalisierung, etwa in Messenger-Apps wie Telegram oder TikTok.'

        },


                {
            type:"newsText",
            text: 'Die deutschen Inlandsnachrichtendienste konzentrieren sich überwiegend auf die nationale Ebene und auf organisierte Gruppen. Die jüngsten Formen rechtsextremer Radikalisierung sind aber weniger strukturiert, wie das Konzept des "Schwarmterrorismus" zeigt. Solche Radikalisierungsprozesse sind transnational und können globale Kettenreaktionen im Rechtsterrorismus auslösen. Um dem effektiv zu begegnen, braucht es mehr Vernetzung und Austausch zwischen Wissenschaft, staatlichen Stellen und Zivilgesellschaft. Und schließlich muss die deutsche Regierung nicht staatliche Projekte zur Prävention und Bekämpfung von Extremismus, einschließlich der Ausstiegsprogramme, stärker auf ihre Wirksamkeit prüfen. Solide wissenschaftliche Evaluationen solcher Instrumente sind selten. '

        },


        {
            type:"newsText",
            text: 'Während diese Erklärung teils auch in Deutschland, insbesondere im Osten in den Neunziger- und frühen Zweitausenderjahren, eine Rolle spielt, scheint das relativ hohe Niveau rechtsextremer Gewalt in Nordeuropa mit der Kombination aus hoher Zuwanderung, geringer Wahlunterstützung für einwandererfeindliche Parteien und umfassender öffentlicher Repression gegen rechtsextreme Akteure und Meinungen zusammenzuhängen. In diesen Ländern scheint die extreme Rechte in der Lage zu sein, Anhänger zu mobilisieren und Gewalt zu motivieren, zumindest teilweise aufgrund der Dominanz einwanderungsfreundlicher Eliten in Politik und Gesellschaft. Dies bedeutet jedoch nicht, dass eine erfolgreichere Anti-Einwanderer-Partei automatisch die Gewaltrate reduziert, vor allem nicht, wenn diese teilweise von Rechtsextremisten gekapert wird.'

        },
         {
            type:"newsText",
            text: 'Deutschland braucht, wie die meisten anderen Länder auch, mehr Forschung und evidenzbasierte Ansätze sowie eine umfangreichere staatliche und zivilgesellschaftliche Vernetzung zur Bekämpfung rechter Gewalt.'

        },

        ]
        ],
}
    
    };
  },
 
    methods: {
       
    changeSelection: async function (index) {
    this.current = index;
    document.documentElement.scrollTop = 0;
    
    
  }
    }
}
</script>

<style >

</style>