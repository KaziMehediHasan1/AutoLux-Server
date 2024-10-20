const app = require("../EntryPoint/app");
require("dotenv").config();
const PORT = process.env.SERVER_PORT||500;

app.get("/", (req, res) => {
  res.status(200).send({
    message: "api is running on port!",
  });
});

app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});
