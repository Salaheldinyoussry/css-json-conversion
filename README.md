# introduction
converts css string to json object and vice versa

# installation

`npm i css-json-conversion`


# usage


```js
const { CSSToJSON, JSONToCSS } = require('./index')


console.log(CSSToJSON(`  h1
                        { font-size:23; color:red; 
                        }
                        
                        .hello { background-color:'red';}
                        
                        `))     
///   prints  {
//     h1: { 'font-size': '23', color: 'red' },
//     '.hello': { 'background-color': "'red'" }
//         }


console.log(JSONToCSS(
    {
    h1: { 'font-size': '23', color: 'red' },
    '.hello': { 'background-color': "'red'" }
} 

))
///   prints  h1{font-size:23;color:red;}.hello{background-color:'red';}


```
