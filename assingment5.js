

const picnic = [
    
    {
        id        : 1,
        name      : 'Azam',
        age       : 18,
        location  : 'Dhaka',
        amountjoma: 1000,
    },
    {
        id        : 2,
        name      : 'Jannat',
        age       : 18,
        location  : 'Dhaka',
        amountjoma: 1000,
    },
    {
        id        : 3,
        name      : 'Arif',
        age       : 18,
        location  : 'Dhaka',
        amountjoma: 1000,
    },
    {
        id        : 4,
        name      : 'Sadia',
        age       : 18,
        location  : 'Dhaka',
        amountjoma: 1000,
    },
    {
        id        : 5,
        name      : 'Mijan',
        age       : 18,
        location  : 'Dhaka',
        amountjoma: 1000,
    },
    {
        id        : 6,
        name      : 'Omar',
        age       : 18,
        location  : 'Dhaka',
        amountjoma: 1000,
    },
    {
        id        : 7,
        name      : 'Lamia',
        age       : 18,
        location  : 'Dhaka',
        amountjoma: 1000,
    },
    {
        id        : 8,
        name      : 'Sadiq',
        age       : 18,
        location  : 'Dhaka',
        amountjoma: 1000,
    },
    {
        id        : 9,
        name      : 'lucy',
        age       : 18,
        location  : 'Dhaka',
        amountjoma: 1000,
    },
    {
        id        : 10,
        name      : 'Faruk',
        age       : 18,
        location  : 'Dhaka',
        amountjoma: 1000,
    },
    {
        id        : 11,
        name      : 'Feyeda',
        age       : 18,
        location  : 'Dhaka',
        amountjoma: 1000,
    }
];

let total = 0;

picnic.map(data => {
       
    console.log(`
          Picnic
    ID          : ${ data.id }
    Name        : ${ data.name }
    Age         : ${ data.age }
    Location    : ${ data.location }
    Amountjoomoa: ${ data.amountjoma }
    -----------------------------------------

    `);
    
    total = total + data.amountjoma;

});

console.log(` Total Aount Joma ${total}`);