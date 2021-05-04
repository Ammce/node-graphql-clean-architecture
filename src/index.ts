import express from "express";

import registerMiddleware from "./middleware";

const startServer = async () => {
  const app = express();
  registerMiddleware(app);
  app.listen(3000, () => {
    console.log(`Server is up and running on port 3000`);
  });
};

startServer();
