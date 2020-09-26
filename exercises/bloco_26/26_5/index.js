const express = require('express');

const app = express();

const users = [
  {
    id: 2,
    user: 'antonio',
    comments: ["Hoje o dia está maneiro!", "Agora não está muito"]
  },
  {
    id: 3,
    user: "rodrigo",
    comments: ["To aqui também", "Agora não tô"]  
  }
];

app.get('/user/:name', (req, res, next) => {
  const { name } = req.params;

  const user = users.find(item => item.user === name);

  if(user) {
    res.send(user.comments);
  } else {
    res.status(204).json({message: "user not found..."})
  }
  
});

app.use("*", (req, res) => {
  res.status(404).json({message: "Rota não existe"});
});

app.listen(3000);
