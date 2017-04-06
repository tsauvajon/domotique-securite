const pushButtons = [
  {
    id: Math.floor(Math.random() * 8999) + 1000,
    idUser: 1,
    macAddress: '',
    name: 'Lessive',
    products: [
      {
        name: 'X Tra lessive liquide 1.89L',
        price: 10.44,
        url: 'https://www.amazon.fr/Tra-Lessive-Liquide-Marseille-Lavages/dp/B00WQRRRUG',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71P2R5xiiUL._SL1500_.jpg',
      },
      {
        name: 'Décolor Stop Etui de 35',
        price: 5.71,
        url: 'https://www.amazon.fr/Eau-Ecarlate-Décolor-Stop-Lingettes/dp/B0091OVISY',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81SnnG2DT4L._SL1500_.jpg',
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 8999) + 1000,
    name: 'Cuisine',
    products: [
      {
        name: 'Set de 3 éponges Spontex',
        price: 1.60,
        url: 'https://www.amazon.fr/Spontex-Set-Eponges-Combinés-Grattantes/dp/B01KVK58SW',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71RO704nPiL._SL1500_.jpg',
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 8999) + 1000,
    name: 'Toilettes',
    products: [
      {
        name: 'Scottex papier toilette 16 rouleaux',
        price: 4.49,
        url: 'https://www.amazon.fr/Scottex-Papier-Toilette-16-Rouleaux/dp/B01MY82RQF',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81hBOGrCsGL._SL1500_.jpg',
      },
    ],
  },
];

export default pushButtons;
