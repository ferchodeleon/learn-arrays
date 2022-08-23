const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
];

console.log('original' , orders);

const newOrders = orders.map(items => items.total);

console.log('Total' , newOrders);

// const newOrders2 = orders.map(items => {
//     items.tax = .19;
//     return items;
// });

const newOrders2 = orders.map(items => {
    return {
        ...items,
        tax: .19
    };
});

console.log('Tax' , newOrders2);
console.log('original' , orders);