db.superheroes.count(
  { "aspects.height": { $not: { $gt: 180 } } }
);
