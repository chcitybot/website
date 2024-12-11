<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-main py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-2xl font-bold mb-2 text-bot_pink">Für Städte/Destinationen</h2>
                <p class="my-4 text-lg text-gray-600"> Citybot bietet ein Cloud Admin Tool um individuelle Attraktionen, Touren, Events und weitere Spezialangebote unter einem Dach zu verwalten.</p>
                <ul class="space-y-3 list-disc">
                    <li class="flex">
                        <div>
                            <h3 class="text-lg font-semibold text-bot_light_blue">Volle Kontrolle über die Inhalte/Daten.</h3>
                            <p class="text-gray-600">Ihr behaltet die volle Kontrolle und Übersicht über eure Inhalte. Nur ihr entscheidet, welche Inhalte ihr wie präsentieren möchtet.</p>
                        </div>
                    </li>
                    <li class="flex">
                        <div>
                            <h3 class="text-lg font-semibold text-bot_light_blue">Datenanalyse</h3>
                            <p class="text-gray-600">Lernt von euren Besucherdaten und verbessert entsprechend eure Angebote.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <div>
                            <h3 class="text-lg font-semibold text-bot_light_blue">Kosteneffizient und flexibel. Kostenvorteil garantiert!</h3>
                            <p class="text-gray-600">Warum eine eigene Lösung entwickeln, wenn diese zu einem Bruchteil der Entwicklungs- und Unterhaltskosten flexibel lizenziert werden kann? Wir liefern die Technologie, ihr liefert die bestmöglichen Inhalte! Effiziente Arbeitsteilung vom Feinsten!</p>
                        </div>
                    </li>
                </ul>
                <div class="relative max-w-min group mt-8 mx-auto">
                    <div
                        class="absolute -inset-0.5 group-hover:-inset-1 group-hover:opacity-100 transition group-hover:duration-300 duration-1000 bg-gradient-to-r from-bot_salmon to-bot_pink rounded-lg blur opacity-75">
                    </div>
                    <button @click.prevent="scrollToSection('section3')"
                        class="bg-white text-bot_dark_blue px-6 py-3 rounded-lg font-semibold leading-none relative group-hover:text-bot_pink">Mehr Details
                        </button>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6 relative h-full flex flex-col justify-between">
                <div>
                    <h2 class="text-2xl font-bold text-bot_pink">Für Besucher</h2>
                <p class="my-4 text-lg text-gray-600">CityBot bietet eine mobile App um eure Stadt/Destination auf verschiedene Art und Weisen zu entdecken.</p>
                <ul class="space-y-3 ">
                    <li class="flex items-start">
                        <div>
                            <h3 class="text-lg font-semibold text-bot_light_blue">Komplett integriertes Besuchererlebnis</h3>
                            <p class="text-gray-600">Eine App für die ganze Reise. Von der Planung, Auswahl, Navigation bis hin zu detaillierten Informationen vor Ort, kein wildes Umherspringen zwischen verschiedenen Webseiten, Google Maps und weiteren Medien. 
                            </p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <div>
                            <h3 class="text-lg font-semibold text-bot_light_blue">Personalisiert</h3>
                            <p class="text-gray-600">Personalisierte Vorschläge basierend auf Nutzerpräferenzen und einer Reihe von verschiedenen Optionen. Natürlich KI unterstützt!
                            </p>
                        </div>
                    </li>
                    <li class="flex">
                        <div>
                            <h3 class="text-lg font-semibold text-bot_light_blue">Eine App, viele Städte/Destinationen</h3>
                            <p class="text-gray-600">Verschont eure Besucher davon nochmal eine weitere App zu installieren. Schliesst euch einem Netzwerk von Städten/Destinationen an und lasst euch von anderen Nutzern entdecken.</p>
                        </div>
                    </li>
                </ul>
                </div>
                <div class="relative max-w-min group mt-8 mx-auto">
                    <div
                        class="absolute -inset-0.5 group-hover:-inset-1 group-hover:opacity-100 transition group-hover:duration-300 duration-1000 bg-gradient-to-r from-bot_salmon to-bot_pink rounded-lg blur opacity-75">
                    </div>
                    <button @click.prevent="scrollToSection('section4')"
                        class="bg-white text-bot_dark_blue px-6 py-3 rounded-lg font-semibold leading-none relative group-hover:text-bot_pink">Mehr
                        Details</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const yOffset = -window.innerHeight / 2 + element.getBoundingClientRect().height / 4;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
}
</script>

<style lang="postcss" scoped></style>
