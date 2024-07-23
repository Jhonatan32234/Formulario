import { Node } from "./Node.js";

export class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    push(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
      //console.log("asfa")
    }
    print() {
      let current = this.head;
      while (current) {
          console.log(current.data);
          current = current.next;
      }
  }

   /*print() {
    let current = this.head;
    let result = document.getElementById("Results");
    result.innerText="";
    while (current) {
      let nodeData = document.createElement("p");
      nodeData.innerText = `Nombre: ${current.nombre}, Cantidad: ${current.cantidad}, Precio: ${current.precio}, Tipo: ${current.tipo}`;
      result.appendChild(nodeData);
      current = current.next;
    }
  }*/
  
  }