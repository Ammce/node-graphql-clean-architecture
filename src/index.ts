import express from "express";
import http from "http";

const app = express();

const startServer = async (): Promise<string> => {
  const server = http.createServer(app);
  await server.listen(3000);
  return `Started on port ${3000}`;
};

startServer()
  .then((res) => {
    console.info("\x1b[36m", res);
  })
  .catch((err) => {
    // logger.captureException(err);
    console.error(err);
  });

export default app;
