


const club = [
   {
       
       name    : 'Md Kayda Azam',
       age     : 25,
       location: 'Dhaka',
       gender  : 'Male'
   },
   {
       
       name    : 'Abida Jahan',
       age     : 17,
       location: 'Rangpur',
       gender  : 'female'
   },
   {
       
       name    : 'Arman',
       age     : 45,
       location: 'Dinajpur',
       gender  : 'Male'
   },
   {
       
       name    : 'Sadia',
       age     : 26,
       location: 'Dhaka',
       gender  : 'female'
   },
   {
       
       name    : 'Salman',
       age     : 10,
       location: 'Dhaka',
       gender  : 'Male'
   },
   {
       
       name    : 'Azam',
       age     : 25,
       location: 'Dhaka',
       gender  : 'Male'
   },
   {
       
       name    : 'Feyeda',
       age     : 17,
       location: 'Rangpur',
       gender  : 'female'
   },
   {
       
       name    : 'Raju',
       age     : 45,
       location: 'Dinajpur',
       gender  : 'Male'
   },
   {
       
       name    : 'Sathi',
       age     : 26,
       location: 'Dhaka',
       gender  : 'female'
   },
   {
       
       name    : 'Komol',
       age     : 10,
       location: 'Dhaka',
       gender  : 'Male'
   },
   {
       
       name    : 'Mijan',
       age     : 25,
       location: 'Dhaka',
       gender  : 'Male'
   },
   {
       
       name    : 'Mun',
       age     : 17,
       location: 'Rangpur',
       gender  : 'female'
   },
   {
       
       name    : 'Jamal',
       age     : 45,
       location: 'Dinajpur',
       gender  : 'Male'
   },
   {
       
       name    : 'Rupa',
       age     : 26,
       location: 'Dhaka',
       gender  : 'female'
   },
   {
       
       name    : 'Akas',
       age     : 10,
       location: 'Dhaka',
       gender  : 'Male'
   },
   {
       
       name    : 'Alamin',
       age     : 25,
       location: 'Dhaka',
       gender  : 'Male'
   },
   {
       
       name    : 'Jannat',
       age     : 17,
       location: 'Rangpur',
       gender  : 'female'
   },
   {
       
       name    : 'Omor',
       age     : 45,
       location: 'Dinajpur',
       gender  : 'Male'
   },
   {
       
       name    : 'Sonia',
       age     : 26,
       location: 'Dhaka',
       gender  : 'female'
   },
   {
       
       name    : 'Ashik',
       age     : 10,
       location: 'Dhaka',
       gender  : 'Male'
   },
   {
       
       name    : 'Bablu',
       age     : 25,
       location: 'Dhaka',
       gender  : 'Male'
   },
   {
       
       name    : 'Sharmin',
       age     : 17,
       location: 'Rangpur',
       gender  : 'female'
   },
   {
       
       name    : 'Zulfiker',
       age     : 45,
       location: 'Dinajpur',
       gender  : 'Male'
   },
   {
       
       name    : 'Shawon',
       age     : 26,
       location: 'Dhaka',
       gender  : 'female'
   },
   {
       
       name    : 'Ginnah',
       age     : 10,
       location: 'Dhaka',
       gender  : 'Male'
   },


];



club.forEach(azam => {
    
    let jannat =azam.age;

   function devs (){
      
   
        if (jannat >= 0 && jannat <= 18) {
            return `You are age not support for this club.`
        } else if (jannat >= 18 && jannat <= 40) {
            return `welcome to this club.`
        } else if (jannat >= 40 && jannat <= 100) {
            return `Welcome to our club, you need our club.`
        }
   }
   console.log(`
   
   Name     : ${azam.name}
   Age      : ${azam.age}
   Location : ${azam.location}
   Gender   : ${azam.gender}
   Massage  : ${devs()}

  `)
   
});


   
  
 






















// club.map(function (data){
   
 
//     let age = club[0][2];

    // function agecal(age) {
    //     if (age >= 1 && age <= 18) {
    //         return `sorry  apnar akhon o boys hoy ni .`
    //     } else if (age >= 18 && age <= 40) {
    //         return `Hi  Congratulation .`
    //     } else if (age >= 40 && age <= 100) {
    //         return `Welcome apner a to dorkar.`
    //     }
    // }


//     console.log(`
   
//      ID       : ${data.id}
//      Name     : ${data.name}
//      Age      : ${data.age}
//      Location : ${data.location}
//      Massage  : ${agecal(age)}

//     `);

// });