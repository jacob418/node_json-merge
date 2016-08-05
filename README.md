# merge-json

1. [deutsch](#deutsche-Dokumentation)
2. [english](#english-docs)

---

## deutsche Dokumentation

`merge-json` ist ein Node.js Modul, dass 2 funktionen zur verfügung stellt, `isJSON` und `mergeJSON`.

## Installation und Benutzung

``` bash
npm install merge-json
```

``` javascript
var mergeJSON = require("merge-json") ;
```

## Zusammenfügen von JSON Objekten

``` javascript
var obj1 = {a:true, b:false} ;
var obj2 = {b:true, c:12345} ;
var result = mergeJSON.merge(obj1, obj2) ;
console.log(result) ;
// Object {a: true, b: true, c: 12345}
```

Bei der Verwendung ist darauf zu achten, dass der 2. Parameter dominant wirkt. Werte aus dem 2. Parameter, die im ersten Parameter schon vorhanden sind werden überschrieben. Sind beide Werte JSON Objekte werden sie mit `merge()` verbunden.

## Testen auf JSON Objekte

``` javascript
var obj = {a:123, b:456} ;
var num = 123 ;
var str = "hello world!" ;
var date = new Date() ;

mergeJSON.isJSON(obj) ;
// true

mergeJSON.isJSON(num) ;
// false

mergeJSON.isJSON(str) ;
// false

// unterschied zu typeof beachten!
typeof date === "object"
// true
mergeJSON.isJSON(date) ;
// false
```

Die Funktion gibt **true** zurück, wenn es sich bei dem Parameter um ein JSON Objekt handelt, ansonsten **false**. Objekte, die kein JSON sind füren auch zu **false**

---

## english docs
`merge-json` is a Node.js module, which provides 2 functions, `isJSON` and `mergeJSON`.

## installation and usage

``` bash
npm install merge-json
```

``` javascript
var mergeJSON = require("merge-json") ;
```

## merging of JSON objects

``` javascript
var obj1 = {a:true, b:false} ;
var obj2 = {b:true, c:12345} ;
var result = mergeJSON.merge(obj1, obj2) ;
console.log(result) ;
// Object {a: true, b: true, c: 12345}
```

When using `merge` consider, that the second parameter is dominant. Keys from the second parameter, already existing in the first parameter override these. If both keys contain JSON objects a merge is performed.

## testing for JSON objects

``` javascript
var obj = {a:123, b:456} ;
var num = 123 ;
var str = "hello world!" ;
var date = new Date() ;

mergeJSON.isJSON(obj) ;
// true

mergeJSON.isJSON(num) ;
// false

mergeJSON.isJSON(str) ;
// false

// unterschied zu typeof beachten!
typeof date === "object"
// true
mergeJSON.isJSON(date) ;
// false
```

The function returns **true**, when the given parameter is a JSON object. I it is no JSON object it returns **false**. For JavaScript objects, that are not *pure* JSON objects it also returns **false**.

---

*Please don't blame my english. ;)*
