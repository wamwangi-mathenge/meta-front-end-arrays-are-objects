# Arrays are Objects

By the end of this reading, you'll be able to:
- Explain that arrays are objects, with their own built-in properties and methods.
- Outline the common way to extend arrays using the push() method.
- Explain how to trim the last member of an array using the pop() method.

One of the most commonly used built-in methods on arrays are the push() and the pop() methods.
To add new items to an array, you can use the push() method:

~~~
var fruits = [];
fruits.push("apple"); // ["apple"]
fruits.push("pear"); // ["apple", "pear"]
~~~

To remove the last item from an array, you can use the pop() method;

~~~
fruits.pop();
console.log(fruits); // ["apple"]
~~~

You can build a function that takes all its arguments and pushes them into an array, like this:

~~~
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
~~~

You can now call the arrayBuilder() function, for example, like this:

~~~
arrayBuilder("apple", "pear", "plum"); // ["apple", "pear", "plum"]
~~~

Additionally, you can save this function call to a variable.

~~~
var simpleArr = arrayBuilder("apple", "pear", "plum");
~~~

You can now console log the values stored in simpleArr.

~~~
console.log(simpleArr); // ["apple", "pear", "plum"]
~~~