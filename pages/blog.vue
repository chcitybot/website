<template>
  <div class="container mx-auto p-4 mt-28">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="(section, index) in blogSections" :key="index" class="w-full">
        <v-expansion-panels multiple>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h2 class="font-bold text-xl text-blue-500">{{ section.title }}</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <h3 class="text-gray-400 mt-2">{{ section.subtitle }}</h3>
              <p class="mt-2" v-html="section.content"></p>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogSections: [
        {
          title: "Fragmentiertes Erlebnis - Tourismus als Etappenlauf",
          subtitle: '19.2.2025 - 3 min zu lesen',
          content: `Im letzten Post haben wir gesehen, wie unstrukturierte touristische Inhalte zur Informationsüberflutung und Entscheidungslähmung führen, und wie CityBot dieses Problem löst. Eine weitere Herausforderung für Städte und Regionen ist es, ein Besuchenden-Erlebnis aus einem Guss zu offerieren. Denn aktuell müssen Besuchende oft mehrere Apps und Webseiten nutzen, um sich in einer Stadt zurechtzufinden. Stadtführungen, Eventkalender und Bewertungsportale – die Informationssuche wird schnell umständlich und ineffizient. Hinzu kommt die Navigation: Denn wenn man sich für einen Ort entschieden hat, so muss man noch dort hinkommen.<br><br>
          CityBot bietet ein Besuchenden-Erlebnis aus einem Guss. Es gibt keine Unterbrüche mehr zwischen der Entscheidung, welche dank unserer KI-Komponente massgeschneidert auf Besuchende ist, und der Navigation, um an den Ort zu gelangen. Eine All-in-One-Lösung für Besuchende, Städte und Regionen zugleich.`
        },
        {
          title: "Zu viel Information, zu wenig Struktur? Touristische Inhalte effizient verwalten",
          subtitle: '6.2.2025 - 3 min zu lesen',
          content: `Im letzten Post haben wir gesehen, wie der Druck, zu einer Smart City zu werden, in den letzten Jahren gestiegen ist. Städte haben oft eine Vielzahl von Sehenswürdigkeiten, Events und gastronomischen Highlights – doch die richtige Darstellung dieser Informationen ist entscheidend. Trotz smarten Lösungen, wie z.B. TripAdvisor, Google Maps oder lokale Eventkalender auf der städtischen Website, entsteht eine Informationsflut. Besuchende werden häufig von der Informationsflut erschlagen und wissen nicht, was sie zuerst erkunden sollen, oder gehen alle an denselben Ort, der zuerst auf den Online-Foren vorgeschlagen wurde. Dabei geht jegliche Individualität der Besuchenden und der Stadt oder Region verloren.<br><br>
          CityBot löst dieses Problem, denn durch die App sind alle Inhalte an einem Ort: Navigation, Events, Touren, Restaurants, Cafés, Natur und vieles mehr. Durch unser intuitives Content-Management-System können Städte und Regionen zielgerichtet Informationen bereitstellen, die für Besuchende wirklich relevant sind. So wird das digitale Erlebnis klar, benutzerfreundlich und individuell.`
        },
        {
          title: "Die Smart City Bewegung - Tourismus zukunftssicher gestalten",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `Städte und Regionen stehen vor der Herausforderung, den Tourismus modern und effizient zu gestalten. Ob durch die Neue Regional Politik (NRP) der Schweiz oder das Sustainable Development Goal 11 - "Sustainable cities and human settlements", Städte und Regionen werden national und international dazu angehalten, sich Richtung "Smart City" zu entwickeln.<br><br>
          Smart City kann vielfältig interpretiert und definiert werden. Doch eines haben die meisten Definitionen gemeinsam: Eine Stadt oder Region effizienter und nachhaltiger zu gestalten, auch für den Tourismus. Doch wo fängt man an: Gedruckte Stadtführer, veraltete Eventkalender und fragmentierte Informationsquellen erschweren es, sich zurechtzufinden, vor allem, wenn man sich nicht auskennt. Gleichzeitig werden personalisierte Erlebnisse und aktuelle Informationen in Echtzeit erwartet.<br><br>
          CityBot ist eine zentrale Plattform für Städte, die all diese Probleme löst. Besuchende erhalten maßgeschneiderte Vorschläge, aktuelle Event-Updates und digitale Touren – alles an einem Ort. So kann Content jederzeit angepasst werden, ohne Druckkosten oder veraltete Informationen. Eine moderne Lösung für zukunftsorientierten Tourismus.`
        },
        {
          title: "Smart City Hub Award Nominierung",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `Heute durften wir am ersten Schweizer SmartCity Hub Award unser nominiertes Projekt “CityBot” zusammen mit der Stadt Zug vorstellen. Unser CTO [Vladislav Bunkin](https://www.linkedin.com/in/bunkinv/) hat 
aufgezeigt was wir mit CityBot in Zug zusammen mit Zug erreicht haben:
<ol>
<li>&nbsp&nbsp- 5000 Nutzende gewonnen </li>
<li>&nbsp&nbsp- den gedruckten Stadtführer ersetzt </li>
<li>&nbsp&nbsp- die Digitalisierung von Tourismusinhalten vereinfacht </li>
<li>&nbsp&nbsp- Kollaboration zwischen Departementen gefördert </li>
</ol>
<br>

Nach Hause gingen wir zwar ohne Award, aber mit einer Menge neuer Kontakten und Ideen:
<ol>
<li>1) Für eine Smart City müssen viele Interessengruppen der Region vernetzt werden</li>
<li>2) Zu wissen, dass Generative KI Prozesse vereinheitlichen und effizienter gestalten kann, ist genauso wichtig, wie die Risiken davon zu kennen</li>
<li>3) Zu einer Smarten City gehört auch das Thema der Zugänglichkeit für alle. Es reicht nicht, nur Satellitenbilder zu analysieren. Die Auswertung müssen von Menschen in der ganzen Stadt gesammelt werden</li>
<li>4) Ein geteiltes Betriebsmodell kann helfen, kosteneffizient Smart City Konzepte umzusetzen </li>
</ol>
<br>
Zusammengefasst: In einer Smart City soll es um die Menschen gehen. Und darum, ihnen das Leben einfacher zu machen. Ob bei der Arbeit, dem Bestellen von Dokumenten, oder beim Erkunden der Stadt oder Region, wie mit unserer KI-basierten App.

Wir freuen uns darauf noch mehr Städte ‘smarter’ zu machen! Vielen Dank Smart City Hub Switzerlandfür die Organisation des Events, und Stadt Zug für die stetige Unterstützung.
`},
        {
          title: "Die Anfänge von CityBot: Eine Geschichte in III Akten",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `<b>I: Prag - Vor 5 Jahren</b>: Vlad macht sich auf den Weg, die Stadt zu erkunden. Er sieht, dass es Stadtführungen via Messaging-Service gibt.
Er kann also Fragen an eine Person via SMS schicken, und erhält antworten. “Cooles Konzept!” denkt er sich. “Aber es wäre ein bisschen einfacher und flexibler, 
wenn eine Person, die mich kennt, auf meine Fragen antwortet”. Da hat er wohl recht. Wir alle wünschen uns doch Locals, die uns durch eine fremde Stadt führen, 
und am besten noch unsere langjährigen Freunde oder Freundinnen sind!<br><br>

<b>II: Zürich - Vor 4 Jahren</b>: Das “Atelier” ist unsere kreative Laube. Wir sitzen zu fünft am Tisch und diskutieren, was für Projekte als nächstes anstehen. 
Das Garagentor hat  bereits ein Raspberry Pi, die Wände waren gestrichen, und viele Smart City Projekte wie z.B. das Parken vereinfachen gibt es schon. Vlad beschreibt uns schliesslich seine Idee von Prag, 
Stadtführen zu vereinfachen und zu personalisieren. Die Idee wird einstimmig angenommen, Laptops hervorgeholt, und das Programmieren beginnt.
<br><br>
<b>III: Zug - Vor 3 Jahren</b>: Das Telefon klingelt. Regula Kaiser, Leiterin des Smart City Departements von Zug, hat von unserem Projekt gehört und möchte mit uns zusammen das Digital 
First dieses Projektes erschaffen. Nach einigen erfolglosen Versuchen, Städte als PartnerInnen für unser Projekt zu gewinnen, ist es endlich soweit!`
        },
        {
          title: "Die Digitalisierung im Tourismus – Ein neuer Blick auf den Reisemarkt",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `Die Digitalisierung hat den Tourismussektor in den letzten Jahren revolutioniert. Von der Art und Weise, wie wir Reisen planen, bis hin zur Art und Weise, wie wir mit den Zielorten interagieren, hat Technologie einen enormen Einfluss auf unsere Erwartungen und Erfahrungen als Reisende. Doch was genau bedeutet Digitalisierung für den Tourismus? <br><br>
          Im Wesentlichen geht es darum, dass touristische Inhalte, Dienstleistungen und Infrastruktur durch digitale Technologien verbessert werden. Dies reicht von Apps und Webportalen, die Reisende mit den besten Angeboten verbinden, bis hin zu digitalen Karten, die personalisierte Erlebnisse ermöglichen. Technologie hilft dabei, den Reisenden ein maßgeschneidertes Erlebnis zu bieten, das oft nicht nur effizienter, sondern auch angenehmer ist.<br><br>
          Ein Schlüsselfaktor dabei ist die Integration von Daten aus verschiedenen Quellen. Dies führt zu einem holistischen Verständnis des Tourismuserlebnisses und ermöglicht eine personalisierte und smarte Reiseplanung. Städte und Regionen können so mit innovativen Lösungen einen Wettbewerbsvorteil schaffen und Touristen eine noch nie dagewesene Benutzererfahrung bieten.`
        },
        {
          title: "Digitale Plattformen und deren Auswirkungen",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `
          Moderne Apps und digitale Plattformen ermöglichen es Reisenden, ihre gesamte Reiseerfahrung zu optimieren – von der Unterkunft über Veranstaltungen bis hin zu Touren und Freizeitaktivitäten. Gleichzeitig können lokale Unternehmen und Behörden mithilfe dieser Technologien ihre Reichweite erweitern und neue Kundengruppen ansprechen. Und das Beste daran: All dies ist jederzeit und überall zugänglich.<br><br>
          Für Städte bietet die Digitalisierung eine Möglichkeit, den Tourismussektor nachhaltiger und effizienter zu gestalten, indem Ressourcen gezielt eingesetzt werden. Hier setzt unsere App an – sie vereint sämtliche touristische Inhalte in einer benutzerfreundlichen Plattform, die Touristen einen einfachen Zugriff auf alle relevanten Informationen ermöglicht.
          `
        },
        {
          title: "Smart Cities – Wie Technologie Städte für Touristen und Einheimische smarter macht",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `Smart Cities sind das Resultat der Integration digitaler Technologien, um Städte intelligenter, effizienter und lebenswerter zu gestalten. Dabei kommen eine Vielzahl von Technologien zum Einsatz, darunter IoT (Internet of Things), Big Data, Künstliche Intelligenz (KI) und vieles mehr. Diese Technologien verbessern nicht nur das Leben der Einwohner, sondern können auch den Tourismus effizienter und komfortabler gestalten.<br><br>
                    Durch die Vernetzung von Infrastrukturen und die intelligente Nutzung von Daten können Smart Cities ihre Ressourcen optimal einsetzen. Öffentliche Verkehrsmittel werden durch intelligente Routenplanung verbessert, Umweltdaten werden erfasst und Bürger sowie Touristen erhalten in Echtzeit Informationen, die ihre Bewegungen durch die Stadt erleichtern. Für Touristen bedeutet dies, dass sie nicht nur von besseren Dienstleistungen profitieren, sondern auch eine rundum positive Erfahrung haben – von der Buchung der Unterkunft bis zur Navigation durch die Stadt.`
        },
        {
          title: "Integration von touristischen Angeboten in Smart Cities",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `Smart Cities bieten eine ideale Plattform für die Integration von digitalen Tourismusangeboten. Unsere App ermöglicht es beispielsweise, dass touristische Inhalte direkt in die Smart City-Infrastruktur eingebunden werden. Echtzeit-Updates zu Veranstaltungen, Sehenswürdigkeiten oder öffentlichen Verkehrsmitteln machen das Reisen einfacher und angenehmer.<br><br>
                    Außerdem ermöglichen smarte Lösungen eine tiefere Analyse von Besucherdaten, die Städten helfen, ihre Angebote besser auf die Bedürfnisse von Touristen abzustimmen. Indem alle relevanten Daten zusammengeführt werden, können Städte ihren Tourismus effektiv steuern und gleichzeitig ein besseres Erlebnis für alle bieten.`
        },
        {
          title: "Zusammenarbeit zwischen städtischen Abteilungen – Der Schlüssel zu einem nahtlosen Erlebnis",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `Eine der größten Herausforderungen für Städte, die sich in Richtung Smart City entwickeln, ist die Zusammenarbeit der verschiedenen städtischen Abteilungen. Vom Verkehrsmanagement über das Tourismusbüro bis hin zu den Abteilungen für Stadtplanung und Sicherheit – jede Abteilung hat ihre eigenen Daten und Ziele. Doch nur wenn diese Abteilungen miteinander kommunizieren und zusammenarbeiten, entsteht ein nahtloses Erlebnis für den Besucher.<br><br>
                    Die Digitalisierung ermöglicht eine effizientere Zusammenarbeit zwischen den städtischen Abteilungen. Durch die Nutzung einer zentralisierten digitalen Plattform können alle relevanten Akteure – sei es die Tourismusbehörde, das Verkehrsmanagement oder das Event-Management-Team – auf dieselben Echtzeitdaten zugreifen und somit eine kohärente Erfahrung für die Touristen bieten.`
        },
        {
          title: "Digitale Infrastruktur als Brücke",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `Ein funktionierendes System erfordert eine digitale Infrastruktur, die Daten aus verschiedenen Quellen integriert und eine benutzerfreundliche Oberfläche bietet. Hier setzt unsere App an. Sie vereint alle Informationen in einer einzigen Plattform und sorgt dafür, dass Touristen durch die verschiedenen Angebote der Stadt problemlos navigieren können. Durch die enge Zusammenarbeit von Stadtverwaltung und privaten Unternehmen wird so ein integratives und benutzerfreundliches Erlebnis geschaffen.`
        },
        {
          title: "Die Zukunft des digitalen Tourismus – Wohin geht die Reise?",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `Der digitale Tourismus steht noch am Anfang seiner Entwicklung. Doch die Möglichkeiten sind enorm. Während in der Vergangenheit Tourismusinformationen hauptsächlich statisch und isoliert waren, leben wir heute in einer Zeit der Vernetzung, in der jede Interaktion und jede Information miteinander verbunden ist. <br><br>
                    Zukunftsweisende Technologien wie Augmented Reality (AR), Virtual Reality (VR) und Künstliche Intelligenz (KI) werden die Art und Weise verändern, wie wir die Welt erleben. Dank AR könnten Touristen etwa Sehenswürdigkeiten in Echtzeit entdecken oder durch interaktive Erlebnisse mehr über historische Stätten erfahren. KI wird dazu beitragen, maßgeschneiderte Reiseempfehlungen zu geben, die auf den Interessen und Vorlieben der einzelnen Reisenden basieren.<br><br>
                  Unsere App ist Teil dieser digitalen Zukunft und bietet bereits jetzt ein innovatives Erlebnis, das nicht nur den Tourismus optimiert, sondern die gesamte Reiseplanung revolutioniert. Durch den Einsatz modernster Technologien können wir den Nutzern maßgeschneiderte Inhalte bieten, die ihre Reisen noch komfortabler und unvergesslicher machen.`},
        {
          title: "Digitalisierung im Tourismus – Chancen für eine maßgeschneiderte Reiseerfahrung",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `Die Digitalisierung hat den Tourismus grundlegend verändert. Touristen können heute mit wenigen Klicks ihre Reise komplett planen, buchen und erleben. Doch was genau bedeutet das für die Branche und vor allem für die Reisenden? <br><br>
                    Im Kern geht es um maßgeschneiderte Erlebnisse, die durch digitale Technologien ermöglicht werden. Apps und Online-Plattformen bieten personalisierte Inhalte, die auf den individuellen Vorlieben basieren. Touristen können ihre Reisen nach ihren Wünschen gestalten, sei es durch personalisierte Hotelangebote oder maßgeschneiderte Eventempfehlungen.<br><br>
                    Doch es ist nicht nur die Planung, die digitalisiert wird. Auch während des Aufenthalts können digitale Tools den Aufenthalt effizienter und angenehmer gestalten – von der Navigation durch die Stadt bis hin zu Echtzeit-Informationen über Veranstaltungen und Attraktionen.<br><br>
                    Die digitale Transformation macht den Tourismus nicht nur einfacher, sondern auch individueller. Städte, die innovative digitale Lösungen anbieten, haben die Chance, ihre Besucher mit einem einzigartigen Erlebnis zu begeistern. Und genau hier kommt unsere App ins Spiel, die den Tourismus durch digitale Vernetzung revolutioniert.`
        },
        {
          title: "Wie Smart Cities den Tourismus effizienter und angenehmer machen",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `Smart Cities stehen für die Zukunft der urbanen Entwicklung – und sie bieten enorme Potenziale für den Tourismus. Der Begriff „Smart City“ bezeichnet eine Stadt, die moderne Technologien wie das Internet der Dinge (IoT), Künstliche Intelligenz (KI) und Big Data nutzt, um das Leben für ihre Einwohner und Besucher zu verbessern.<br><br>
                  In einer Smart City wird jede Entscheidung von Daten unterstützt. Ob es um die Routenplanung für den öffentlichen Nahverkehr, die Verwaltung von Ressourcen oder die Verwaltung von touristischen Attraktionen geht – alles wird durch digitale Infrastruktur miteinander verbunden. Für Touristen bedeutet dies, dass sie immer genau wissen, wie sie sich am besten fortbewegen, wo die nächsten Veranstaltungen stattfinden und wie sie das Beste aus ihrem Aufenthalt herausholen können.<br><br>
                  Durch die Vernetzung aller städtischen Bereiche entsteht ein nahtloses Erlebnis für den Touristen. Wenn Städte es schaffen, Tourismus und intelligente Infrastruktur miteinander zu verbinden, können sie nicht nur die Effizienz steigern, sondern auch den Komfort für Besucher erheblich erhöhen.<br><br>
                  Unsere App trägt dazu bei, diese Vision von Smart Cities im Tourismus umzusetzen, indem sie alle relevanten Informationen an einem Ort bündelt und den Nutzern ein durchgehend positives Erlebnis bietet.`},
        {
          title: "Die Herausforderung der Zusammenarbeit – Warum Städte ihre Abteilungen besser vernetzen müssen",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `Städte, die sich als Smart Cities positionieren wollen, müssen nicht nur moderne Technologien einsetzen, sondern auch die Zusammenarbeit zwischen den verschiedenen städtischen Abteilungen verbessern. Die Abteilungen für Verkehr, Tourismus, Sicherheit und Stadtplanung haben oft ihre eigenen Ziele und Daten, aber ohne eine koordinierte Zusammenarbeit entstehen ineffiziente Prozesse und fragmentierte Erlebnisse für die Bürger und Touristen.<br><br>
                    Die Lösung liegt in der Integration. Eine zentrale digitale Plattform, die alle relevanten Informationen in Echtzeit vereint, ist der Schlüssel. Diese Plattform ermöglicht es verschiedenen Abteilungen, ihre Ressourcen besser zu nutzen, Daten zu teilen und so ein nahtloses Erlebnis für die Touristen zu schaffen. <br><br>
                    Wenn städtische Akteure besser zusammenarbeiten, können Städte nicht nur ihre Infrastruktur optimieren, sondern auch den Tourismus effizienter und nachhaltiger gestalten. Unsere App bietet genau diese Lösung, indem sie verschiedene digitale Elemente miteinander verknüpft und eine benutzerfreundliche Oberfläche für alle Beteiligten bietet.`
        },
        {
          title: "Die Bedeutung der Integration von Tourismus und urbaner Infrastruktur – Wie Städte den Tourismus verbessern können",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `Der Erfolg einer Stadt im Bereich Tourismus hängt zunehmend von der Integration ihrer digitalen und physischen Infrastruktur ab. Während Touristen die Stadt erleben, sollten alle digitalen und realen Elemente miteinander verbunden sein. <br><br>
                    Von der Buchung einer Unterkunft bis hin zum Besuch einer Sehenswürdigkeit – jeder Schritt kann durch digitale Lösungen optimiert werden. Wenn beispielsweise ein Tourist eine Sehenswürdigkeit in einer Smart City besucht, könnte eine App ihn über den besten Weg dorthin führen, ihm personalisierte Empfehlungen für Restaurants in der Nähe geben und ihm Echtzeit-Updates zu Veranstaltungen und öffentlichen Verkehrsmitteln bieten.<br><br>
                    Die Herausforderung liegt darin, dass viele Städte diese digitalen Elemente noch nicht vollständig integriert haben. Doch die Chancen sind enorm: Wenn Städte es schaffen, ihre digitale Infrastruktur so zu gestalten, dass sie den Tourismus direkt unterstützt, können sie das Erlebnis für Touristen erheblich verbessern.<br><br>
                    Unsere App ist ein Beispiel für die Zukunft des digitalen Tourismus. Sie bietet eine benutzerfreundliche Plattform, die alle relevanten Informationen vereint und die nahtlose Integration von städtischer Infrastruktur und Tourismusinhalten ermöglicht.`},
        {
          title: "Nachhaltigkeit und Digitalisierung im Tourismus – Wie Städte umweltfreundlicher werden könnenn",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `Nachhaltigkeit ist eines der großen Themen im modernen Tourismus. Touristen suchen immer häufiger nach umweltfreundlichen Optionen, sei es bei der Wahl ihrer Unterkunft oder der Fortbewegung in der Stadt. Doch auch Städte können durch Digitalisierung einen wichtigen Beitrag zu mehr Nachhaltigkeit leisten.<br><br>
                    Digitale Lösungen ermöglichen eine effizientere Nutzung von Ressourcen. Intelligente Verkehrssysteme helfen dabei, den Verkehr zu optimieren und Staus zu vermeiden, was wiederum den CO2-Ausstoß reduziert. Digitale Plattformen können Touristen auf nachhaltige Angebote hinweisen – wie etwa umweltfreundliche Hotels oder Fahrradverleihstationen – und so zu einem bewussteren Reisen anregen.<br><br>
                    Zudem können Städte durch die Erhebung und Analyse von Daten besser verstehen, wie sich der Tourismus auf ihre Umwelt auswirkt und wie sie ihre Ressourcen nachhaltig einsetzen können. So wird der Tourismus nicht nur effizienter, sondern auch umweltfreundlicher.<br><br>
                    Unsere App setzt bereits heute auf nachhaltige digitale Lösungen, indem sie Touristen umweltfreundliche Optionen und nachhaltige Aktivitäten nahelegt, um den ökologischen Fußabdruck zu verringern.`},
        {
          title: "Digitalisierung als Schlüssel für den erfolgreichen Tourismus der Zukunft",
          subtitle: '16.12.2023 - 4 min zu lesen',
          content: `Die Digitalisierung im Tourismus eröffnet nicht nur neue Geschäftsmöglichkeiten für Unternehmen, sondern sorgt auch dafür, dass Städte und ihre Besucher besser miteinander vernetzt sind. Von der personalisierten Reiseplanung bis hin zur Integration von Smart City-Technologien – digitale Lösungen haben das Potenzial, den Tourismus effizienter, nachhaltiger und benutzerfreundlicher zu gestalten.<br><br>
                    Unsere App bietet eine Lösung, die es Städten und Touristen gleichermaßen ermöglicht, das Beste aus der digitalen Revolution im Tourismussektor herauszuholen.`}
      ]
    };
  }
};
</script>

<style>
.container {
  max-width: 1000px;
  margin: auto;
  margin-top: 100px
}
</style>
