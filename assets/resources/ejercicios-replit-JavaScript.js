//1 Crear una función que regrese la última letra de un String

function findLastLetter(text) {
  return text[text.length - 1]
}

//2 Crear una función que regrese la última palabra de un String

function findLastWord(text) {
  return text.substring(text.lastIndexOf(' ') + 1, text.length)
}

//3 Crear una función que regrese la enesima palabra de un String

function findWord(text) {
  splitedText = text.split(' ')
  return splitedText['n']
}

//4 Crear una función que regrese la suma de elementos en un Array

function sumValues(array) {
  var sum = array.reduce((sum, act) => sum + act, 0)
  return sum
}

//5 Crear una función que regrese una propiedad de un Objeto

function get(object) {
  return object.property
}

//6 Crear una función que regrese una propiedad de cada objeto de un Array

function getProperties(array) {
  let properties = []
  array.forEach(function getProperty(object) {
    properties.push(object.name)
  })
  return properties
}

//7 Crear una función que elimine un objeto de un Array declarando una de sus propiedades

function deleteObject(object, property) {
  let array = []
  object.forEach(function getProperty (anObject) {
    array.push(anObject.property)
  })
  let deleteProperty = array.indexOf(property)
  object.splice(deleteProperty, 1)
  return object
}

//8 Crear una función combine objetos de dos Arrays distintos en uno solo

function mergeData(users, attendances) {
  let names = []
  users.forEach(function getNames(anUser) {
    names.push({name : anUser.name})
  })
  let emails = []
  users.forEach(function getEmails(anUser) {
    emails.push({email : anUser.email})
  })
  let attendanceCheck = []
  attendances.forEach(function getAttendances(anUser) {
    attendanceCheck.push({attendance : anUser.attendance})
  })
  
  let usersAttendances = []
  for (let i = 0; i < usuarios.length; i++) {
    usersAttendances.push({
    name : names[i].name,
    email : emails[i].email,
    attendance : attendanceCheck[i].attendance
  })}
  return usersAttendances
}

//9 Crear una función que ordene de menor a mayor un array de objetos

function orderObjects(array) {
  array.sort( (a, b) => {
    if (a.score == b.score) {
      return 0;
    }
    if (a.score < b.score) {
      return -1;
    }
    return 1;
  });
  return array
}

//10 Crear una función que reciba dos Arrays de Objetos y un String, el primero una lista de estudiantes
//   y el segundo indican a que pais pertenecen cada uno mediante un id, el String será el nombre del país,
//   al final la función devolverá el número de estudiantes que pertenecean a ese país.

function countStudents(students, countries, countryName) {
  let countrySearch = []
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].name == countryName) {
      countrySearch.push(countries[i].id)
    }
  }
  let studentNames = []
  for (let i = 0; i < students.length; i++) {
    if(students[i].country_id == countrySearch) {
      studentNames.push(students[i].name)
    }
  }
  return studentNames.length
}
//11 Crear una función que retorme la moda de un Array 

//Metodo 1
function findMostCommonAge(students) {
  let ages = []
  let cont1 = 0; let cont2 = 0
  let moda = []
  students.forEach(function getAges(studen) {
    ages.push(studen.age)
  })
  for (let i = 0; i < ages.length; i++) {
    for (let j = 0; j < ages.length; j++) {
      if(ages[i] == ages[j] && i !== j) {cont1++}
    }
    if (cont1 > cont2) {
      moda = ages[i]
      cont2 = cont1
    }
    cont1 = 0
  }
  return moda
}
//Metodo 2: Funciona con Objetos
function findMostCommonAge(students) {
  var studentsAges = []
  for(let i = 0; i < students.length; i++) {
    studentsAges.push(students[i].age)
  } studentsAges.sort()
  var ages = [...new Set(studentsAges)]
  var ageGroups = []
  var exampleForCompariton = []
  for(let i = 0; i < ages.length; i++) {
    ageGroups.push([ages[i]])
    exampleForCompariton.push([ages[i]])
  }
  for (let i = 0; i < studentsAges.length; i++) {
    for (let j = 0; j < exampleForCompariton.length; j++) {
      if(exampleForCompariton[j] == studentsAges[i]) {
        ageGroups[j].push(studentsAges[i])
      }
    }
  }
  ageGroups.sort( (a, b) => {
    if (a.length == b.length) {
      return 0;
    }
    if (a.length > b.length) {
      return -1;
    }
    return 1;
  });
  return ageGroups[0][0]
}

