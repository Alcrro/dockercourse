const server = require("node:http");

const PORT = 3555;


const createServer = server.createServer((req, res) => {
  res.writeHead(200);
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

createServer.listen(PORT,  () =>
  console.log(`server run on port: ${PORT}`)
);
