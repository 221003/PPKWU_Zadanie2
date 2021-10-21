## PPKWU - Programowanie pod kątem wielokrotnego użycia

## Zadanie 2

API przyjmuje ciąg znaków i analizuje podany string pod kątem podanych warunków.

## Format odpowiedzi

```
{
  status: "success" | "error",
  data: "Wynik działania wywołanej metody"
}
```

## URL-encoded

Parametr `:text` przekazywany do metod API, dla niektórych znaków musi zostać wysłany w formacie URL-encoded.

## Dostępne metody
|Metoda| Ścieżka                                               |Parametr|Odpowiedź| Opis                                                      |
|------|-------------------------------------------------------|--------|---------|-----------------------------------------------------------|
| GET  | /api/string/:text/length                              | :text  | boolean | Zwraca długość ciągu znaków                               |
| GET  | /api/string/:text/contain/uppercase                   | :text  | boolean | Zwraca `true` jeżeli<br> ciąg znaków zawiera wielką literę    |
| GET  | /api/string/:text/contain/lowercase                   | :text  | boolean | Zwraca `true` jeżeli<br> ciąg znaków zawiera małą literę      |
| GET  | /api/string/:text/contain/specialchar                 | :text  | boolean | Zwraca `true` jeżeli<br> ciąg znaków zawiera znak specjalny   |
| GET  | /api/string/:text/contain/whitespace                  | :text  | boolean | Zwraca `true` jeżeli<br> ciąg znaków zawiera biały znak       |
| GET  | /api/string/:text/validate/number                     | :text  | boolean | Zwraca "true" jeżeli<br> ciąg znaków jest liczbą              |
| GET  | /api/string/:text/count/uppercase                     | :text  | number  | Zlicza liczbę wystąpień<br> wielkiej litery w ciągu znaków    |
| GET  | /api/string/:text/count/lowercase                     | :text  | number  | Zlicza liczbę wystąpień<br> małej litery w ciągu znaków       |
| GET  | /api/string/:text/count/specialchar                   | :text  | number  | Zlicza liczbę wystąpień<br> znaków specjalnych w ciągu znaków |
| GET  | /api/string/:text/count/whitespace                    | :text  | number  | Zlicza liczbę wystąpień<br> białych znaków w ciągu znaków     |


## Przykładowe wywołania metod

* GET /api/string/:text/length
```
http://localhost:3000/api/string/abc/length

Parametr: text = "abc"
Odpowiedz:
{
    "status": "success",
    "data": 3
}

```

* GET /api/string/:text/contain/uppercase
```
http://localhost:3000/api/string/aBc/contain/uppercase

Parametr: text = "aBc"
Odpowiedz:
{
    "status": "success",
    "data": true
}

```


* GET /api/string/:text/contain/lowercase
```
http://localhost:3000/api/string/aBc/contain/lowercase

Parametr: text = "aBc"
Odpowiedz:
{
    "status": "success",
    "data": true
}

```


* GET /api/string/:text/contain/specialchar
```
http://localhost:3000/api/string/aB$c/contain/specialchar

Parametr: text = "aB$c"
Odpowiedz:
{
    "status": "success",
    "data": true
}

```


* GET /api/string/:text/contain/whitespace
```
http://localhost:3000/api/string/aB $c/contain/whitespace

Parametr: text = "aB $c"
Odpowiedz:
{
    "status": "success",
    "data": true
}

```


* GET /api/string/:text/validate/number
```
http://localhost:3000/api/string/123/validate/number

Parametr: text = "123"
Odpowiedz:
{
    "status": "success",
    "data": true
}

```


* GET /api/string/:text/count/uppercase
```
http://localhost:3000/api/string/aBc/count/uppercase

Parametr: text = "aBc"
Odpowiedz:
{
    "status": "success",
    "data": 1
}

```


* GET /api/string/:text/count/lowercase
```
http://localhost:3000/api/string/aBc/count/lowercase

Parametr: text = "aBc"
Odpowiedz:
{
    "status": "success",
    "data": 2
}

```


* GET /api/string/:text/count/specialchar
```
http://localhost:3000/api/string/{as!>/count/specialchar

Parametr: text = "{as!>"
Odpowiedz:
{
    "status": "success",
    "data": 3
}

```


* GET /api/string/:text/count/whitespace
```
http://localhost:3000/api/string/a b c/count/whitespace

Parametr: text = "a b c"
Odpowiedz:
{
    "status": "success",
    "data": 2
}

```
