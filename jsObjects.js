let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printNames(group) {
  for ( var i = 0 ; i < group.length ; i++ ) {
    console.log(group[i].name);
  }
}

printNames(students);

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function printMoreNames(office) {
   for (var title in office) {
     console.log(title);
     for (var i = 0; i < office[title].length; i++) {
       console.log(office[title][i].first_name + " " + office[title][i].last_name);
     }
   }
 }

 printMoreNames(users);
