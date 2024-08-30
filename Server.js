const app = require("./app");

const PORT = process.env.SERVER_PORT || 8000;

app.get('/test',(req,res)=>{
  res.status(200).send({
    message:'api is running on port!'
  })
  // console.log('api is running on port!');
})
app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});
