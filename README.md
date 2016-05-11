###### english docs coming soon...

# merge-json
Node.js Modul, dass 2 funktionen zur verfügung stellt, `isJSON` und `mergeJSON`.

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