//12 Encontrar un usuario por el string de su nombre

function findUser(users, name) {
  for(i = 0; i < users.length; i++) {
    if(users[i].name == name) {
      const selectUser = users[i]
    }
  }
  return selectUser
}

//13 Crear una funcion que retorne solo los usuarios que posean una propiedad true

function getApplications(users) {
  var applications = []
  for(i = 0; i < users.length; i++) {
    if(Boolean(users[i].application) == true) {
      applications.push(users[i])
    }
  }
  return applications
}

//14 Crear una función que retorne la suma de todos los numeros pares que hayan entre dos números

function sumEvens(start, end) {
  var numbers = []
  for(i = start + 1; i < end; i++) {
    if(i % 2 == 0) {numbers.push(i)}
  }
  var suma = 0
  for(i = 0; i < numbers.length; i++) {
    suma += numbers[i]
  }
  return suma
}

//15 Crear una función que retorne todos los múltiplos de un número hasta un cierto límite

function getMultiples(number, limit) {
  var numbers = []
  for(i = number + 1; i < limit; i++) {
    if(i % number == 0) {numbers.push(i)}
  }
  return numbers
}

//16 Crear una función que retorne el total de veces que se repite una letra en un String

function countLetter(phrase, letter) {
  let letters = phrase.split('')
  let count1 = 0
  for (let i = 0; i < letters.length; i++) {
    if(letters[i] == letter && i !== letter) {
      count1++
    }
  }
  return count1
}

//17 Crear una función que retorne un Objeto que contenga un contador de cuantas veces se repite un item
//   en un Array de Objetos, y que tambien excluya de contar Objetos en ese Array que den falso en alguna de
//   las propiedades, y que si un contador está en 0 lo elimine.

function countApplicationsByChannel(students) {
  var applications = {}
  students.forEach(function getProperty(object) {
    applications[object.channel] = 0
  })
  for(i = 0; i < students.length; i++) {
    for(aChannel in applications) {
      if(Boolean(students[i].application) == true && aChannel == students[i].channel) {
        applications[aChannel]++
      }
    }
  }
  for(aChannel in applications) {
    if(applications[aChannel] == 0) {
      delete applications[aChannel]
    }
  }
  return applications
}

//18 Crear una función que retorne el número de cifras de un número

function countNumbers(number) {
  let splitedNumber = String(number).split('')
  return splitedNumber.length
}

//Extras (Estudiar para el Examen)

//1 Función que invierta el orden de un Texto

function reverseText (text) {
  let characters = text.split('')
  characters.sort((a, b) => {
    return -1;
  });
  return characters
}

//2 Sumar los números de 2 Arrays

function sumTwoArrays (array1, array2) {
  var total = array1.reduce((sum, act) => sum + act, 0) + array2.reduce((sum, act) => sum + act, 0)
  return total
}

//3 Encontrar la N cantidad de multipos de un número

function getNMultiples (number, totalMultiples) {
  var multiples = []
  for(i = 0; i < totalMultiples; i++) {
    multiples.push(i * number)
  }
  return multiples
}

//4 Encontrar la letra que más se repite en una frase

function findMostCommonLetter (text) {
  var phraseLetters = text.toLowerCase().split('')
  var letters = [...new Set(phraseLetters)]
  var lettersGroups = []
  var exampleForCompariton = []
  for(let i = 0; i < letters.length; i++) {
    lettersGroups.push([letters[i]])
    exampleForCompariton.push([letters[i]])
  }
  for (let i = 0; i < phraseLetters.length; i++) {
    for (let j = 0; j < exampleForCompariton.length; j++) {
      if(exampleForCompariton[j] == phraseLetters[i]) {
        lettersGroups[j].push(phraseLetters[i])
      }
    }
  }
  lettersGroups.sort( (a, b) => {
    if (a.length == b.length) {
      return 0;
    }
    if (a.length > b.length) {
      return -1;
    }
    return 1;
  });
  return lettersGroups[0][0]
}