/*
 * Reto #1
 * EL FAMOSO "FIZZ BUZZ"
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe un programa que muestre por consola (con un console.log)
 * los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión),
 * sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 *
 */
// 1,2,"fizz",4,"buzz","fizz",7,8,"fizz",10,11,"fizz",13,14,"fizzbuzz"...100



// aca vemos che no usamos el elseif
// se puede  usar mejor solo el if

function fizzBuzz(number) {
  if (number % 15 === 0) return "fizzbuzz";
  //  Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
  // sia 3 che 5 son multiplos de 15 es igual

  if (number % 3 === 0) return "fizz";
  // Múltiplos de 3 por la palabra "fizz".
  if (number % 5 === 0) return "buzz";
  // Múltiplos de 5 por la palabra "buzz".
  return number;
}


for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}

/*
1
2
'fizz'
4
'buzz'
'fizz'
7
8
'fizz'
'buzz'
11
'fizz'
13
14
'fizzbuzz'
16
17
'fizz'
19
'buzz'
'fizz'
22
23
'fizz'
'buzz'
26
'fizz'
28
29
'fizzbuzz'
31
32
'fizz'
34
'buzz'
'fizz'
37
38
'fizz'
'buzz'
41
'fizz'
43
44
'fizzbuzz'
46
47
'fizz'
49
'buzz'
'fizz'
52
53
'fizz'
'buzz'
56
'fizz'
58
59
'fizzbuzz'
61
62
'fizz'
64
'buzz'
'fizz'
67
68
'fizz'
'buzz'
71
'fizz'
73
74
'fizzbuzz'
76
77
'fizz'
79
'buzz'
'fizz'
82
83
'fizz'
'buzz'
86
'fizz'
88
89
'fizzbuzz'
91
92
'fizz'
94
'buzz'
'fizz'
97
98
'fizz'
'buzz'

*/








