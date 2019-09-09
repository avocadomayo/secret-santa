export const createPair = (people) => {
  const pivot = Math.random() * (people.length - 1) + 1;
  let shifted = [];
  shifted.push(people.slice(pivot, people.length));
  shifted.push(people.slice(0, pivot));
  shifted = shifted.flatMap(x => (x));

  const pairs = shifted.map((person, index) => ([
    person, people[index]
  ]))
  return pairs;
}