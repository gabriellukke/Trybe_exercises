db.superheroes.count(
  { "aspects.hairColor": { $exists: true } }
);
