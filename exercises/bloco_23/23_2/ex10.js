db.superheroes.count(
  { "aspects.hairColor": { $in: ["black", "No Hair"] } }
);
