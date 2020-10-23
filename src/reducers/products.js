var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        img : 'https://zshop.vn/images/thumbnails/500/500/detailed/69/IP7P128RG_C_.jpg?t=1493293855',
        description: 'sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating : 4
    },

    {
        id: 2,
        name: 'Samsung Galaxy S7',
        img : 'https://cdn.tgdd.vn/Files/2016/02/15/787399/samsung-galaxy-s7-edge-in-black-silver-and-gold-3.jpg',
        description: 'sản phẩm do sumsang sản xuất',
        price: 400,
        inventory: 15,
        rating : 3
    },
    {
        id: 3,
        name: 'Oppo F1s',
        img : 'https://cdn.tgdd.vn/Products/Images/42/91751/oppo-f1s-2017-daidiencopy-300x300.jpg',
        description: 'sản phẩm do Oppo sản xuất',
        price: 450,
        inventory: 20,
        rating : 5   
    }
];

const product = (state=initialState, action) => {
     switch(action.type){
         default: return [...state];
     }
};

export default product;