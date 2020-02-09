## 11 Javascript Consepts
#### 1. Scope
* Kapsam, değişkenlerin iç içe olduklarında davranışları.
```javascript
var a = 10;
var add5 = function(num) {
    var b = 5;
    console.log(num + b);
    var add10 = function(num2) {
        console.log(num2 + a);
    };
    add10(3);
    var add15 = function(num3) {
        var c = 15;
        console.log(num3 + c);
    };
    add15(3);
};
add5(3);
```
 
#### 2. Hoisting
* `let` kendi bloğunda, `var` alt bloklarda çalışır
* Hoist, kendi bloğunda olup henüz tanımlanıp tanımlanmaması
* `var`, `let`, `const`, `function`, `class` are hoisted.
* Only `var` is initialized with undefined
```javascript
hoisting();
function hoisting() {
    console.log(hoist);
    var what = "Variable and function declarations.";
    console.log("What is hoisted? " + what);
    var hoist = "to lift or raise up.";
    console.log("Hoist means " + hoist);
}
```
	
#### 3. Objects are Everywhere
* Data Types: String, Number, Boolean, Undefined, Null, Symbol, BigInt, Object
```javascript
"use strict";
const testFun = () => 'Test Function';
const newArray = [1, 2, 3, 4, 5, 5, 6];
const obj = {name: 'Steven'};
const today = new Date();
const set = new Set(newArray);
const map = new Map();
```
  
#### 4. Prototypal Inheritance
* Almost every object is linked to another object. That linked object is called the prototype.
```javascript
var objProto = {
    greet: function() {
        console.log(this.greeting + " World!");
    }
};
var Greeting = function(term) {
    this.greeting = term;
};
Greeting.prototype = objProto;
var obj1 = new Greeting("Howdy");
var obj2 = Object.create(objProto);
obj2.greeting = "Hi";
var obj3 = {
    greeting: "Hello"
};
Object.setPrototypeOf(obj3, objProto);
```
#### 5. Higher Order Functions
```javascript
let things = ['Building', 'car', 'bicycle', 'automobile', 'Tree', 'house'];
things.sort(function(a, b) {
    let x = a.toLowerCase(),
        y = b.toLowerCase();
    if (x < y) {return -1;}
    if (y < x) {return 1;}
    return 0;
});
```
#### 6. Callbacks
```javascript
"use strict";
let learner1 = {
    firstName: "Steven",
    lastName: "Hancock",
    scores: {
        s1q1: "5:8",
        s1q2: "9:10",
        s1q3: null,
        s1q4: "1:5",
        s1q5: "12:15",
        s2q1: "6:8",
        s2q2: null,
        s2q3: "4:20",
        s2q4: null,
        s3q1: null,
        s3q2: "6:10",
        s3q3: "7:7"
    }
};
const pullScores = function(obj, section = 1, callback) {
    let scores = {};
    for (let key in obj.scores) {
        if (key.includes('s' + section)) {
            let val = obj.scores[key];
            if (typeof callback === "function") {
                val = callback(val);
            }
            scores[key] = val;
        }
    }
    return scores;
};
let newObj = pullScores(learner1, 1, function(val) {
    if (val === null) {
        return 0;
    } else {
        let arr = val.split(":");
        return arr[0] / arr[1] * 100;
    }
});
```

#### 7. IIFEs - immediately invoked function expressions
```javascript
(function() {
    console.log(5 * 5);
}());
//product();
(() => {
    console.log(5 * 5);
})();
```

#### 8. Closure
```javascript
(function counter() {
    var cnt = 0,
        item1 = document.querySelector("#item1"),
        item2 = document.querySelector("#item2");
    var print = function print() {
        console.log(cnt);
    };
    item1.addEventListener("click", function count1() {
        cnt++;
        print();
    });
    item2.addEventListener("click", function count2() {
        cnt++;
        print();
    });
})();
```

#### 9. The Module Pattern
```javascript
"use strict";
var COMM = (function () {
    let greet = "Hello ",
        goodbye = "So long ";
    const getGreet = function () {
        let d = new Date();
        if (d.toLocaleTimeString().includes('AM')) {
            greet = "Good Morning ";
        } else {
            greet = "Hello ";
        }
        return greet;
    };
    const greeting = function (name) {
        console.log(`${getGreet() + name}! Welcome to the course.`);
    };
    //Public methods and properties
    return {
        greetUser: greeting   
    };
})();
```

#### 10. Understanding 'this'
```javascript
"use strict";
var fun1 = function() {
    console.log(this);
};
//fun1();
var fun2 = function() {
    fun1();
};
//fun2();
var obj1 = {
    name: 'obj1',
    fun() {
        console.log(this);
    }
};
//obj1.fun();
var obj2 = {
    name: 'obj2',
    fun: obj1.fun
};
//obj2.fun();
setTimeout(obj1.fun, 1000);
```

#### 11. Promises
```javascript
"use strict";
let wordnikWords = "http://api.wordnik.com/v4/words.json/",
    wordnikWord = "http://api.wordnik.com/v4/word.json/",
    apiKey = "?api_key=xxxxxx",
    wordObj;
fetch(wordnikWords + "randomWord" + apiKey)
.then(function(response) {
    wordObj = response;
    //console.log(wordObj);
    return response.json();
})
.then(function(data) {
    console.log(data.word);
    return fetch(wordnikWord + data.word + "/definitions" + apiKey);
})
.then(function(def) {
    //console.log(def);
    return def.json();
})
.then(function(def) {
    console.log(def);
})
.catch(function(err) {
    console.log(err);
});
console.log("See this is asynchronous!");
```
