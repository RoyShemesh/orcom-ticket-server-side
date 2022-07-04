import { PORT } from "./utils/config.js";
import app from "./app.js";

app.listen(8080, () => {
  console.log(`Listening on port ${PORT}`);
});
