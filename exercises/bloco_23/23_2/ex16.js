db.superheroes.count(
  { race: { $exists: false } }
);
