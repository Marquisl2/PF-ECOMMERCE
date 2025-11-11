const server = require('./src/app.js');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
