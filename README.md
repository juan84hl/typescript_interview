# typescript_interview

Matricula: 2019-0453

Ejercicios:

# 1. Este problema fue pedido por Amazon

Existe una escalera con N escalones, y puedes subir 1 o 2 escalones a la vez. Dado N, escribe una función que devuelva el número de formas únicas en que puedes subir la escalera. El orden de los pasos importa.

Por ejemplo, si N es 4, entonces hay 5 formas únicas:

1, 1, 1, 1

2, 1, 1

1, 2, 1

1, 1, 2

2, 2

¿Qué pasaría si, en lugar de poder subir 1 o 2 escalones a la vez, pudieras subir cualquier número de un conjunto de enteros positivos X? Por ejemplo, si X = {1, 3, 5}, podrías subir 1, 3 o 5 escalones a la vez.

Realiza un programa en Typescript que imprima por consola las formas únicas de subir las escaleras.

# Solucion

* Descripción: Dada una escalera con N escalones y la posibilidad de subir 1 o 2 escalones a la vez, se busca encontrar el número de formas únicas de subir la escalera.

* Solución: Utilicé la técnica de programación dinámica para resolver este problema. La idea es que el número de formas únicas de subir un escalón N es igual a la suma de las formas únicas de llegar al escalón N-1 y las formas únicas de llegar al escalón N-2. Por lo tanto, construí una tabla dinámica donde cada elemento representa el número de formas únicas de llegar a ese escalón. Al final, el resultado se encuentra en la última posición de la tabla.

* Complejidad: La solución tiene una complejidad de tiempo y espacio de O(N), donde N es el número de escalones.

# 2. Uber preguntó recientemente el problema

Dada una cadena s y un carácter c, encuentre la distancia entre todos los caracteres de la cadena y el carácter c de la cadena s. Puede suponer que el carácter c aparecerá al menos una vez en la cadena.

Aquí hay un ejemplo y un código de inicio:

distancia_más_corta(s, c)

# Complete esta la funcion anterior para que imprima por consola un arreglo con las distancias ejemplo

shortest_dist('helloworld', 'l')

h e l l o w o r l d

# [2, 1, 0, 0, 1, 2, 2, 1, 0, 1]

0 1 2 3 4 5 6 7 8 9

# Solucion

* Descripción: Dada una cadena 's' y un carácter 'c', se busca encontrar la distancia entre cada carácter de la cadena y el carácter 'c'.

* Solución: Utilicé un enfoque simple de recorrer la cadena y, en cada posición, calcular la distancia entre el carácter actual y el carácter 'c'. Almacené las distancias en un arreglo y lo devolví como resultado.

* Complejidad: La solución tiene una complejidad de tiempo y espacio de O(N), donde N es la longitud de la cadena 's'.

# 3. Facebook preguntó recientemente el problema: (Slider Window)

Dada una matriz de números positivos y un número positivo 'S', encuentre la longitud del subarreglo contiguo más pequeño cuya suma es mayor o igual que 'S'. Retorna 0, si no existe tal subarreglo

Input: [2, 1, 5, 2, 3, 2], S=7

Output: 2

Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [5, 2].

Input: [2, 1, 5, 2, 8], S=7

Output: 1

Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [8].

Nota: No puedes usar ciclos anidados para resolver el problema.

# Solucion

* Descripción: Dada una matriz de números positivos y un número positivo 'S', se busca encontrar la longitud del subarreglo contiguo más pequeño cuya suma es mayor o igual que 'S'.

* Solución: Utilicé la técnica del "Slider Window" para resolver este problema. El enfoque consiste en mantener una ventana deslizante que contiene un subarreglo válido y ajustarla mientras se recorre la matriz. La ventana comienza con un tamaño de 0 y se va expandiendo hacia la derecha. Cuando la suma del subarreglo en la ventana es mayor o igual que 'S', se actualiza la longitud mínima si es más pequeña que la actual y se reduce la ventana moviendo su borde izquierdo hacia la derecha.

* Complejidad: La solución tiene una complejidad de tiempo de O(N), donde N es el número de elementos en la matriz. No hay ciclos anidados, por lo que no hay una complejidad adicional en ese sentido. La complejidad espacial es O(1) ya que solo se utilizan algunas variables adicionales para mantener el estado actual.
