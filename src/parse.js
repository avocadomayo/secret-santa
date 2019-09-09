import { readFile } from 'fs';

export const parse = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);

      let people = [];
      const rawData = data.split("\n");
      rawData.forEach((ln) => {
        const line = ln.split(',');
        people.push({
          name: line[0],
          email: line[1]
        });
      });
      resolve(people);
    });
  });
};