// Estraiamo la funzione createApp dall'oggetto Vue, che ci permette di creare una nuova istanza dell'app Vue.
const { createApp } = Vue;

// Creiamo una nuova applicazione Vue con createApp.
createApp({
  // La funzione data ritorna un oggetto che contiene tutte le proprietà reattive della nostra app.
  // Questi dati possono essere usati direttamente nel template HTML.
  data() {
    return {
      // La proprietà 'welcome' contiene il testo "Hello Vue!" che verrà visualizzato in un tag <h1>.
      welcome: "Hello Vue!",

      // La proprietà 'imageUrl' contiene l'URL di un'immagine (in questo caso il logo di Vue.js).
      // Questa sarà utilizzata come fonte per un tag <img> nel template.
      imageUrl: "https://vuejs.org/images/logo.png",

      // La proprietà 'message' contiene un altro messaggio, "Nice to meet you!", che verrà visualizzato in un tag <span>.
      message: "Nice to meet you!",
    };
  },
  // Qui puoi definire metodi che eseguono azioni specifiche, come gestire eventi o manipolare dati.
  // Anche se attualmente non ci sono metodi definiti, questo oggetto 'methods' è il posto giusto per aggiungere le funzioni.
  methods: {},
  // Montiamo l'app Vue sull'elemento HTML con l'id "app".
  // Questo collega la nostra app Vue al DOM, permettendo a Vue di gestire tutto il contenuto all'interno di quell'elemento.
}).mount("#app");
