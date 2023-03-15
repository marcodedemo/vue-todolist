
// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)


const { createApp } = Vue

createApp({

  data() {

    return {

        todos: [
            {
                text: "Andare a fare la spesa",
                done: true,
            },
            {
                text: "Portare fuori il cane",
                done: true,
            },
            {
                text: "Fare l'esercizio di oggi",
                done: false,
            },
            {
                text: "Andare in palestra",
                done: false,
            },
            {
                text: "Stendere i panni",
                done: true,
            },
            {
                text: "Bere tanta acqua",
                done: false,
            },
            {
                text: "Pagare l'assicurazione della macchina",
                done: false,
            },
            {
                text: "Chiedere un prestito per pagare l'assicurazione della macchina",
                done: false,
            },

        ],

    }

  },

  methods: {

    removeTodo(todoIndex){
        
        this.todos.splice(todoIndex,1);
    },

  }

}).mount('#app')