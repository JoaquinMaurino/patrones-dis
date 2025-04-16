function opreacion() {
  setInterval(() => {
    console.log("Realizando operacion");
  }, 1000);
}

process.on("uncaughtException", (err) => {
  console.error("Error no capturado", err);
  process.exit(1);
});

process.on("unhandledException", (reason) => {
  console.error("Rechazo no capturado", reason);
  process.exit(1);
});

const signals = ["SIGINT", "SIGTERM", "SIGUSR1", "SIGUSR2"];

signals.forEach((signal) => {
  process.on(signal, () => {
    console.log(`Recibido ${signal}`);
    process.exit(0);
  });
});

opreacion();
