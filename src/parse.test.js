import { parse } from "./parse";
import { createPair } from "./createPair";

test("parsing people.csv should return a list of people", async () => {
  const expected = [
    {
      name: "Chris",
      email: "chris@google.com"
    },
    {
      name: "Alex",
      email: "alex@google.com"
    },
    {
      name: "Milo",
      email: "milo@google.com"
    }
  ]

  parse("./src/people.csv").then(res => {
    expect(res).toEqual(expected);
  });
});

test("pairs are valid", async () => {
  const people = await parse("./src/people.csv");
  const pairs = createPair(people);

  pairs.forEach((pair) => {
    expect(pair[0] !== pair[1]).toBeTruthy();
  })
});