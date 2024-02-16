class Car {
  constructor(marca, modello, targa) {
    this.marca = marca;
    this.modello = modello;
    this.targa = targa;
  }

  // Metodo per clonare la macchina
  clona() {
    return new Car(this.marca, this.modello, this.targa);
  }
}

// Creazione della prima macchina
const primaMacchina = new Car("Toyota", "Corolla", "ABC123");

// Clonazione della prima macchina e modifica della targa
const secondaMacchina = primaMacchina.clona();
secondaMacchina.targa = "DEF456";

// Creazione e modifica di altre macchine
const terzaMacchina = primaMacchina.clona();
terzaMacchina.targa = "GHI789";

const quartaMacchina = primaMacchina.clona();
quartaMacchina.targa = "JKL012";

const quintaMacchina = primaMacchina.clona();
quintaMacchina.targa = "MNO345";

// Stampa delle informazioni sulle macchine
console.log("Prima macchina:", primaMacchina);
console.log("Seconda macchina:", secondaMacchina);
console.log("Terza macchina:", terzaMacchina);
console.log("Quarta macchina:", quartaMacchina);
console.log("Quinta macchina:", quintaMacchina);
