import amazon from 'amazon-product-api';


let searchProducts;
let products;
let pulpFiction;
let killBill;
let reservoirDogs;

const client = amazon.createClient({
  awsId: 'aws ID',
  awsSecret: 'aws Secret',
  awsTag: 'aws Tag',
});

products(function* generator() {
  pulpFiction = client.itemSearch({ keywords: 'Pulp fiction', searchIndex: 'DVD' });
  killBill = client.itemSearch({ keywords: 'Kill Bill', searchIndex: 'DVD' });
  reservoirDogs = client.itemSearch({ keywords: 'Reservoir Dogs', searchIndex: 'DVD' });

  searchProducts = yield [pulpFiction, killBill, reservoirDogs];
  console.log(searchProducts);
})();
