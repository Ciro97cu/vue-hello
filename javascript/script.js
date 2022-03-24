/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const app = new Vue(
    {
        el: "#app",
        data: {
            message: "Hello Vue",
            source: "https://picsum.photos/300/300",
            classe: "text-center",
        },
    }
);