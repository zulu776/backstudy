const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

// app.get('/categories/:categoryId/products/:productoId', (req, res) => {
//   const { categoryId, productoId } = req.params;

//   res.json({
//     categoryId,
//     productoId,
//   });
// });

app.listen(port, () => {
  console.log('mi port' + port);
});
