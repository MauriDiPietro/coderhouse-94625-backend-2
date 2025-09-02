import { parentPort } from "worker_threads";

let suma = 0;
for (let i = 0; i < 1e10; i++) {
  suma += i;
}


parentPort.postMessage(suma);