const products = [
  // Motivational Posters
  {
    id: 'mot1',
    title: 'Motivational QUOTES | CONCEPT MOTIVATION #01 | POSTER',
    image: 'product/mot/mot1.png',
    category: 'motivational',
    rating: 4.9,
    reviews: 1000,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },
  {
    id: 'mot2',
    title: 'Motivational QUOTES | CONCEPT MOTIVATION #02 | POSTER',
    image: 'product/mot/mot2.png',
    category: 'motivational',
    rating: 4.8,
    reviews: 850,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },
  {
    id: 'mot3',
    title: 'Motivational QUOTES | CONCEPT MOTIVATION #03 | POSTER',
    image: 'product/mot/mot3.png',
    category: 'motivational',
    rating: 4.9,
    reviews: 920,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },

  // Tamil Quote Posters
  {
    id: 'tam1',
    title: 'TAMIL QUOTES | CONCEPT TAMIL #01 | POSTER',
    image: 'product/tam/tam1.png',
    category: 'tamilquote',
    rating: 4.8,
    reviews: 780,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },
  {
    id: 'tam2',
    title: 'TAMIL QUOTES | CONCEPT TAMIL #02 | POSTER',
    image: 'product/tam/tam2.png',
    category: 'tamilquote',
    rating: 4.7,
    reviews: 650,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },
  {
    id: 'tam3',
    title: 'TAMIL QUOTES | CONCEPT TAMIL #03 | POSTER',
    image: 'product/tam/tam3.png',
    category: 'tamilquote',
    rating: 4.9,
    reviews: 890,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },

  // Cinema Posters
  {
    id: 'cin1',
    title: 'CINEMA POSTERS | CONCEPT CINEMA #01 | POSTER',
    image: 'product/cin/cin1.png',
    category: 'cinema',
    rating: 4.8,
    reviews: 720,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },
  {
    id: 'cin2',
    title: 'CINEMA POSTERS | CONCEPT CINEMA #02 | POSTER',
    image: 'product/cin/cin2.png',
    category: 'cinema',
    rating: 4.7,
    reviews: 680,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },
  {
    id: 'cin3',
    title: 'CINEMA POSTERS | CONCEPT CINEMA #03 | POSTER',
    image: 'product/cin/cin3.png',
    category: 'cinema',
    rating: 4.9,
    reviews: 950,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },

  // Custom Name Posters
  {
    id: 'cus1',
    title: 'CUSTOM NAME ART | CONCEPT CUSTOM #01 | POSTER',
    image: 'product/cus/cus1.png',
    category: 'customname',
    rating: 4.8,
    reviews: 600,
    originalPrice: 249,
    salePrice: 149,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      'A3': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 },
      '13x19"': { 'No Frame': 249, 'Black Frame': 299, 'Wood Frame': 349 }
    }
  },
  {
    id: 'cus2',
    title: 'CUSTOM NAME ART | CONCEPT CUSTOM #02 | POSTER',
    image: 'product/cus/cus2.jpeg',
    category: 'customname',
    rating: 4.7,
    reviews: 550,
    originalPrice: 249,
    salePrice: 149,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      'A3': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 },
      '13x19"': { 'No Frame': 249, 'Black Frame': 299, 'Wood Frame': 349 }
    }
  },
  {
    id: 'cus3',
    title: 'CUSTOM NAME ART | CONCEPT CUSTOM #03 | POSTER',
    image: 'product/cus/cus3.png',
    category: 'customname',
    rating: 4.9,
    reviews: 700,
    originalPrice: 249,
    salePrice: 149,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      'A3': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 },
      '13x19"': { 'No Frame': 249, 'Black Frame': 299, 'Wood Frame': 349 }
    }
  },

  // Startup Posters
  {
    id: 'st1',
    title: 'STARTUP POSTERS | CONCEPT STARTUP #01 | POSTER',
    image: 'product/st/sta1.png',
    category: 'startup',
    rating: 4.6,
    reviews: 480,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },
  {
    id: 'st2',
    title: 'STARTUP POSTERS | CONCEPT STARTUP #02 | POSTER',
    image: 'product/st/sta2.png',
    category: 'startup',
    rating: 4.7,
    reviews: 520,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },
  {
    id: 'st3',
    title: 'STARTUP POSTERS | CONCEPT STARTUP #03 | POSTER',
    image: 'product/st/sta3.png',
    category: 'startup',
    rating: 4.8,
    reviews: 610,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },

  // Bike Posters
  {
    id: 'bik1',
    title: 'BIKE POSTERS | CONCEPT BIKE #01 | POSTER',
    image: 'product/bik/bik1.png',
    category: 'bike',
    rating: 4.7,
    reviews: 580,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },
  {
    id: 'bik2',
    title: 'BIKE POSTERS | CONCEPT BIKE #02 | POSTER',
    image: 'product/bik/bik2.png',
    category: 'bike',
    rating: 4.8,
    reviews: 640,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },
  {
    id: 'bik3',
    title: 'BIKE POSTERS | CONCEPT BIKE #03 | POSTER',
    image: 'product/bik/bik3.png',
    category: 'bike',
    rating: 4.9,
    reviews: 720,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },

  // Car Posters
  {
    id: 'car1',
    title: 'CAR POSTERS | CONCEPT CAR #01 | POSTER',
    image: 'product/car/car1.png',
    category: 'car',
    rating: 4.8,
    reviews: 690,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },
  {
    id: 'car2',
    title: 'CAR POSTERS | CONCEPT CAR #02 | POSTER',
    image: 'product/car/car2.png',
    category: 'car',
    rating: 4.7,
    reviews: 560,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },
  {
    id: 'car3',
    title: 'CAR POSTERS | CONCEPT CAR #03 | POSTER',
    image: 'product/car/car3.png',
    category: 'car',
    rating: 4.9,
    reviews: 780,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },

  // Music Posters
  {
    id: 'mus1',
    title: 'MUSIC POSTERS | CONCEPT MUSIC #01 | POSTER',
    image: 'product/mus/mus1.png',
    category: 'mus',
    rating: 4.6,
    reviews: 450,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },
  {
    id: 'mus2',
    title: 'MUSIC POSTERS | CONCEPT MUSIC #02 | POSTER',
    image: 'product/mus/mus2.png',
    category: 'mus',
    rating: 4.7,
    reviews: 510,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  },
  {
    id: 'mus3',
    title: 'MUSIC POSTERS | CONCEPT MUSIC #03 | POSTER',
    image: 'product/mus/mus3.png',
    category: 'mus',
    rating: 4.8,
    reviews: 590,
    originalPrice: 199,
    salePrice: 99,
    variants: {
      sizes: ['A4', 'A3', '13x19"'],
      frames: ['No Frame', 'Black Frame', 'Wood Frame'],
      finishes: ['Matte', 'Glossy']
    },
    prices: {
      'A4': { 'No Frame': 99, 'Black Frame': 149, 'Wood Frame': 199 },
      'A3': { 'No Frame': 149, 'Black Frame': 199, 'Wood Frame': 249 },
      '13x19"': { 'No Frame': 199, 'Black Frame': 249, 'Wood Frame': 299 }
    }
  }
];

// Helper functions
function getProductById(id) {
  return products.find(product => product.id === id);
}

function getProductsByCategory(category) {
  return products.filter(product => product.category === category);
}

function getAllCategories() {
  return [...new Set(products.map(product => product.category))];
}
