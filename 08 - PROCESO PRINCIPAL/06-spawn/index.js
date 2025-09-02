import { spawn } from "child_process";

// const child = spawn('ls', ['-lh']);
const child = spawn("find", ["/"]);

child.stdout.on("data", (data) => {
  console.log(`${data}`);
});

child.stderr.on("data", (data) => {
  console.error("Error:", data);
});

child.on("error", (error) => {
  console.error("Error al iniciar el proceso:", error);
});

child.on("close", (code) => {
  console.log("Proceso terminado con código:", code);
});
