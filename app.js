// class Transaction {
//         constructor(fromClient, toClient, amount, comission) {
//             this.fromClient = fromClient;
//             this.toClient = toClient;
//             this.amount = amount;
//             this.comission = comission;
//         }
//     }
//     let transaction = new Transaction("Azer", "Ali", 100, 5);
//     console.log("From Client:", transaction.fromClient);
//     console.log("To Client:", transaction.toClient);
//     console.log("Amount:", transaction.amount);
//     console.log("Comission:", transaction.comission); 
class Transaction {
    constructor(fromClient, toClient, amount){
        this.fromClient = fromClient;
        this.toClient = toClient;
        this.amount = amount;
        this.comission = this.calculateComission()
        // this.comission = Transaction.calculateComission(amount);
        // Bunu calculateComissiona nece salmaq olar ?
    }
    calculateComission(){
        return this.amount * 0.05;
    }
 }
 let transaction = new Transaction ("Azer", "Ali", 100);
// transaction.comission = transaction.calculateComission();
// Belede yazmaq olardi
 console.log("From Client:", transaction.fromClient);
 console.log("To Client:", transaction.toClient);
 console.log("Amount:", transaction.amount);
 console.log("Comission:", transaction.comission);
 console.log("---------------------------");
 console.log("---------------------------");
 let transaction2 = new Transaction("Hesen", "Kamal", 500);
 let transaction3 = new Transaction("Nigar", "Pervin", 700);
 console.log("\nTransaction 2:");
console.log("From Client:", transaction2.fromClient);
console.log("To Client:", transaction2.toClient);
console.log("Amount:", transaction2.amount);
console.log("Commission:", transaction2.commission);
console.log("\nTransaction 3:");
console.log("From Client:", transaction3.fromClient);
console.log("To Client:", transaction3.toClient);
console.log("Amount:", transaction3.amount);
console.log("Commission:", transaction3.commission);
console.log("NIYE COMISSION UNDEFINED VERIR BULARDA YUXARDA VERMIR ?");