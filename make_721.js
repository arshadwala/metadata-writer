import { readFileSync, writeFileSync } from "node:fs";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const collectionMetadata = [];

for (let index = 1; index <= 10_000; index++) {
  const collectionItem = {
    image:
      "ipfs://nullbafkreibayeissbxnavaksgavudjbpobyjhkgai34slxd4bmbrajfsqaqie",
    animation_url:
      "ipfs://bafkreibayeissbxnavaksgavudjbpobyjhkgai34slxd4bmbrajfsqaqie",
    description: "Description",
    external_url: "https://external.url/",
    name: `NFT #${index}`,
    // attributes: [
    //   {
    //     trait_type: "Hello",
    //     value: "World",
    //   },
    // ],
  };

  collectionMetadata.push(collectionItem);
}

let counter = 0;

collectionMetadata.forEach((nft) => {
  counter++;
  nft = JSON.stringify(nft);
  writeFileSync(`./metadata/${counter}`, nft);
});
