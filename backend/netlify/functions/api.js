// netlify/functions/api.js
import serverless from "serverless-http";
import app from "../../app.js";  // go up 2 levels to reach app.js

export const handler = serverless(app);
