db.superheroes.count(
  { "aspects.hairColor": { $nin: ["black", "No Hair"] } }
);
