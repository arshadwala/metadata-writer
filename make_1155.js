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

const ipfsImageCid =
  "bafybeidiktbk55edzeaywmx7yjvmhbxmjc7rlffuher27iij4643co6vp4";
const tokens = [
  { name: "University of Arizona", description: "" }, // tokenId = 1
  { name: "Arizona State University", description: "" }, // tokenId = 2
  { name: "University of California, Berkeley", description: "" }, // tokenId = 3
  { name: "University of California, Los Angeles", description: "" }, // tokenId = 4
  { name: "University of Colorado, Boulder", description: "" }, // tokenId = 5
  { name: "University of Oregon", description: "" }, // tokenId = 6
  { name: "Oregon State University", description: "" }, // tokenId = 7
  { name: "University of Southern, California", description: "" }, // tokenId = 8
  { name: "Stanford University", description: "" }, // tokenId = 9
  { name: "University of Utah", description: "" }, // tokenId = 10
  { name: "University of Washington", description: "" }, // tokenId = 11
  { name: "Washington State University", description: "" }, // tokenId = 12
];
const externalUrl = "https://open3.com/";

const collectionMetadata = [];

for (let index = 0; index < tokens.length; index++) {
  const tokenId = index + 1;

  const collectionItem = {
    image: `ipfs://${ipfsImageCid}/${tokenId}.jpeg`,
    // animation_url: `ipfs://${ipfsImageCid}/${index}`,
    // description: tokens[index].description,
    description: `${tokens[index].name} Status Token`,
    external_url: externalUrl,
    name: tokens[index].name,
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
