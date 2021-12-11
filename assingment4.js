

const family = [
    
    {
      id       : 1,
      name     : 'Azam',
      phone    : '01324516475',
      location : 'Dhaka'

    },
    {
      id       : 2,
      name     : 'Sawon',
      phone    : '01324516475',
      location : 'Dhaka'

    },
    {
      id       : 3,
      name     : 'Tareq',
      phone    : '01324516475',
      location : 'Dhaka'

    },
    {
      id       : 4,
      name     : 'Sadiq',
      phone    : '01324516475',
      location : 'Dhaka'

    },
    {
      id       : 5,
      name     : 'Mijan',
      phone    : '01750910188',
      location : 'Dhaka',

    },
];

family.map(data => {
    
  console.log(`
     
    
     Name      : ${data.name}
     ID        : ${data.id}
     Phone     : ${data.phone}
     Location  : ${data.location}
     =================================
  `);


});