import amazon from 'amazon-product-api';

let searchProducts;
let products;
let productchoose;

const client = amazon.createClient({
  awsId: 'AKIAI7LNXV6L7HWJB3XA',
  awsSecret: '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',
  awsTag: 'domopush',
});

products(function* generator() {
  productchoose = client.itemSearch({ keywords: 'productSearchAutoComplete', searchIndex: 'All' });

  searchProducts = yield [productchoose];
  console.log(searchProducts);
})();
