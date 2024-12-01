<script lang="ts" setup>

</script>

<template>
    <div class="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-7xl sm:mx-auto">
            <div
                class="absolute inset-0 bg-gradient-to-r from-bot_salmon to-bot_pink shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="text-white relative px-4 py-10 bg-bot_light_blue shadow-lg sm:rounded-3xl sm:p-20">

                <div class="text-center pb-6">
                    <h1 class="text-3xl">Kontaktieren Sie uns!</h1>

                    <p class="text-gray-300">
                        Füllen Sie das Formular aus um uns eine Nachricht zu senden. Wir melden uns so schnell wie möglich zurück.
                    </p>
                </div>

                <form action="https://fabform.io/f/{form-id}" method="post">

                    <input
                        class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Name" name="name">

                    <input
                        class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email" placeholder="Email" name="email">

                    <input
                        class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Betreff" name="_subject">

                    <textarea
                        class="shadow mb-4 min-h-0 appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Ihre Nachricht..." name="message"
                        style="height: 121px;"></textarea>

                    <div class="flex justify-between">
                        <input
                            class="shadow bg-bot_dark_blue hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit" value="Senden ➤">
                        <input
                            class="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="reset" value="Löschen">
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>
