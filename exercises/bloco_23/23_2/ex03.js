db.superheroes.count(
  {
    "aspects.height": { $lt: 180 }
  }
);
