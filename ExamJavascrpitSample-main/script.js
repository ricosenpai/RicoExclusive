const questions = [
    {
        question:`Given the HTML below:
        &lt;div&gt;
            &lt;div id="row-we"&gt;Universal Container&lt;/div&gt;
            &lt;div id="row-as"&gt;Applied Shipping&lt;/div&gt;
            &lt;div id="row-bt"&gt;Burlington Textiles&lt;/div&gt;
        &lt;/div&gt;

        Which statement adds the priority-account css class to the Applied Shipping row?`,
        answers:[
            {text:`document.querySelector('#row-as').classList.add('priority-account');`,correct:true},
            {text:"document.querySelector('#row-as').class.add('priority-account');",correct:false},
            {text:"document.querySelector('#row-as').add('priority-account');",correct:false},
            {text:"document.querySelector('#priority-account').classList.add('#row-as');",correct:false}
        ]
    },
    {
        question:`A developer wants to create an object from a function in the browser using the code below:

        function Monster() {this.name = 'hello'};
        Const z = Monster();

        What happens due to lack of the new keyword on line 02?`,
        answers:[
            {text:`Window.name is assigned to 'hello' and the variable z remains undefined.`,correct:true},
            {text:"Window.m is assigned the correct object.",correct:false},
            {text:"The z variable is assigned the correct object but this.name remains undefined.",correct:false},
            {text:"The z variable is assigned the correct object.",correct:false}
        ]
    },
    {
        question:`Refer to HTML below:
        &lt;div id="main"&gt;
            &lt;div id="card-00"&gt;This card is smaller.&lt;/div&gt;
            &lt;div id="card-01"&gt;The width and height of this card is determined by its contents.&lt;/div&gt;
        &lt;/div&gt;
        Which expression outputs the screen width of the element with the ID card-01?`,
        answers:[
            {text:`document.getElementById(' card-01 ').style.width`,correct:false},
            {text:"document.getElementById(' card-01 ').getBoundingClientRect().width",correct:true},
            {text:"document.getElementById(' card-01 ').width",correct:false},
            {text:"document.getElementById(' card-01 ').innerHTML.lenght*e",correct:false}
        ]
    },
    {
        question:`Refer to the code below:
        Async function functionUnderTest(isOK) {
            if (isOK) return 'OK';
            Throw new Error('not OK');
        }
        Which assertion accurately tests the above code?`,
        answers:[
            {text:`Console.assert (await functionUnderTest(true), ' OK ')`,correct:false},
            {text:"Console.assert (await functionUnderTest(true), 'OK')",correct:true},
            {text:"Console.assert (await functionUnderTest(true), ' notOK ')",correct:false},
            {text:"Console.assert (await functionUnderTest(true), ' not OK ')",correct:false}
        ]
    },
    {
        question: `What are two unique features of functions defined with a fat arrow as compared to normal function definition?
                    Choose 2 answers`,
        answers: [
            { text: "If the function has a single expression in the function body, the expression will be evaluated and implicit returned.", correct: true },
            { text: "The function generated its own this making it useful for separating the function's scope from its enclosing scope.", correct: false },
            { text: "The function uses the this from the enclosing scope.", correct: true },
            { text: "The function receives an argument that is always in scope, called parentThis, which is the enclosing lexical scope.", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
                    const addBy = ?
                    const addByEight = addBy(8);
                    const sum = addByEight(50);

                    Which two functions can replace line 01 and return 58 to sum?
                    Choose 2 answers`,
        answers: [
            { text: `const addBy = function(num1) {
                        return function(num2) {
                            return num1 + num2;
                        }
                    };`, correct: true },
            { text: `const addBy = (num1) => (num2) => num1 + num2;`, correct: true },
            { text: `const addBy = (num1) => num1 + num2 ;`, correct: false },
            { text: `const addBy = function(num1) {
                        return num1 + num2;
                    };`, correct: false }
        ]
    },
    {
        question: `In which situation should a developer include a try .. catch block around their function call?`,
        answers: [
            { text: "The function has an error that should not be silenced.", correct: false },
            { text: "The function results in an out of memory issue.", correct: false },
            { text: "The function contains scheduled code.", correct: false },
            { text: "The function might raise a runtime error that needs to be handled.", correct: true }
        ]
    },
    {
        question: `Given the following code:
        let x = null;
        console.log(typeof x);
        What is the output?`,
        answers: [
            { text: '"x"', correct: false },
            { text: '"undefined"', correct: false },
            { text: '"null"', correct: false },
            { text: '"object"', correct: true }
        ]
    },
    {
        question: `Given the JavaScript below:
        01 function filterDOM (searchString) {
        02 const parsedSearchString = searchString && searchString.toLowerCase();
        03 document.querySelectorAll('.account').forEach(account => (
        04 const accountName = account.innerHTML.toLowerCase();
        05 account.style.display = accountName.includes(parsedSearchString) ? /*Insert code*/;
        06 ));
        07 }
        Which code should replace the placeholder comment on line 05 to hide accounts that do not match the search string?`,
        answers: [
            { text: "' Block ' : ' none '", correct: true },
            { text: "' visible ' : ' hidden '", correct: false },
            { text: "' hidden ' : ' visible '", correct: false },
            { text: "' name ' : ' block '", correct: false }
        ]
    },
    {
        question: `A developer has a formatName function that takes two arguments, firstName and lastName, and returns a string. They want to schedule the function to run once after five seconds.
        What is the correct syntax to schedule this function?`,
        answers: [
            { text: 'setTimeout(formatName(), 5000, "John", "BDoe");', correct: false },
            { text: 'setTimeout(\'formatName\', 5000, \'John\', "Doe");', correct: false },
            { text: 'setTimeout(() => { formatName("John", "Doe") }, 5000);', correct: true },
            { text: 'setTimeout(formatName("John", "Doe"), 5000);', correct: false }
        ]
    },
    {
        question: `Refer to the following code that imports a module named utils:
        import {foo, bar} from '/path/Utils.js';
        foo();
        bar();
        Which two implementations of Utils.js export foo and bar such that the code above runs without error?`,
        answers: [
            { text: "// FooUtils.js and BarUtils.js existImport (foo) from '/path/FooUtils.js'; Import (boo) from '/path/NarUtils.js';", correct: false },
            { text: "const foo = () => { return 'foo'; } const bar = () => { return 'bar'; } export default foo, bar;", correct: false },
            { text: "const foo = () => { return 'foo' ; } const bar = () => { return 'bar' ; } export { bar, foo }", correct: true },
            { text: "export default class { foo() { return 'foo'; } bar() { return 'bar'; }}", correct: true }
        ]
    },
    {
        question: `A developer writes the code below to return a message to a user attempting to register a new username. If the username is available, a variable named 'msg' is declared and assigned a value on line 03.
        1   function getAvailabilityMessage(item){
        2     if(getAvailability(item)){
        3         var msg = "Username available";
        4     }
        5     return msg;
        6   }
        What is the value of msg when getAvailabilityMessage("newUserName") is executed and getAvailability("newUserName") returns true?`,
        answers: [
            { text: '"msg is not defined"', correct: false },
            { text: '"Username available"', correct: true },
            { text: 'undefined', correct: false },
            { text: '"newUserName"', correct: false }
        ]
    },
    {
        question: `Refer to the code snippet below:
        Let array = [1, 2, 3, 4, 4, 5, 4, 4];
        For (let i = 0; i < array.length; i++)
        if (array[i] === 4) {
            array.splice(i, 1);
        }
        What is the value of array after the code executes?`,
        answers: [
            { text: '[1, 2, 3, 4, 5, 4]', correct: false },
            { text: '[1, 2, 3, 5]', correct: true },
            { text: '[1, 2, 3, 4, 5, 4, 4]', correct: false },
            { text: '[1, 2, 3, 4, 4, 5, 4]', correct: false }
        ]
    },
    {
        question: `Refer to the following code:
        let array = [1, 2, 3, 4, 4, 5, 4, 4];
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 4) {
                array.splice(i, 1);
                i--;
            }
        }
        alert(array);
        What is the value of array after code executes?`,
        answers: [
            { text: '[1, 2, 3, 4, 5, 4]', correct: false },
            { text: '[1, 2, 3, 5]', correct: true },
            { text: '[1, 2, 3, 4, 5, 4, 4]', correct: false },
            { text: '[1, 2, 3, 4, 4, 5, 4]', correct: false }
        ]
    },
    {
        question: `Given the requirement to refactor the code above to JavaScript class format, which class definition is correct?
        function Vehicle(name, prize){
            this.name = name;
            this.prize = prize;
        }
        Vehicle.prototype.prizeInfo = function (){
            return \`Cost of this \${this.name} is \${this.prize}$\`;
        }
        let ford = new Vehicle('Ford Fiesta', 20000);`,
        answers: [
            { 
                text: `
                    class Vehicle {
                        constructor(name, prize){
                            name = name;
                            prize = prize;
                        }
                        prizeInfo (){
                            return \`Cost of this \${this.name} is \${this.prize}$\`;
                        }
                    }`, 
                correct: false 
            },
            { 
                text: `
                    class Vehicle {
                        constructor(){
                            this.name = name;
                            this.prize = prize;
                        }
                        prizeInfo (){
                            return \`Cost of this \${this.name} is \${this.prize}$\`;
                        }
                    }`, 
                correct: false 
            },
            { 
                text: ` 
                    class Vehicle {
                        constructor(name, prize){
                            this.name = name;
                            this.prize = prize;
                        }
                        prizeInfo (){
                            return \`Cost of this \${this.name} is \${this.prize}$\`;
                        }
                    }`, 
                correct: true 
            },
            { 
                text: `
                    class Vehicle {
                        vehicle(name, prize){
                            this.name = name;
                            this.prize = prize;
                        }
                        prizeInfo (){
                            return \`Cost of this \${this.name} is \${this.prize}$\`;
                        }
                    }`, 
                correct: false 
            }
        ]
    },//firt 15items
    {
        question: `A developer has an ErrorHandler module that contains multiple functions.
        What kind of export should be leveraged so that multiple functions can be used?`,
        answers: [
            { text: "default", correct: false },
            { text: "named", correct: true },
            { text: "all", correct: false },
            { text: "multi", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
        const myFunction = arr => {
            return arr.reduce((result, current) => {
                return result = current;
            }, 10);
        }
        What is the output of this function when called with an empty array?`,
        answers: [
            { text: "Returns 10", correct: true },
            { text: "Throws an error", correct: false },
            { text: "Returns 0", correct: false },
            { text: "Returns NaN", correct: false }
        ]
    },
    {
        question: `
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
        &lt;table onclick="console.log('Table log');"&gt;
            &lt;tr id="row1"&gt;
                &lt;td&gt;Click me!&lt;/td&gt;
            &lt;/tr&gt;
        &lt;/table&gt;
        &lt;script&gt;
            function printMessage(event){
                console.log('Row log');
                event.stopPropagation();
            }
            let elem = document.getElementById('row');
            elem.addEventListener(('click', printMessage, false))
        &lt;/script&gt;
        &lt;/html&gt;

        Which code change should be done for the console to log the following when 'Click me!' is clicked?
        &gt; Row log
        &gt; Table log`,
        answers: [
            { text: "Change line 14 to elem.addEventListener('click', printMessage, true);", correct: false },
            { text: "Remove line 10", correct: true },
            { text: "Remove lines 13 and 14", correct: false },
            { text: "Change line 10 to event.stopPropagation(false);", correct: false }
        ]
    },
    {
        question: `Refer to the code:
    
    function Animal(size,type){
        this.size = size || "small";
        this.type = type || "Animal";
        this.canTalk = false;
    }
    let Pet = function(size,type,name,owner){
        Animal.call(this,size,type);
        this.name = name;
        this.owner = owner;
    }
    Pet.prototype = Object.create(Animal.prototype);
    let pet1 = new Pet();
    console.log("Rico :: "+pet1.name);
    
    Given the code above, which three properties are set on pet1?`,
        answers: [
            { text: "Owner", correct: false },
            { text: "Name", correct: false },
            { text: "Type", correct: true },
            { text: "Size", correct: true },
            { text: "canTalk", correct: true }
        ]
    },
    {
        question: `Refer to the code:
    
    class Post {
        // Insert code here
        constructor(body, author, viewCount) {
            this.body = body;
            this.author = author;
            this.viewCount = viewCount;
        }
    }
    
    let post1 = new Post("This is the body of the blog post", "Jane Doe", 100);
    
    console.log(post1);
    
    Given the code above, which statement should be inserted in the placeholder on line 02 to allow for a variable to be set to a new instance of Post with the three attributes correctly populated?`,
        answers: [
            { text: "constructor() {", correct: false },
            { text: "super(body, author, viewCount) {", correct: false },
            { text: "constructor (body, author, viewCount) {", correct: true },
            { text: "Function Post (body, author, viewCount) {", correct: false }
        ]
    },
    {
        question: `bar, awesome is a popular JavaScript module. the versions publish to npm are:
        1.2
        1.3.1
        1.3.5
        1.4.0

        Teams at Universal Containers use this module in a number of projects. A particular project has thepackage, json definition below.
        {
            "name": "UC Project Extra",
            "version": "0.0.5",
            "dependencies": {
                "bar.awesome": "~1.3.0"
            }
        }
        A developer runs this command: npm install.
        Which version of bar.awesome is installed?`,
        answers: [
            { text: "The command fails, because version 1.3.0 is not found", correct: false },
            { text: "1.3.5", correct: true },
            { text: "1.3.1", correct: false },
            { text: "1.4.0", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
    
        let str = 'javascript';
        str[0] = 'J';
        str[4] = 'S';
    
        After attempting to change the string index values, the value of str is still 'javascript'. What is the reason for this behavior?`,
        answers: [
            { text: "Primitive values are immutable.", correct: true },
            { text: "Non-primitive values are mutable.", correct: false },
            { text: "Primitive values are mutable.", correct: false },
            { text: "Non-primitive values are immutable.", correct: false }
        ]
    },
    {
        question: `The developer wants to test the array shown:
    
        const arr = Array(5).fill(0);
    
        Which two tests are the most accurate for this array? Choose 2 answers:`,
        answers: [
            { text: "console.assert(arr.length === 5);", correct: true },
            { text: "console.assert(arr[0] === 0 && arr[arr.length] === 0);", correct: false },
            { text: "arr.forEach(elem => console.assert(elem === 0));", correct: true },
            { text: "console.assert(arr.length > 0);", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
    
        function myFunction(reassign) {
            let x = 1;
            var y = 1;
            if (reassign) {
                let x = 2;
                var y = 2;
                console.log(x);
                console.log(y);
            }
            console.log(x);
            console.log(y);
        }
    
        What is displayed when myFunction(true) is called?`,
        answers: [
            { text: "2 2 1 1", correct: false },
            { text: "2 2 2 2", correct: false },
            { text: "2 2 1 2", correct: true },
            { text: "2 2 undefined undefined", correct: false }
        ]
    },
    {
        question: `A developer publishes a new version of a package with new features that do not break backward compatibility. The previous version number was 1.1.3. Following semantic versioning format, what should the new package version number be?`,
        answers: [
            { text: "1.2.3", correct: false },
            { text: "2.0.0", correct: false },
            { text: "1.2.0", correct: true },
            { text: "1.1.4", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
    
        x = 3.14;
    
        function myFunction() {
            "use strict";
            y = x;
        }
    
        z = x;
    
        myFunction();
    
        What is the result of the code?`,
        answers: [
            { text: "z is equal to 3.14", correct: true },
            { text: "use strict has effect only on line 5", correct: false },
            { text: "Line 5 throws an error", correct: false },
            { text: "test", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
    
        let total = 10;
        const interval = setInterval(() => {
            total++;
            clearInterval(interval);
            total++;
        }, 0);
        total++;
        console.log(total);
    
        Considering that JavaScript is single-threaded, what is the output of line 08 after the code executes?`,
        answers: [
            { text: "10", correct: false },
            { text: "12", correct: false },
            { text: "11", correct: true },
            { text: "13", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
    
        let foodMenu1 = ['pizza', 'burger', 'French fries'];
        let finalMenu = foodMenu1;
        finalMenu.push('Garlic bread');
    
        What is the value of foodMenu1 after the code executes?`,
        answers: [
            { text: "[ 'pizza', 'burger', 'French fries', 'Garlic bread' ]", correct: true },
            { text: "[ 'Garlic bread' ]", correct: false },
            { text: "[ 'pizza', 'burger', 'French fries' ]", correct: false },
            { text: "[ 'Garlic bread', 'pizza', 'burger', 'French fries' ]", correct: false }
        ]
    },
    {
        question: `Refer to the following array:
    
        let arr = [1, 2, 3, 4, 5];
    
        Which three options result in x evaluating as [3, 4, 5]? Choose 3 answers.`,
        answers: [
            { text: "let x = arr.filter((a) => { return a > 2 });", correct: true },
            { text: "let x = arr.filter((a) => { a < 2 });", correct: false },
            { text: "let x = arr.slice(2);", correct: true },
            { text: "let x = arr.splice(2, 3);", correct: true },
            { text: "let x = arr.slice(2, 3);", correct: false }
        ]
    },
    {
        question: `A developer wrote the following code to test a sum3 function that takes in an array of numbers and returns
        the sum of the first three numbers in the array, and the test passes.
        A different developer made changes to the behavior of sum3 to instead sum only the first two numbers 
        present in the array.

        let res = sum3({1,4,1});
        console.assert(res === 6);

        res = sum3({1,5,0,5});
        console.assert(res === 6);
    
        Which two results occur when running this test on the updated sum3 function?
        Choose 2 answers`,
        answers: [
            { text: "The line 05 assertion passes.", correct: true },
            { text: "The line 02 assertion fails.", correct: true },
            { text: "The line 05 assertion fails.", correct: false },
            { text: "The line 02 assertion passes.", correct: false }
        ]
    },
    {
        question: `A developer creates a simple webpage with an input field. When a user enters text in the input field and clicks the button, the actual value of the field must be displayedin the console.
        Here is the HTML file content:

        &lt;input type="text" value="Hello" name="input"&gt;
        &lt;button type="button"&gt;Display&lt;/button&gt;
        
        The developer wrote the javascript code below:

        Const button = document.querySelector('button');
        button.addEvenListener('click', () => (
            Const input = document.querySelector('input');
            console.log(input.getAttribute('value')
        );

        When the user clicks the button, the output is always "Hello".
        What needs to be done to make this code work as expected?`,
        answers: [
            { text: "Replace line 03 with const input = document.getElementByName('input');", correct: false },
            { text: "Replace line 02 with button.addCallback(\"click\", function() {", correct: false },
            { text: "Replace line 04 with console.log(input.value);", correct: true },
            { text: "Replace line 02 with button.addEventListener(\"onclick\", function() {", correct: false }
        ]
    },
    {
        question: `A developer has two ways to write a function:
        Option A:
        function Monster() {
            This.growl = () => {
                Console.log ("Grr!");
            }
        }
        Option B:
        function Monster() {};
        Monster.prototype.growl =() => {
            console.log("Grr!");
        }
        After deciding on an option, the developer creates 1000 monster objects.
        How many growl methods are created with Option A Option B?`,
        answers: [
            { text: "1 growl method is created for Option A.1000 growl methods are created for Option B.", correct: false },
            { text: "1 growl method is created regardless of whichoption is used.", correct: false },
            { text: "1000 growl method is created for Option A. 1 growl methods are created for Option B.", correct: true },
            { text: "1000 growl methods are created regardless of which option is used.", correct: false }
        ]
    },
    {
        question: `Refer to the HTML below:
        &lt;div id="main"&gt;
            &lt;ul&gt;
                &lt;li&gt;Leo&lt;/li&gt;
                &lt;li&gt;Tony&lt;/li&gt;
                &lt;li&gt;Tiger&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
        Which JavaScript statement results in changing " The Lion."?`,
        answers: [
            { text: "document.querySelector('$main li.Tony').innerHTML = \'\" The Lion \';", correct: false },
            { text: "document.querySelector('$main li:second-child').innerHTML = \"The Lion \';", correct: false },
            { text: "document.querySelector('$main li:nth-child(2)'),innerHTML = \" The Lion. \';", correct: true },
            { text: "document.querySelectorAll('$main $TONY').innerHTML = \'\" The Lion", correct: false }
        ]
    },
    {
        question: `A developer is setting up a Node,js server and is creating a script at the root of the source code, index,js, 
        that will start the server when executed. The developer declares a variable that needsthe folder location 
        that the code executes from.
        Which global variable can be used in the script?`,
        answers: [
            { text: " _filename", correct: false },
            { text: "this.path", correct: false },
            { text: "_dirname", correct: true },
            { text: "window.location", correct: false }
        ]
    },
    {
        question: `Given the following HTML structure:
        
        &lt;div&gt;
            &lt;div id="row-uc"&gt;Universal Container&lt;/div&gt;
            &lt;div id="row-aa"&gt;Applied Shipping&lt;/div&gt;
            &lt;div id="row-bt"&gt;Burlington Textiles&lt;/div&gt;
        &lt;/div&gt;
        
        Which statement adds the "priority-account" CSS class to the Universal Containers row?`,
        answers: [
            { text: "Document.querySelector('#row-uc').classList.add('priority-account');", correct: true },
            { text: "Document.querySelectorALL('#row-uc').classList.add('priority-account');", correct: false },
            { text: "Document.querySelector('#row-uc').classes.push('priority-account');", correct: false },
            { text: "Document.queryElementById('row-uc').addclass('priority-account');", correct: false }
        ]
    },
    {
        question: `Refer to the following array:
        Let arr1 = [ 1,2, 3, 4, 5 ];
        Let arr2 = arr1.slice(0,5);

        console.log(arr2);
        >(5) [1,2,3,4,5]
        undefined

        Let arr1 = [ 1,2, 3, 4, 5 ];
        Let arr2 = Array.from(arr1);
        console.log(arr2);
        >(5) [1,2,3,4,5]
        undefined
        
        Which two lines of code result in a second array, arr2 being created such that arr2 is not a reference to arr1?`,
        answers: [
            { text: "Let arr2 = arr1;", correct: false },
            { text: "Let arr2 = Array.from(arr1);", correct: true },
            { text: "Let arr2 = arr1.sort();", correct: false },
            { text: "Let arr2 = arr1.slice(0, 5);", correct: true }
        ]
    },
    {
        question: `Given the following JavaScript code:
        
        Counter = 0;
        const logCounter = () => {
            console.log(counter);
        };
        logCounter();
        setTimeout(logCounter, 1100);
        setInterval(() => {
            Counter++;
            logCounter();
        }, 1000);
        
        What is logged by the first four log statements?`,
        answers: [
            { text: "0 1 2 2", correct: false },
            { text: "0 0 1 2", correct: false },
            { text: "0 1 2 3", correct: false },
            { text: "0 1 1 2", correct: true }
        ]
    },
    {
        question: `Cloud Kicks has a class to represent items for sale in an online store, as shown below:
    
        class Item {
            constructor(name, price) {
                this.name = name;
                this.price = price;
            }
            formattedPrice() {
                return 's' + String(this.price);
            }
        }
    
        A new business requirement requests a ClothingItem class that should have all the properties and methods of the Item class but also include properties specific to clothing.
    
        Which line of code properly declares the ClothingItem class such that it inherits from Item?`,
        answers: [
            { text: "Class ClothingItem implements Item {", correct: false },
            { text: "Class ClothingItem super Item {", correct: false },
            { text: "Class ClothingItem {", correct: false },
            { text: "Class ClothingItem extends Item {", correct: true }
        ]
    }, 
    {//start number 41 freecram
        question: `A developer implements and calls the following code when an application state change occurs:
        Const onStateChange =(innerPageState) => {
            window.history.pushState(newPageState, ' ', null);
        }
        If the back button is clicked after this method is executed, what can a developer expect?`,
        answers: [
            { text: "A popstate event is fired with a state property that details the application's last state.", correct: false },
            { text: "The page reloads and all Javascript is reinitialized.", correct: false },
            { text: "A navigate event is fired with a state property that details the previous application state.", correct: false },
            { text: "The page is navigated away from and the previous page in the browser's history is loaded.", correct: true }
        ]
    },
    {
        question: `A class was written to represent items for purchase in an online store, and a secondclass Representing 
        items that are on sale at a discounted price. THe constructor sets the name to the first value passed in. The 
        pseudocode is below:
        Class Item {
            constructor(name, price) {
                ... // Constructor Implementation
            }
        }
        Class SaleItem extends Item {
            constructor (name, price, discount) {
                ...//Constructor Implementation
            }
        }
        There is a new requirement for a developer to implement a description method that will return a brief description for Item
        and SaleItem.
        Let regItem =new Item('Scarf', 55);
        Let saleItem = new SaleItem('Shirt' 80, -1);
        Item.prototype.description = function (){ 
            return 'This is a ' + this.name;
        }
        console.log(regItem.description()); 
        console.log(saleItem.description()); 
        SaleItem.prototype.description = function () {
            return 'This is a discounted ' + this.name; 
        } 
        console.log(regItem.description()); 
        console.log(saleItem.description());

        What is the output when executing the code above ?`,
        answers: [
            { text: "This is a ScarfThis is a ShirtThis is a discounted ScarfThis is a discounted Shirt", correct: false },
            { text: "This is a ScarfUncaught TypeError: saleItem.description is not a functionThis is aScarfThis is a discounted Shirt", correct: false },
            { text: "This is a ScarfThis is a ShirtThis is a ScarfThis is a discounted Shirt", correct: true },
            { text: "This is aScarfUncaught TypeError: saleItem.description is not a functionThis is a ShirtThis is a did counted Shirt", correct: false }
        ]
    },
    {
        question: `Given the following code:
        document.body.addEventListener(' click ', (event) => {
            if (/* CODE REPLACEMENT HERE */) {
                console.log('button clicked!');
            )
        });
        Which replacement for the conditional statement on line 02 allows a developer to correctly determine that a 
        button on page is clicked?`,
        answers: [
            { text: "e.nodeTarget == this", correct: false },
            { text: "Event.clicked", correct: false },
            { text: "button.addEventListener('click')", correct: false },
            { text: "event.target.nodeName == 'BUTTON'", correct: true }
        ]
    },
    {
        question: `Which option is a core Node,js module?`,
        answers: [
            { text: "Ios", correct: false },
            { text: "Path", correct: true },
            { text: "Memory", correct: false },
            { text: "locate", correct: false }
        ]
    }, 
    {
        question: `Refer to the expression below:
        Let x = ('1' + 2) == (6 * 2);
        How should this expression be modified to ensure that evaluates to false?`,
        answers: [
            { text: "Let x = (1+ 2 ) == ( 6 / 2);", correct: false },
            { text: "Let x = ('1' + 2) == ( 6 * 2); freeCram Correct Answer but wrong", correct: true },
            { text: "Let x = ('1' + ' 2') == ( 6 * 2);", correct: false },
            { text: "Let x = (1 + 2) == ( '6' / 2);", correct: false },
            { text: "Let x = ('1' + 2) == ( 6 / 2); custom correct answer", correct: true }
        ]
    },
    {
        question: `Which three statements are true about promises ?
        Choose 3 answers`,
        answers: [
            { text: "The executor of a new Promise runs automatically.", correct: false },
            { text: "A Promise has a .then() method.", correct: true },
            { text: "A settled promise can become resolved.", correct: false },
            { text: "A fulfilled or rejected promise will not change states.", correct: true },
            { text: "A pending promise canbecome fulfilled, settled, or rejected.", correct: true }
        ]
    },
    {
        question: `A developer is leading the creation of a new browser application that will serve a single page application. The team wants to use a new web framework Minimalsit.js.The Lead developer wants to advocate for a more seasoned web framework that already has a community around it.
        Which two frameworks should the lead developer advocate for?
        Choose 2 answers`,
        answers: [
            { text: "koa", correct: false },
            { text: "Angular", correct: true },
            { text: "vue", correct: false },
            { text: "Express", correct: true }
        ]
    },
    {
        question: `Refer to the code below?
        Let searchString = ' look for this ';
        Which two options remove the whitespace from the beginning of searchString?
        Choose 2 answers`,
        answers: [
            { text: "trimStart(searchString);", correct: false },
            { text: "searchString.trimStart();", correct: true },
            { text: "searchString.trimEnd();", correct: false },
            { text: "searchString.replace(/*\s\s*/,'');", correct: true }
        ]
    },
    {
        question: `A developer has the function, shown below, that is called when a page loads.
        function onLoad() {
            console.log('Page has loaded');
        }
        Where can the developer see the log statement after loading the page in the browser?
        `,
        answers: [
            { text: "On the browser JavaScript console", correct: true },
            { text: "On the terminal console running the web server", correct: false },
            { text: "In the browser performance tools log", correct: false },
            { text: "On the webpage console log", correct: false }
        ]
    },
    {
        question: `A developer wrote a fizzbuzz function thatwhen passed in a number, returns the following:
        'Fizz' if the number is divisible by 3.
        'Buzz' if the number is divisible by 5.
        'Fizzbuzz' if the number is divisible by both 3 and 5.
        Empty string if the number is divisible by neither 3 or 5.
        Which two test cases will properly test scenarios for the fizzbuzz function?
        Choose 2 answers
        `,
        answers: [
            { text: "let res = fizzbuzz(5);console.assert ( res === ' ' );", correct: false },
            { text: "let res = fizzbuzz(15);console.assert ( res === 'fizzbuzz')", correct: true },
            { text: "let res = fizzbuzz(Infinity);console.assert (res === ' ' )", correct: true },
            { text: "let res = fizzbuzz(3);console.assert ( res === 'buzz')", correct: false }
        ]
    },
    {
        question: `Refer to the following array:
        Let arr = [1, 2, 3, 4, 5];
        Which three options result in x evaluating as [1,2]?
        Choose 3 answer
        `,
        answers: [
            { text: "let x =arr.splice(0, 2);", correct: true },
            { text: "let x = arr. slice (2);", correct: false },
            { text: "let x arr.filter((a) => (return a <= 2 });", correct: true },
            { text: "let x = arr.filter ((a) => 2 }) ;", correct: false },
            { text: "let x = arr. slice (0, 2);", correct: true }
        ]
    },
    {
        question: `Which two console logs output NaN?
        Choose 2 answers ||`,
        answers: [
            { text: "console.log(10 / 'five');", correct: true },
            { text: "console.log(10 / Number('5) ) ;", correct: false },
            { text: "console.log(parseInt ' (\"two\"));", correct: true },
            { text: "console.log(10 / 0);", correct: false }
        ]
    },
    {
        question: `Why would a developerspecify a package.json as a developed forge instead of a dependency?`,
        answers: [
            { text: "Other required packages depend on it for development.", correct: false },
            { text: "It is only needed for local development and testing.", correct: true },
            { text: "It should be bundled when the package is published.", correct: false },
            { text: "It is required by the application in production.", correct: false }
        ]
    },
    {
        question: `After user acceptance testing, the developer is asked to change the webpage background based on user's 
        location. This change was implemented and deployed for testing.The tester reports that the background is not 
        changing, however it works as required when viewing on the developer's computer.

        Which two actions will help determine accurate results?
        Choose 2 answers`,
        answers: [
            { text: "The tester should clear their browser cache.", correct: true },
            { text: "The developer should rework the code.", correct: false },
            { text: "The tester should disable their browser cache.", correct: true },
            { text: "The developer should inspect their browser refresh settings.", correct: false }
        ]
    },
    {
        question: `Refer to code below:
        Let productSKU = '8675309' ;
        A developer has a requirement to generate SKU numbers that are always 19 characters lon, starting with 'sku', and padded with zeros.
        Which statement assigns the values sku0000000008675309 ?`,
        answers: [
            { text: "productSKU = productSKU.padStart (16. '0').padstart(19, 'sku');", correct: true },
            { text: "productSKU = productSKU.padEnd (16. '0').padstart('sku');", correct: false },
            { text: "productSKU = productSKU.padStart (19. '0').padstart('sku');", correct: false },
            { text: "productSKU = productSKU.padEnd (16. '0').padstart(19, 'sku');", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
        console.log(''start);
        Promise.resolve('Success') .then(function(value){
            console.log('Success');
        });
        console.log('End');
        What is the output after the code executes successfully?`,
        answers: [
            { text: "StartEndSuccess", correct: true },
            { text: "SuccessStartEnd", correct: false },
            { text: "StartSuccessEnd", correct: false },
            { text: "EndStartSuccess", correct: false }
        ]
    },
    {
        question: `Refer to the following code:
        01 function Tiger(){
        02     this.Type = 'Cat';
        03     this.size = 'large';
        04 }
        05
        06 let tony = new Tiger();
        07 tony.roar = () =>{
        08     console.log('They\'re great1');
        09 };
        10
        11 function Lion(){
        12     this.type = 'Cat';
        13     this.size = 'large';
        14 }
        15
        16 let leo = new Lion();
        17 //Insertcode here
        18 leo.roar();

        Which two statements could be inserted at line 17 to enable the function call on line 18?
        Choose 2 answers.`,
        answers: [
            { text: "Object.assign(leo,Tiger);", correct: false },
            { text: "Object.assign(leo,tony);", correct: true },
            { text: "Leo.prototype.roar = () => { console.log('They\'re pretty good:'); };", correct: false },
            { text: "Leo.roar = () => {console.log('They\'re pretty good:'); };", correct: true }
        ]
    },
    {
        question: `developer is trying to convince management that their team will benefit from using Node.js for a backend 
        server that they are going to create. The server will be a web server that handles API requests from a 
        website that the teamhas already built using HTML, CSS, and JavaScript.

        Which three benefits of Node.js can the developer use to persuade their manager?
        Choose 3 answers:`,
        answers: [
            { text: "Performs a static analysis on code before execution to look for runtime errors.", correct: true },
            { text: "Executes server-side JavaScript code to avoid learning a new language.", correct: false },
            { text: "Ensures stabilitywith one major release every few years.", correct: false },
            { text: "Uses non-blocking functionality for performant requesthandling.", correct: true },
            { text: "Installs with its own package manager to install and manage third-party libraries.", correct: true }
        ]
    },
    {
        question: `Which statement accurately describes the behaviour of the async/ await keyworks ?`,
        answers: [
            { text: "The associated sometimes returns a promise.", correct: false },
            { text: "The associated class contains some asynchronous functions.", correct: false },
            { text: "The associated function will always return a promise", correct: true },
            { text: "The associated function can only be called via asynchronous methods", correct: false }
        ]
    },
    {
        question: `developer has a web server running with Node.js. The command to start the web server is node server.js. 
        The web server started having latency issues. Instead of a one second turn around for web requests, the 
        developer now sees a five second turnaround,
        Which command can the web developer run to see what the module is doing during the latency period?`,
        answers: [
            { text: "NODE_DEBUG =http, https node server.js", correct: false },
            { text: "DEBUG = http, https node server.js", correct: false },
            { text: "NODE_DEBUG =true node server.js", correct: false },
            { text: "DEBUG = true node server.js", correct: true }
        ]
    },
    {
        question: `Given the code below:
        Setcurrent URL ();
        console.log('The current URL is: ' +url );
        functionsetCurrentUrl() {
        Url = window.location.href:

        What happens when the code executes?`,
        answers: [
            { text: "The url variable has local scope and line 02 executes correctly.", correct: false },
            { text: "The url variable has local scope and line 02 throws an error.", correct: false },
            { text: "The url variable has global scope and line 02 throws an error.", correct: false },
            { text: "The url variable has global scope and line 02 executes correctly.", correct: true }
        ]
    },
    {
        question: `A developer implements a function that adds a few values.
        Function sum(num) {
            If (num == undefined) {
                Num =0;
            }
            Return function( num2, num3){
                If (num3 ===undefined) {
                    Num3 =0 ;
                }
                Return num + num2 + num3;
            }
        }
        Which three options can the developer invoke for this function to get a return value of 10 ?
        Choose 3 answers`,
        answers: [
            { text: "sum(10)()", correct: true },
            { text: "Sum ()(20)", correct: false },
            { text: "sum(5)(5)", correct: true },
            { text: "sum() (5,5)", correct: true },
            { text: "Sum (5, 5)()", correct: false }
        ]
    },
    {
        question: `A developer is asked to fix some bugs reported by users. To do that, the developer adds abreakpoint 
        for debugging.
        Function Car (maxSpeed, color){
            This.maxspeed =masSpeed;
            This.color = color;
            Let carSpeed = document.getElementById(' CarSpeed');
            Debugger;
            Let fourWheels =new Car (carSpeed.value, 'red');
        }
        When the code execution stops at the breakpoint on line 06, which two types of information are available in the browser console ?
        Choose 2 answers:`,
        answers: [
            { text: "A variable displaying the number of instances created for the Car Object.", correct: false },
            { text: "The style, event listeners and other attributes applied to the carSpeed DOM element", correct: true },
            { text: "The values of the carSpeed and fourWheels variables", correct: false },
            { text: "The information stored in the window.localStorage property", correct: true }
        ]
    },
    {
        question: `A developer wants to use a try...catch statement to catch any error that countSheep () 
        may throw and pass it to a handleError () function.

        What is the correct implementation of the try...catch?`,
        answers: [
            { text: "not availabe in fc", correct: false },
            { text: "not availabe in fc", correct: false },
            { text: `try { 
                        countSheep();
                    } handleError(e) {
                        catch(e);
                    }`, correct: false },
            { text: `try {
                        setTimeout function() {   
                            countSheep();
                        },1000);
                     } catch (error) {
                        handleError(error);
                     }`, correct: true }
        ]
    },
    {
        question: `Refer to the code below:
        01 const server = require('server');
        02 /* Insert code here */
        A developer imports a library that creates a web server. Theimported library uses events and callbacks to 
        start the servers Which code should be inserted at the line 03 to set up an event and start the web server ?`,
        answers: [
            { text: "server()", correct: false },
            { text: "serve(( port) => (", correct: false },
            { text: "Server.start ();", correct: false },
            { text: "server.on(' connect ' , ( port) => {console.log('Listening on ' , port) ;})", correct: true },
            { text: "console.log( 'Listening on ', port) ;", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
        let country = {
            get capital() {
                let city = Number("London");
                return {
                    cityString: city.toString(),
                }
            }
        }
        Which value can a developer expect when referencing country,capital,cityString?`,
        answers: [
            { text: "An error", correct: false },
            { text: "undefined", correct: false },
            { text: "'London'", correct: false },
            { text: "'NaN'", correct: true }
        ]
    },
    {
        question: `developer removes the HTML class attribute from the checkout button, so now it is simply:

        &lt;button&gt;Checkout&lt;/button&gt;

        There is a test to verify the existence of the checkout button, however it looks for a button with class= "blue". 
        The test fails because no such button is found.

        Which type of test category describes this test?`,
        answers: [
            { text: "True negative", correct: false },
            { text: "False negative", correct: true },
            { text: "True positive", correct: false },
            { text: "False positive", correct: false }
        ]
    },
    {
        question: `A developer copied a JavaScript object:
        01 function Person() {
        02     this.firstName = firstName;
        03     this.lastName = lastName;
        04     this.name =()=>'\${this.firstName}, \${this.lastName}';
        05 }
        06
        07 const john = new Person();
        08 const dan = Object.assign(john);
        09 dan.firstName = 'Dan';
        How does the developer access dan's firstName,lastName? Choose 2 answers`,
        answers: [
            { text: "dan.firstname() + dan.lastName()", correct: false },
            { text: "dan.name()", correct: true },
            { text: "dan.firstName = dan.lastName", correct: true },
            { text: "dan.name", correct: false }
        ]
    },
    {
        question: `Refer to the HTML below:
        &lt;id="main"&gt;
            &lt;ul&gt;
                &lt;li&gt;Leo&lt;/li&gt;
                &lt;i&gt;Tony&lt;/li&gt;
                &lt;li&gt;Tiger&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
        Which JavaScript statement results in changing " Tony" to "Mr. T."?`,
        answers: [
            { text: "document.querySelector('$main li.Tony').innerHTML = ' Mr. T. ';", correct: false },
            { text: "document.querySelector('$main li:nth-child(2)'),innerHTML =' Mr. T. ';", correct: true },
            { text: "document.querySelectorAll('$main $TONY').innerHTML = ' Mr. T. ';", correct: false },
            { text: "document.querySelector('$main li:second-child').innerHTML = ' Mr. T. ';", correct: false }
        ]
    },
    {
        question: `A test has a dependency on database. query. During the test, the dependency is replaced with an object 
        called database with the method, Calculator query, that returns an array. The developer does not need to 
        verify how many times the method has been called.
        Which two test approaches describe the requirement?
        Choose 2 answers`,
        answers: [
            { text: "Substitution", correct: true },
            { text: "Black box", correct: false },
            { text: "Stubbing", correct: true },
            { text: "White box", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
        01 document.body.addEventListener('click', (event) => {
        02     if (/* Answer here */) {
        03         console.log('myElement clicked!');
        04     }
        05 });
        Which replacement for the conditionalstatement on line 02 allows a developer to correctly determine that a specific element, 
        myElement on the page had been clicked?`,
        answers: [
            { text: "event.target.id =='myElement'", correct: true },
            { text: "not available", correct: false },
            { text: "not available", correct: false },
            { text: "not available", correct: false }
        ]
    },
    {
        question: `Universal Containers (UC) notices that its application that allows users to search for accounts makes a 
        network request each time a key is pressed. This results in too many requests for the server to handle.
        Address this problem, UC decides to implement a debounce function on string change handler.
        What are three key steps to implement this debounce function?
        Choose 3 answers:`,
        answers: [
            { text: "When thesearch string changes, enqueue the request within a setTimeout.", correct: true },
            { text: "If there is an existing setTimeout and the search string changes, cancel the existingsetTimeout using thepersisted timerId and replace it with a new setTimeout.", correct: true },
            { text: "Store the timeId of the setTimeout last enqueued by the search string change handle.", correct: true },
            { text: "Ensure that the network request has the property debounce set to true.", correct: false },
            { text: "If there is an existing setTimeout and the search string change, allow the existingsetTimeout to finish, and do not enqueue a new setTimeout.", correct: false }
        ]
    },
    {
        question: `A developer has the following array of hourly wages:
        Let arr = (8, 5, 9, 75, 11, 25, 7, 75, , 13, 25);
        For workers making less than $10 an hour rate should be multiple by 1.25 and returned in a new array.
        How should the developer implement the request?`,
        answers: [
            { text: "let arrl = arr.filterBy((val) => val < 10 ).aapBy<(num) -> num = ..25 );", correct: false },
            { text: "let arrl = arr.filter((val) => val < 10).map((num) -> num = 1.25);", correct: false },
            { text: "let arrl = arr .rr.acArray ((val) => ( val < 10 )) ,map((num) => { num * 1.25 ));", correct: false },
            { text: "let arrl = arr-map((num) => { return ran * 1.25 }).filter((val) -> { return val < 10)); freecramCorrectAnswer", correct: true },
            { text: "let arr1 = arr.filter((val) => val < 10).map((num) => num * 1.25); GPTcorrectAnswer", correct: true }
        ]
    },
    {
        question: `A developer wrote the following code:
        01 let X = object.value;
        02
        03 try {
        04     handleObjectValue(X);
        05 } catch (error) {
        06     handleError(error);
        07 }
        The developer has a getNextValue function to execute after handleObjectValue(), but does not want to 
        execute getNextValue() if an error occurs.
        How can the developer change the code to ensure this behavior?`,
        answers: [
            { text: `03 try{
                     04     handleObjectValue(x);
                     05 }catch(error){
                     06     handleError(error);
                     07 }then{
                     08     getNextValue();
                     09 }`, correct: false },
            { text: `03 try{
                     04     handleObjectValue(x);
                     05 } catch(error){
                     06     handleError(error);
                     07 }
                     08 getNextValue();`, correct: false },
            { text: `03 try{
                     04     handleObjectValue(x);
                     05 } catch(error){
                     06     handleError(error);
                     07 } finally {
                     08     getNextValue();
                     10 }`, correct: false },
            { text: "03 try {04 handleObjectValue(x)05 ........................", correct: true }
        ]
    },
    {
        question: `A developer at Universal Containers is creating their new landing pagebased on HTML, CSS, and JavaScript.
        The website includes multiple external resources that are loaded when the page is opened.
        To ensure that visitors have a good experience, a script named personalizeWebsiteContent needs to be 
        executed when the webpage isloaded and there is no need to wait for the resources to be available.

        Which statement should be used to call personalizeWebsiteContent based on the above business requirement?`,
        answers: [
            { text: "windows,addEventListener('DOMContentLoaded ', personalizeWebsiteContent);", correct: true },
            { text: "windows,addEventListener('load', personalizeWebsiteContent);", correct: false },
            { text: "windows,addEventListener('onDOMCContentLoaded', personalizeWebsiteContent);", correct: false },
            { text: "windows,addEventListener('onload', personalizeWebsiteContent);", correct: false }
        ]
    },
    {
        question: `A developer is leading the creation of a new web server for their team that will fulfill API requests from an existing client.
        The team wants a web server that runs on Node.Js, and they want to use the new web framework Minimalist.Js. The lead developer wants to advocate for a more seasoned back-end framework that already has a community around it.
        Which two frameworks could the lead developer advocate for?
        Choose 2 answers`,
        answers: [
            { text: "Express", correct: true },
            { text: "Angular", correct: false },
            { text: "Gatsby", correct: false },
            { text: "Koa", correct: true }
        ]
    },
    {
        question: `Refer to the code below:
        let timeFunction =() => {
            console.log('Timer called.");
        };
        let timerId = setTimeout (timedFunction, 1000);
        Which statement allows a developer to cancel the scheduled timed function?`,
        answers: [
            { text: "clearTimeout(timerId);", correct: true },
            { text: "removeTimeout(timerId);", correct: false },
            { text: "removeTimeout(timedFunction);", correct: false },
            { text: "clearTimeout(timedFunction);", correct: false }
        ]
    },
    {
        question: `Given code below:
        setTimeout (()=> (
            console.log(1);
        ). 0);
        console.log(2);
        New Promise ((resolve, reject )) = > (
            setTimeout(() => (
            reject(console.log(3));
        ). 1000);
        )).catch(() => (
            console.log(4);
        ));
        console.log(5);
        What is logged to the console?`,
        answers: [
            { text: "1 2 5 3 4", correct: false },
            { text: "2 1 4 3 5", correct: false },
            { text: "2 5 1 3 4", correct: true },
            { text: "1 2 43 5", correct: false }
        ]
    },
    {
        question: `Given the code below:
        const delay = sync delay => {
        Return new Promise((resolve, reject) => {
        setTimeout (resolve,delay);});};
        const callDelay =async () =>{
        const yup =await delay(1000);
        console.log(1);

        What is logged to the console?`,
        answers: [
            { text: "1 2 3", correct: false },
            { text: "1 3 2", correct: false },
            { text: "2 3 1", correct: true },
            { text: "2 1 3", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
        Function changeValue(obj) {
            Obj.value = obj.value/2;
        }
        Const objA = (value: 10);
        Const objB = objA;
        changeValue(objB);
        Const result = objA.value;
        What is the value of result after the code executes?`,
        answers: [
            { text: "5", correct: true },
            { text: "Nan", correct: false },
            { text: "10", correct: false },
            { text: "Undefined", correct: false }
        ]
    },
    {
        question: `A developer receives a comment from the Tech Lead that the code given below has error:
        const monthName = 'July';
        const year = 2019;
        if(year === 2019) {
            monthName ='June';
        }
        Which line edit should be made to make this code run?`,
        answers: [
            { text: "02 let year =2019;", correct: false },
            { text: "03 if (year == 2019) {", correct: false },
            { text: "02 const year = 2020;", correct: false },
            { text: "01 let monthName ='July';", correct: true }
        ]
    },
    {
        question: `Refer to the following code:
        01 class Ship {
        02     constructor(size) {
        03         this.size = size;
        04      }
        05 }
        06
        07 class FishingBoat extends ship {
        08      constructor(size, capacity) {
        09          //missing code
        10          this.capacity = capacity;
        11      }
        12      displayCapacity() {
        13          console.log('The boat has a capacity of ${this.capacity} people.');
        14      }
        15 }
        16
        17 let myBoat = new FishingBoat('medium', 10);
        18 myBoat.displayCapacity();

        Which statement should be added to line 09 for the code to display. The boat has a capacity of 10 people?`,
        answers: [
            { text: "super.size = size;", correct: false },
            { text: "this.size = size;", correct: false },
            { text: "super(size);", correct: true },
            { text: "ship.size size;", correct: false }
        ]
    },
    {//number 88 in FreeCram
        question: `Refer to the following code:
        let greeting = 'GoodBye';
        let salutation = 'Hello, hello, hi!';
        try {
            greeting = 'Hello'; // Attempt to change greeting
            decodeURI('***'); // This will throw an error
            salutation = 'GoodBye';
        } catch (err) {
            salutation = 'Hey, hello';
        } finally {
            salutation = 'Hello, Hello';
        }

        Line 05 causes an error.
        What are the values of greeting and salutation once code completes?`,
        answers: [
            { text: "Greeting is Hello and salutation is I say hello.", correct: false },
            { text: "Greeting is Goodbye and salutation is Hello, Hello.", correct: false },
            { text: "Greeting is Goodbye and salutation is I say Hello.", correct: false },
            { text: "Greeting is Hello and salutation is Hello, Hello.", correct: true }
        ]
    },
    {
        question: `A developer is setting up a new Node.js server with a client library that is built using events and callbacks.
        The library:
        Will establish a web socket connection and handle receipt of messages to theserver Will be imported with 
        require, and made available with a variable called we.The developer also wants to add error logging if a connection fails.
        Given this info, which code segment shows the correct way to set up a client with two events that listen at 
        execution time?`,
        answers: [
            { text: "ws.on ('connect', ( ) => {console.log('connected to client'); ws.on('error', (error) => { console.log('ERROR' ,error); });});", correct: true },
            { text: "ws.on ('connect', ( ) => { console.log('connected to client'); }}; ws.on('error', (error) => { console.log('ERROR' , error); }};", correct: false },
            { text: "ws.connect (( ) => {console.log('connected to client'); }).catch((error) => { console.log('ERROR' , error); }};", correct: false },
            { text: "try{ws.connect (( ) => {console.log('connected to client'); });} catch(error) { console.log('ERROR',error); };}", correct: false }
        ]
    },
    {//90 freecram
        question: `Refer to the following object.
        01 const dog = {
        02     firstName: 'Beau',
        03     lastName: 'Boo',
        04     get fullName() {
        05         return this.firstName + ' ' + this.lastName;
        06     }
        07 };

        How can a developer access the fullName property for dog?`,
        answers: [
            { text: "Dog.fullName ( )", correct: false },
            { text: "Dog, function, fullName", correct: false },
            { text: "Dog.fullName", correct: true },
            { text: "Dog, get,fullName", correct: false }
        ]
    },
    {
        question: `A developer wants to use a module called DataPrettyPrint. This module exports one default 
        functioncalled printDate ().
        How can a developer import and use the printDate() function?`,
        answers: [
            { text: `import DatePrettyPrint from '/path/DatePrettyPrint.js';
                     DatePrettyPrint.printDate();`, correct: false },
            { text: `import printDate from '/path/DatePrettyPrint.js';
                     printDate();`, correct: true },
            { text: `import printDate from '/path/DatePrettyPrint.js';
                     DatePrettyPrint.printDate();`, correct: false },
            { text: `import DatePrettyPrint from '/path/DatePrettyPrint.js';
                     printDate();`, correct: false }
        ]
    },
    {
        question: `Given the followingcode, what is the value of x?
        let x = '15' + (10 * 2);`,
        answers: [
            { text: "50", correct: false },
            { text: "3020", correct: false },
            { text: "35", correct: false },
            { text: "1520", correct: true }
        ]
    },
    {
        question: `There is a new requirement for a developer to implement a 
        currPrice method that will return the current price of the item or sales..

        01 let regItem = new Item('Scarf', 50});//Name, Price
        02 let saleItem = new Item('Scarf', 50, 0.1);//Name, Price, Discount
        03 Item.prototype.currPrice = function() {return this.price;}
        04 console.log(regItem.currPrice());
        05 console.log(saleItem.currPrice());
        06 
        07 SaleItem.prototype.currPrice = function(){return this.price - (this.price * this.discount);}
        08 console.log(regItem.currPrice());
        09 console.log(saleItem.currPrice());

        What is the output when executing the code above?`, 
        answers: [
            { text: "50805072", correct: true },
            { text: "508072", correct: false },
            { text: "50Uncaught TypeError: saleItem,desrcription is not a function5080", correct: false },
            { text: "5080Uncaught ReferenceError:this,discount is undefined72", correct: false }
        ]
    },
    {
        question: `Refer to the following code:
        Let obj ={
        Foo: 1,
        Bar: 2
        }
        Let output =[],
        for(let something in obj{
        output.push(something);
        }
        console.log(output);
        What is the output line 11?`, 
        answers: [
            { text: "[\"foo:1\",\"bar:2\"]", correct: false },
            { text: "[\"bar\",\"foo\"]", correct: false },
            { text: "[1,2]", correct: false },
            { text: "[\"foo\",\"bar\"]", correct: true }
        ]
    },
    {
        question: `Given the expressions var1 and var2, what are two valid ways to return the concatenation of the two 
        expressions and ensure it is string? Choose 2 answers`, 
        answers: [
            { text: "string.concat (var1 +var2)", correct: false },
            { text: "String (var1).concat (var2)", correct: true },
            { text: "var1.toString ( ) var2.toString ( )", correct: false },
            { text: "var1 + var2", correct: true }
        ]
    },
    {
        question: `Refer to code below:
        Let first = 'who';
        Let second = 'what';
        Try{
            Try{
                Throw new error('Sad trombone');
            }catch (err){
                First ='Why';
            }finally {
                Second ='when';
            } catch (err) {
                Second ='Where';
        }
        What are the values for first and second once the code executes ?`, 
        answers: [
            { text: "First is who and second is where", correct: false },
            { text: "First is Who and second is When", correct: false },
            { text: "First is why and second is where", correct: false },
            { text: "First is why and second is when", correct: true }
        ]
    },
    {
        question: `Refer to the code snippet:
        Function getAvailabilityMessage(item) {
            If (getAvailability(item)){
                var msg ="Username available";
            }
            Return msg;
        }
        A developer writes this code to return a message to user attempting to register a new username. If the 
        username is available, variable.
        What is the return value of msg hen getAvailabilityMessage ("newUserName" ) is executed and 
        getAvailability("newUserName") returns false?`, 
        answers: [
            { text: "undefined", correct: true },
            { text: "\"Username available\"", correct: false },
            { text: "\"Msg is not defined\"", correct: false },
            { text: "\"newUserName\"", correct: false }
        ]
    },
    {
        question: `Refer to the following code:
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
        &lt;head&gt;
            &lt;meta charset="UTF-8"&gt;
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            &lt;title&gt;Button Click Event&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;

            &lt;div onclick="console.log('Outer message');"&gt;
                &lt;button id="myButton"&gt;Click me&lt;/button&gt;
            &lt;/div&gt;

            &lt;script&gt;
                function displayMessage(ev) {
                    ev.stopPropagation();
                    console.log('Inner message.');
                }
                const elem = document.getElementById('myButton');
                elem.addEventListener('click', displayMessage);
            &lt;/script&gt;

        &lt;/body&gt;
        &lt;/html&gt;
        What will the console show when the button is clicked?`, 
        answers: [
            { text: "Inner messageOuter message", correct: false },
            { text: "Outer message", correct: false },
            { text: "Inner message", correct: true },
            { text: "Outer messageInner message", correct: false }
        ]
    },
    {
        question: `Refer to code below:
        console.log(0);

        setTimeout(() => {
            console.log(1);
        }, 0); // Missing timeout value was added

        console.log(2);

        setTimeout(() => {
            console.log(3);
        }, 0); // Fixed misplaced closing parenthesis

        console.log(4);
        In which sequence will the numbers be logged?`, 
        answers: [
            { text: "13024", correct: false },
            { text: "02431", correct: false },
            { text: "02413", correct: true },
            { text: "01234", correct: false }
        ]
    },
    {
        question: `Which function should a developer use to repeatedly execute code at a fixed interval?`, 
        answers: [
            { text: "setIntervel", correct: true },
            { text: "setTimeout", correct: false },
            { text: "setPeriod", correct: false },
            { text: "setInteria", correct: false }
        ]
    },
    {
        question: `Given the following code:
        Let x =('15' + 10)*2;
        What is the value of x?`, 
        answers: [
            { text: "35", correct: false },
            { text: "1520", correct: false },
            { text: "50", correct: false },
            { text: "3020", correct: true }
        ]
    },
    {
        question: `Which statement can a developer apply to increment the browser's navigation history without a 
        page refresh?`, 
        answers: [
            { text: "window.history.pushState(newStateObject);", correct: true },
            { text: "window.history.replaceState(newStateObject,'', null);", correct: false },
            { text: "window.history.pushStare(newStateObject, ' ', null);", correct: false },
            { text: "window.history.state.push(newStateObject);", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
        let o = {
            get js() {
                let city1 = String("st. Louis");
                let city2 = String(" New York");
                return {
                    firstCity: city1.toLowerCase(),
                    secondCity: city2.toLowerCase(),
                }
            }
        }
        What value can a developer expect when referencing o.js.secondCity?`, 
        answers: [
            { text: "' new york '", correct: true },
            { text: "Undefined", correct: false },
            { text: "An error", correct: false },
            { text: "' New York '", correct: false }
        ]
    },
    {
        question: `developer wants to use a module named universalContainersLib and them callfunctions from it.
        How should a developer import every function from the module and then call the functions foo and bar ?`, 
        answers: [
            { text: "import * ad lib from '/path/universalContainersLib.js';lib.foo();lib.bar();", correct: true },
            { text: "import * from'/path/universalContaineraLib.js';universalContainersLib.foo();universalContainersLib.bar();", correct: false },
            { text: "import all from'/path/universalContaineraLib.js';universalContainersLib.foo();universalContainersLib.bar();", correct: false },
            { text: "import (foo, bar) from '/path/universalContainersLib.js';foo();bar();", correct: false }
        ]
    },
    {
        question: `At Universal Containers, every team has its own way of copyingJavaScript objects. The code snippet 
        shows an Implementation from one team:

        function Person() {
            this.firstName = "John";
            this.lastName = "Doe";
            this.name = () => {
                console.log(\`Hello \${this.firstName} \${this.lastName}\`);
            };
        }
        const john = new Person();
        const dan = JSON.stringify(JSON.parse(john));
        dan.firsName = 'Dan';
        dan.name();
        What is the output of the code execution?`, 
        answers: [
            { text: "Hello John Doe", correct: false },
            { text: "SyntaxError: Unexpected token in JSON OR TypeError: dan.name is not a function", correct: true },
            { text: "Hello Dan Doe", correct: false },
            { text: "Hello Dan", correct: false }
        ]
    },
    {
        question: `Universal Container(UC) just launched a new landing page, but users complain that the website is slow. A developer found some functions that cause this problem.To verify this, the developer decides to do everything and log the time each of these three suspicious functions consumes.
        console.time('Performance');
        maybeAHeavyFunction();
        thisCouldTakeTooLong();
        orMaybeThisOne();
        console.endTime('Performance');

        Which function can the developer use to obtain the time spent by every one of the three functions?`, 
        answers: [
            { text: "console.timeLog()", correct: true },
            { text: "console.getTime()", correct: false },
            { text: "console.timeStamp()", correct: false },
            { text: "console.trace()", correct: false }
        ]
    },
    {//number 110 in freCr
        question: `Refer to the following code that performs a basic mathematical operation on a provided input:
        function calculate(num) {
            Return (num +10) / 3;
        }
        How should line 02 be written to ensure that x evaluates to 6 in the line below?
        Let x = calculate (8);`, 
        answers: [
            { text: "Return Number(num + 10) / 3;", correct: false },
            { text: "Return Number((num +10) /3 );", correct: true },
            { text: "Return (Number (num +10 ) / 3;", correct: false },
            { text: "Return Integer(num +10) /3;", correct: false }
        ]
    },
    {
        question: `A developer is wondering whether to use, Promise.then or Promise.catch, especially when a Promise 
        throws an error?
        Which two promises are rejected?
        Which 2 are correct?`, 
        answers: [
            { text: "New Promise(() => (throw 'cool error here'}).then(null, error => console.error(error)));", correct: false },
            { text: "Promise.reject('cool errorhere').then(error =>console.error(error));", correct: false },
            { text: "Promise.reject('cool error here').catch(error => console.error(error));", correct: true },
            { text: "New Promise((resolve, reject) => (throw 'cool error here'}).catch(error =>console.error(error));", correct: true }
        ]
    },
    {
        question: `A developer initiates a server with thefile server,js and adds dependencies in the source codes 
        package,json that are required to run the server.
        Which command should the developer run to start the server locally?`, 
        answers: [
            { text: "npm start", correct: true },
            { text: "npm start server.js", correct: false },
            { text: "start server.js", correct: false },
            { text: "node start", correct: false }
        ]
    },
    {
        question: `Given the code below:
        function Person(name, email) {
            this.name = name;
            this.email = email;
        }

        const john = new Person('John', 'john@email.com');
        const jane = new Person('Jane', 'jane@email.com');
        const emily = new Person('Emily', 'emily@email.com');

        let usersList = [john, jane, emily];
        Which method can be used to provide a visual representation of the list of users and to allow sorting by the 
        name or email attribute?`, 
        answers: [
            { text: "console.table(usersList);", correct: true },
            { text: "console.info(usersList);", correct: false },
            { text: "console.groupCol lapsed (usersList);", correct: false },
            { text: "console.group(usersList);", correct: false }
        ]
    },
    {
        question: `Which statement parses successfully?`, 
        answers: [
            { text: "JSON.parse (\"\"foo\'\");", correct: false },
            { text: "JSON. parse (\"\"foo\"\');", correct: false },
            { text: "JSON.parse (\"foo\");", correct: false },
            { text: " JSON.parse ('\"foo\"');", correct: true }
        ]
    },
    {
        question: `Universal Containers recently launched its new landing page to host a crowd-funding campaign. The page 
        uses an external library to display some third-party ads. Once the page is fully loaded,it creates more than 
        50 new HTML items placed randomly insidethe DOM, like the one in the code below:

        <div class="ad-library-item ad-hidden" onload="myFunction();">
            <img src="ad-library/ad1.gif" />
        </div>

        All the elements includes the same ad-library-item class, They are hidden by default, and they are randomly
        displayed while the user navigates through the page.`, 
        answers: [
            { text: "Use the browser to execute a script that removes all the element containing the class ad-library-item.", correct: true },
            { text: "Use the browser console to execute a scriptthat prevents the load event to be fired.", correct: false },
            { text: "Use the DOM inspector to remove all the elements containing the class ad-library-item.", correct: false },
            { text: "Use the DOM inspector to prevent the load eventto be fired.", correct: false }
        ]
    },
    {
        question: `The developer has a function that prints "Hello" to an input name. To test this,thedeveloper created a 
        function that returns "World". However the following snippet does not print " Hello World".

        const sayHello = (name) => {
            console.log("Hello", name());
        };

        const world = () => {
            return "world";
        };

        sayHello(world);
        What can the developer do to change the code to print "Hello World" ?`, 
        answers: [
            { text: "Change line 2 to console.log('Hello' ,name() );", correct: true },
            { text: "Change line 9 to sayHello(world) ();", correct: false },
            { text: "Change line 5 to function world ( ) {", correct: false },
            { text: "Change line 7 to )();", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
        for(let number =2 ; number <= 5 ; number += 1 ) {
            //insert code statement here
        }
        The developer needs to insert a code statement in the location shown. The code statement has these requirements:
        1. Does require an import
        2. Logs an error when the boolean statement evaluates to false
        3. Works in both the browser and Node.js
        Which meet the requirements?`, 
        answers: [
            { text: "console.debug(number % 2 === 0);", correct: false },
            { text: "console.error(number % 2 === 0);", correct: false },
            { text: "console.assert(number % 2 === 0);", correct: true },
            { text: "assert(number % 2 === 0);", correct: false }
        ]
    },
    {
        question: `A developer needs to debug a Node.js web server because a runtime error keeps occurring 
        at one of the endpoints.
        The developer wants to test the endpoint on a local machine and make the request against a local 
        server to look at the behavior. In the source code, the server, js file will start the server. 
        the developer wants to debug the Node.js server only using the terminal.

        Which commandcan the developer use to open the CLI debugger in their current terminal window?`, 
        answers: [
            { text: "node -i server.js", correct: false },
            { text: "node inspect server.js", correct: true },
            { text: "node server.js inspect", correct: false },
            { text: "node start inspect server.js", correct: false }
        ]
    },
    {
        question: `A developer wants to define a function log to be used a few times on a single-file JavaScript script.
        01 // Line 1 replacement
        02 console.log('"LOG:', logInput);
        03 }
        Which two options can correctly replaceline 01 and declare the functionfor use?
        Choose 2 answers`, 
        answers: [
            { text: "function log(logInput) {", correct: true },
            { text: "const log(loginInput) {", correct: false },
            { text: "const log = (logInput) => {", correct: true },
            { text: "function log = (logInput) {", correct: false }
        ]
    },
    {
        question: `Refer to the code below
        let inArray = [[1,2],[3,4,5]];
        which two statements results in the array [1,2,3,4,5]?
        choose 2 answer`, 
        answers: [
            { text: "[ ].concat([...inArray])", correct: true },
            { text: "[ ].concat(...inArray);", correct: false },
            { text: "[ ].concat.apply([ ],inArray);", correct: true },
            { text: "[ ].concat.apply(inArray,[ ]);", correct: false }
        ]
    },
    {
        question: `Refer to the code below:

        Let car1 = new Promise((_ , reject) =>setTimeout(reject, 2000, “car 1 crashed in” =>
        Let car2 =new Promise(resolve => setTimeout(resolve, 1500, “car 2 completed”)
        Let car3 =new Promise(resolve => setTimeout(resolve, 3000, “car 3 completed”)

        Promise.race(( car1, car2, car3)).then (value => (
            Let result = \`$(value) the race.\`;
        )}
        .catch(arr => {
            console.log(“Race is cancelled.”, err);
        });
        What is the value of result when Promise.race executes?`, 
        answers: [
            { text: "Car 3 completes the race", correct: false },
            { text: "Car 2 completed the race.", correct: true },
            { text: "Car 1 crashed in the race.", correct: false },
            { text: "Race is cancelled.", correct: false }
        ]
    },
    {
        question: `Considering the implications of 'use strict' on line 04, which three statements describe
        the execution of the code?
        Choose 3 answers`, 
        answers: [
            { text: "'use strict' has an effect only on line 05.", correct: true },
            { text: "z is equal to 3.14.", correct: true },
            { text: "'use strict' has an effect between line 04 and theend of the file.", correct: false },
            { text: "Line 05 throws an error.", correct: true },
            { text: "'use strict' is hoisted, so it has an effect on all lines.", correct: false }
        ]
    },
    {
        question: `Given the code below:
        01 function GameConsole (name) {
        02     this.name = name;
        03 }
        04
        05 GameConsole.prototype.load = function(gamename) {
        06     console.log(\`$(this.name) is loading agame : $(gamename) ...\`);
        07 ) 
        08 function Console16Bit (name) {
        09     GameConsole.call(this, name) ;
        10 }
        11 Console16bit.prototype = Object.create (GameConsole.prototype) ;
        12 //insert code here
        13 console.log( \`$(this.name) is loading a cartridge game :$(gamename) ...\`);
        14 }
        15 const console16bit = new Console16bit(' SNEGeneziz ');
        16 console16bit.load(' Super Nonic 3x Force ');

        What should a developer insert at line 15 to output the following message using the method ?
        > SNEGeneziz is loading a cartridgegame: Super Monic 3x Force . . .`, 
        answers: [
            { text: "Console16bit.prototype.load = function(gamename) {", correct: true },
            { text: "Console16bit.prototype.load(gamename) {", correct: false },
            { text: "Console16bit =Object.create(GameConsole.prototype).load = function(gamename) {", correct: false },
            { text: "Console16bit.prototype.load(gamename) = function() {", correct: false }
        ]
    },
    {
        question: `A developer wants to set up a secure web server withNode.js. The developer creates a directory locally 
        called app-server, and the first file is app-server/index.js Without using any third-party libraries, 
        what should the developer add toindex.js to create the secure web server?`, 
        answers: [
            { text: "const http =require('http');", correct: false },
            { text: "const tls = require('tls');", correct: false },
            { text: "const https =require('https');", correct: true },
            { text: "const server =require('secure-server');", correct: false }
        ]
    },
    {
        question: `Teams at Universal Containers (UC) work on multiple JavaScript projects at the same time.
        UC is thinking about reusability and how each team can benefit from the work of others.
        Going open-source or public is not an option at this time.
        Which option is available to UC with npm?`, 
        answers: [
            { text: "Private registries are not supported by npm, but packages can be installed via git.", correct: false },
            { text: "Private registries are not supported by npm, but packages can be installed via URL.", correct: false },
            { text: "Private packages can be scored, and scopes can be associated to a private registries.", correct: true },
            { text: "Private packages are not supported, but they can use another package manager likeyarn.", correct: false }
        ]
    },
    {
        question: `Which three options show valid methods for creating a fat arrow function?
        Choose 3 answers`, 
        answers: [
            { text: "X,y,z => ( console.log(' executed ') ;)", correct: false },
            { text: "(x,y,z) => ( console.log(' executed ') ;)", correct: true },
            { text: "x =>( console.log(' executed ') ; )", correct: true },
            { text: "( ) => ( console.log(' executed ') ;)", correct: true },
            { text: "[ ] => ( console.log(' executed ') ;)", correct: false }
        ]
    },
    {
        question: `Which three options show valid methods for creating a fat arrow function?
        Choose 3 answers`, 
        answers: [
            { text: "X,y,z => ( console.log(' executed ') ;)", correct: false },
            { text: "(x,y,z) => ( console.log(' executed ') ;)", correct: true },
            { text: "x =>( console.log(' executed ') ; )", correct: true },
            { text: "( ) => ( console.log(' executed ') ;)", correct: true },
            { text: "[ ] => ( console.log(' executed ') ;)", correct: false }
        ]
    },
    {
        question: `A team that works on a bigproject uses npm to deal with projects dependencies.
        A developer added a dependency does not get downloaded when they execute npm install.
        Which two reasons could be possible explanations for this?
        Choose 2 answers`, 
        answers: [
            { text: "The developer missed the option --addwhen adding the dependency.", correct: false },
            { text: "The developer missed the option --save when adding the dependency.", correct: false },
            { text: "The developer added the dependency as a dev dependency, and NODE_ENVIs set to production.", correct: true },
            { text: "The developer added the dependency as a dev dependency, and NODE_ENV is set to production.", correct: true }
        ]
    },
    {
        question: `Refer to the code below:
        const exec = (item, delay) => {
            return new Promise(resolve => setTimeout(() => resolve(item), delay));
        };

        async function runParallel() {
            const [result1, result2, result3] = await Promise.all([
                exec('x', 100), 
                exec('y', 500), 
                exec('z', 100)
            ]);

            return \`parallel is done: \${result1}\${result2}\${result3}\`;
        }
        Which two statements correctly execute the runParallel () function?
        Choose 2 answers`, 
        answers: [
            { text: "runParallel().done(function(data){return data;});", correct: false },
            { text: "Async runParallel().then(data);", correct: false },
            { text: "runParallel().then(data);", correct: true },
            { text: "runParallel().then(function(data)return data", correct: true }
        ]
    },
    {
        question: `A developer is required to write a function that calculates the sum of elements in an array but is getting undefinedevery time the code is executed. The developer needs to find what is missing in the code below.
        Const sumFunction = arr => {
            Return arr.reduce((result, current) => {
                //
                Result += current;
                //
            ), 10);
        );
        Which option makes the code work as expected?`, 
        answers: [
            { text: "Replace line 04 with result = result +current;", correct: false },
            { text: "Replace line 05 with return result;", correct: true },
            { text: "Replace line02 with return arr.map(( result, current) => (", correct: false },
            { text: "Replace line 03 with if(arr.length == 0)(return 0; )", correct: false }
        ]
    },
    {
        question: `Which code statement below correctly persists an objects inlocal Storage?`, 
        answers: [
            { text: "const setLocalStorage = (storageKey, jsObject) => {window.localStorage.setItem(storageKey, JSON.stringify(jsObject));}", correct: true },
            { text: "const setLocalStorage = ( jsObject) =>{window.localStorage.connectObject(jsObject));}", correct: false },
            { text: "const setLocalStorage= ( jsObject) => {window.localStorage.setItem(jsObject);}", correct: false },
            { text: "const setLocalStorage = (storageKey, jsObject) => {window.localStorage.persist(storageKey, jsObject);}", correct: false }
        ]
    },
    {
        question: `A developer wants to leverage a module to print a price in pretty format, and has imported a method 
        as shown below:
        Import printPrice from '/path/PricePrettyPrint.js';
        Based on the code, what mustbe true about theprintPrice function of the PricePrettyPrint module for 
        this import to work ?`, 
        answers: [
            { text: "printPrice must be the default export", correct: true },
            { text: "printPrice must be an all export", correct: false },
            { text: "printPrice must be be a named export", correct: false },
            { text: "printPrice must be a multi exportc", correct: false }
        ]
    },
    // { // the questio is not accurate in choices
    //     question: `Refer to the code below:
    //     Const searchTest = 'Yay! Salesforce is amazing!" ;
    //     Let result1 = searchText.search(/sales/i);
    //     Let result 21 = searchText.search(/sales/i);
    //     console.log(result1);
    //     console.log(result2);
    //     After running this code, which result is displayed on the console?`, 
    //     answers: [
    //         { text: "> 5 > -1", correct: true },
    //         { text: "> true > false", correct: false },
    //         { text: "> 5>undefined", correct: false },
    //         { text: "> 5 > 0", correct: false }
    //     ]
    // },
    {
        question: `Which code statement correctly retrieves and returns an object from localStorage?`, 
        answers: [
            { text: "const retrieveFromLocalStorage = (storageKey) =>{return window.localStorage.getItem(storageKey);}", correct: false },
            { text: "const retrieveFromLocalStorage = () =>{return JSON.stringify(window.localStorage.getItem(storageKey));}", correct: false },
            { text: "constretrieveFromLocalStorage = (storageKey) =>{return window.localStorage[storageKey];}", correct: false },
            { text: "const retrieveFromLocalStorage = (storageKey) =>{return JSON.parse(window.localStorage.getItem(storageKey));}", correct: true }
        ]
    },
    {
        question: `Refer to the code below:

        function changeValue(param) {
            Param =5;
        }
        Let a =10;
        Let b =5;
        changeValue(b);
        Const result = a+ “ – ”+ b;
        What is the value of result when code executes?`, 
        answers: [
            { text: "10 - 10", correct: false },
            { text: "5 - 5", correct: false },
            { text: "5 - 10", correct: false },
            { text: "10 - 5", correct: true }
        ]
    },
    {
        question: `Given two expressions var1 and var2. What are two valid ways to return the logical AND 
        of the two expressions and ensure it is data type Boolean ?
        Choose 2 answers:`, 
        answers: [
            { text: "Boolean(var1) && Boolean(var2)", correct: true },
            { text: "Boolean(var1 && var2)", correct: true },
            { text: "var1.toBoolean() && var2toBoolean()", correct: false },
            { text: "var1 && var2", correct: false }
        ]
    },
    {
        question: `Whichthree actions can be using the JavaScript browser console?
        Choose 3 answers:`, 
        answers: [
            { text: "Run code that is not related to page", correct: false },
            { text: "Display a report showing the performance of a page.", correct: true },
            { text: "View and change DOM the page.", correct: true },
            { text: "View and change security cookies.", correct: false },
            { text: "view , change, and debug the JavaScript code ofthe page.", correct: true }
        ]
    },
    {
        question: `A developer uses a parsed JSON string to work with user information as in the block below:
        01 const userInformation ={
        02 " id " : "user-01",
        03"email" : "user01@universalcontainers.demo",
        04 "age" : 25
        Which two options access the email attribute in the object?
        Choose 2 answers`, 
        answers: [
            { text: "userInformation[\"email\"]", correct: true},
            { text: "userInformation.email", correct: true },
            { text: "userInformation.get(\"email\")", correct: false},
            { text: "userInformation(email)", correct: false }
        ]
    },
    {
        question: `Which option istrue about the strict mode in imported modules?`, 
        answers: [
            { text: "You can only reference notStrict() functions from the imported module.", correct: false},
            { text: "Add the statement use non-strict, before any other statements in the module to enablenot-strict mode.", correct: false },
            { text: "Imported modules are in strict mode whether you declare them as such or not.", correct: true},
            { text: "Add the statement use strict =false; before any other statements in the module to enablenot- strict mode.", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
        let sayHello = () => {
            console.log ('Hello, world!');
        };
        Which code executes sayHello once, two minutes from now?`, 
        answers: [
            { text: "setInterval(sayHello, 12000);", correct: false},
            { text: "setTimeout(sayHello, 12000);", correct: true },
            { text: "delay(sayHello, 12000);", correct: false},
            { text: "setTimeout(sayHello(), 12000);", correct: false }
        ]
    },
    {
        question: `GIven a value, which three options can a developeruse to detect if thevalue is NaN?
        Choose 3 answers !`, 
        answers: [
            { text: "value == NaN", correct: false},
            { text: "value ! == value", correct: true },
            { text: "Number.isNaN(value)", correct: true},
            { text: "Object.is(value, NaN)", correct: true },
            { text: "Object.is(value, NaN)", correct: false }
        ]
    },
    {
        question: `Refer to the following code block:
        class Student {
            constructor(name) {
                this.name = name;
            }

            takeTest() {
                console.log(\`\${this.name} got 70% on test.\`);
            }
        }
        class BetterStudent extends Student {
            constructor(name) {
                super(name);
                this.name = 'Better student ' + name;
            }

            takeTest() {
                console.log(\`\${this.name} got 100% on test.\`);
            }
        }
        let student = new BetterStudent('Jackie');
        student.takeTest();

        What is the console output?`, 
        answers: [
            { text: "> Better student Jackie got 70% on test.", correct: false},
            { text: "> Better student Jackie got 100% ontest.", correct: true },
            { text: "> Jackie got 70% on test.", correct: false},
            { text: "> Uncaught Reference Error", correct: false }
        ]
    },
    {
        question: `Given the code below:
        const copy = JSON.stringify([ newString(' false '), new Bollean( false ), undefined ]); 
        What is the value of copy?`, 
        answers: [
            { text: " -- [ \"false\" , false, undefined ]-- ", correct: false},
            { text: "-- [ \"false\" ,false, null ]--", correct: true },
            { text: "-- [ false, { } ]--", correct: false},
            { text: "-- [ \"false\" , { } ]--", correct: false }
        ]
    },
    {
        question: `Refer to HTML below:
        &lt;p&gt; The current status of an Order: &lt;span id ="status"&gt; In Progress &lt;/span&gt; &lt;/p&gt;.

        Which JavaScript statement changes thetext 'In Progress' to 'Completed' ?`, 
        answers: [
            { text: "document.getElementById(\"status\").Value = 'Completed' ;", correct: false},
            { text: "document.getElementById(\"status\").innerHTML = 'Completed' ;", correct: true },
            { text: "document.getElementById(\".status\").innerHTML = 'Completed' ;", correct: false},
            { text: "document.getElementById(\"#status\").innerHTML = 'Completed' ;", correct: false }
        ]
    },
    {
        question: `Refer tothe code below:
        function Person() {
            this.firstName = 'John';
        }
        Person.prototype = {
            job: x => 'Developer'
        };
        const myFather = new Person();
        const result = myFather.firstName + ' . ' + myFather.job();

        What is the value of result after line 10 executes?`, 
        answers: [
            { text: "undefined Developer", correct: false},
            { text: "John Developer", correct: false },
            { text: "Error: myFather.job is not a function", correct: true},
            { text: "John undefined", correct: false }
        ]
    },
    {
        question: `A developer needs to test this function:
        const sum3 = (arr) => {
            if(!arr.length){
                return 0;
            }
            if(arr.length === 1){ 
                return arr[0] 
            }
            if(arr.length === 2) {
                return arr[0]+ arr[1];
            }
            return arr[0] + arr[1] + arr[2];
        }
        Which two assert statements are valid tests for the function?
        Choose 2 answers`, 
        answers: [
            { text: "console.assert(sum3([1, '2'])) == 12);", correct: true},
            { text: "console.assert(sum3([-3, 2])) == -1);", correct: true },
            { text: "console.assert(sum3(0)) == 0);", correct: false},
            { text: "console.assert(sum3('hello', 2, 3, 4)) === NaN);", correct: false }
        ]
    },
    {
        question: `In the browser, the window object is often used to assign variables that require the broadest scope 
        in an application Node.js application does not have access to the window object by default.
        Which two methods are used to address this ?
        Choose 2 answers`, 
        answers: [
            { text: "Create a new window object in the root file.", correct: false},
            { text: "Assign variables to the global object.", correct: true },
            { text: "Assign variables to module.exports and require them as needed.", correct: false},
            { text: "Use the document object instead of the window object.", correct: false }
        ]
    },
    {
        question: `Which javascript methods can be used to serialize an object into a string and deserialize a JSON string into
        an object, respectively?`, 
        answers: [
            { text: "JSON.stringify and JSON.parse", correct: true},
            { text: "JSON.encode and JSON.decode", correct: false },
            { text: "JSON.serialize and JSON.deserialize", correct: false},
            { text: "JSON.parse and JSON.deserialize", correct: false }
        ]
    },
    {
        question: `A developer creates a generic function to log custom messages in the console. To do this, the function below is implemented.
        01 function logStatus(status){
        02 console./*Answer goes here*/{'Item status is: %s', status};
        03 }
        Which three console logging methods allow the use of string substitution in line 02?`, 
        answers: [
            { text: "Log", correct: true},
            { text: "Assert", correct: false },
            { text: "info", correct: true},
            { text: "Message", correct: false },
            { text: "Error", correct: true }
        ]
    },
    {
        question: `A developer creates an object where its properties should be immutable and prevent 
        properties from being added or modified.
        Which method should be used to execute this business requirement ?`, 
        answers: [
            { text: "Object.const()", correct: false},
            { text: "Object.lock()", correct: false },
            { text: "Object.freeze()", correct: true},
            { text: "Object.eval()", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
        Let textValue = '1984';
        Which code assignment shows a correct way to convert this string to an integer?`, 
        answers: [
            { text: "Let numberValue = Integer(textValue);", correct: false},
            { text: "let numberValue = Number(textValue);", correct: true },
            { text: "Let numberValue = textValue.toInteger();", correct: false},
            { text: "Let numberValue = (Number)textValue;", correct: false }
        ]
    },
    {
        question: `Considering type coercion, what does the following expression evaluate to?
        True + '13' + NaN`, 
        answers: [
            { text: "' true13 '", correct: false},
            { text: "' true13NaN '", correct: false},
            { text: "14", correct: false},
            { text: " ' 113NaN '", correct: true }
        ]
    },
    {
        question: `A developer is debugging a web server that uses Node.js The server hits a runtimeerror every third 
        request to an important endpoint on the web server.
        The developer added a break point to the start script, that is at index.js at he root of the server's source code.
        The developer wants to make use of chrome DevTools to debug.

        Which command can be run to access DevTools and make sure the breakdown is hit ?`, 
        answers: [
            { text: "Node --inspect-brk index.js", correct: true},
            { text: "node -i index.js", correct: false},
            { text: "Node inspect index.js", correct: false},
            { text: "Node --inspect index.js", correct: false }
        ]
    },
    {
        question: `A developer is debugging a web server that uses Node.js The server hits a runtimeerror every third 
        request to an important endpoint on the web server.
        The developer added a break point to the start script, that is at index.js at he root of the server's source code.
        The developer wants to make use of chrome DevTools to debug.

        Which command can be run to access DevTools and make sure the breakdown is hit ?`, 
        answers: [
            { text: "Node --inspect-brk index.js", correct: true},
            { text: "node -i index.js", correct: false},
            { text: "Node inspect index.js", correct: false},
            { text: "Node --inspect index.js", correct: false }
        ]
    },
    {
        question: `A test has a dependency on database.query. During the test the dependency is replaced with an object called 
        database with the method, query, that returns an array. The developer needs to verify how many times the method was 
        called and the arguments used each time.
        Which two test approaches describe the requirement?
        Choose 2 answers`, 
        answers: [
            { text: "Integration", correct: false},
            { text: "Mocking", correct: true},
            { text: "Black box", correct: false},
            { text: "White box", correct: true }
        ]
    },
    {
        question: `Consider type coercion, what does the following expression evaluate to?
        True + 3 + '100' + null`, 
        answers: [
            { text: "'3100null'", correct: false},
            { text: "4100", correct: false},
            { text: "104", correct: false},
            { text: "'4100null'", correct: true }
        ]
    },
    {
        question: `developer creates a new web server that uses Node.js. It imports a server library that uses events and 
        callbacks for handling server functionality.
        The server library is imported with require and is made available to the code by a variable named server. 
        The developer wants to log any issues that the server has while booting up.
        Given the code and the information the developer has, which code logs an error at boost with an event?`, 
        answers: [
            { text: `Try{
                        server.start();
                    } catch(error) {
                        console.log('ERROR', error);
                    }`, correct: false},
            { text: `Server.error ((server) => {
                        console.log('ERROR', error);
                    });`, correct: false},
            { text: `Server.on ('error', (error) => {
                        console.log('ERROR', error);
                    });`, correct: true},
            { text: `Server.catch ((server) => {
                        console.log('ERROR', error);
                    });`, correct: false }
        ]
    },
    {
        question: `A developer has the following array of student test grades:
        Let arr = [ 7, 8, 5, 8, 9 ];
        The Teacher wants to double each score and then see an array of the students who scored more than 15 points.
        How should the developer implement the request?`, 
        answers: [
            { text: "Let arr1 = arr.mapBy (( num) => ( return num *2 )) .filterBy (( val ) => return val > 15 )) ;", correct: false},
            { text: "Let arr1 = arr.filter(( val) => ( return val > 15 )) .map (( num) => ( return num *2 ))", correct: false},
            { text: "Let arr1 = arr.map((num) => num*2). Filter (( val) => val > 15);", correct: true},
            { text: "Let arr1 = arr.map((num) => ( num *2)).filterBy((val) => ( val >15 ));", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
        new Promise((resolve, reject) => {
        const fraction = Math.random();
        if( fraction >0.5) reject("fraction > 0.5, " + fraction);
            resolve(fraction);
        })
        .then(() =>console.log("resolved"))
        .catch((error) => console.error(error))
        .finally(() => console.log(" when am I called?"));

        When does Promise.finally on line 08 get called?`, 
        answers: [
            { text: "WHen resolved", correct: false},
            { text: " When rejected", correct: false},
            { text: "When resolved and settled", correct: false},
            { text: "When resolved or rejected", correct: true }
        ]
    },
    {
        question: `A developer has code that calculates a restaurant bill, but generates incorrect answers while testing the code:
        function calculateBill ( items ) {
            let total = 0;
            total += findSubTotal(items);
            total += addTax(total);
            total += addTip(total);
            return total;
        }
        Which option allows the developer to step into each function execution within calculateBill?`, 
        answers: [
            { text: "Using the debugger command on line 05.", correct: false},
            { text: "Calling the console.trace (total) method on line 03.", correct: false},
            { text: "Wrapping findSubtotal in a console.log() method.", correct: false},
            { text: "Using the debugger command on line 03", correct: true }
        ]
    },
    {
        question: `Refer to following code block:
        Let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,];
        Let output =0;
        For (let num of array){
            if (output >0){
                Break;
            }
            if(num % 2 == 0){
                Continue;
            }
            Output +=num;
        }
        What is the value of output after the code executes?`, 
        answers: [
            { text: "16 answer of freecram", correct: true},
            { text: "36", correct: false},
            { text: "11", correct: false},
            { text: "25", correct: false },
            { text: "The answer should be 1 when run in console", correct: true }
        ]
    },
    {
        question: `Refer to the following code:
        Let sampleText = 'The quick brown fox jumps';
        A developer needs to determine if a certain substring is part of a string.
        Which three expressions return true for the given substring ?
        Choose 3 answers`, 
        answers: [
            { text: "sampleText.includes('fox');", correct: true},
            { text: "sampleText.includes(' quick ', 4);", correct: false},
            { text: "sampleText.includes(' fox ');", correct: true},
            { text: "sampleText.includes(' Fox ', 3)", correct: false },
            { text: "sampleText.includes(' quick ') !== -1;", correct: true }
        ]
    },
    {
        question: `The developer wants to test this code:
        Const toNumber =(strOrNum) => strOrNum;
        Which two tests are most accurate for this code?
        Choose 2 answers`, 
        answers: [
            { text: "console.assert(toNumber () === NaN);", correct: false},
            { text: "console.assert(toNumber('-3') < 0);", correct: true},
            { text: "console.assert(toNumber('2') === 2);", correct: true},
            { text: "console.assert(Number.isNaN(toNumber()));", correct: false }
        ]
    },
    {
        question: `Refer to the following code:
        function test (val) {
            If (val === undefined) {
                return 'Undefined values!' ;
            }
            if (val === null) {
                return 'Null value! ';
            }
            return val;
        }
        Let x;
        test(x);
        What is returned by the function call on line 13?`, 
        answers: [
            { text: "'Undefined values!'", correct: true},
            { text: "Undefined", correct: false},
            { text: "'Null value!'", correct: false},
            { text: "Line 13 throws an error.", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
        Const pi = 3.1415326,
        What is the data type of pi?`, 
        answers: [
            { text: "Float", correct: false},
            { text: "Number", correct: true},
            { text: "Double", correct: false},
            { text: "Decimal", correct: false }
        ]
    },
    {
        question: `Refer to code below:
        Let a ='a';
        Let b;
        // b = a;
        console.log(b);
        What is displayed when the code executes?`, 
        answers: [
            { text: "Null", correct: false},
            { text: "Undefined", correct: true},
            { text: "ReferenceError: b is not defined", correct: false},
            { text: "A", correct: false }
        ]
    },
    {
        question: `Which three browser specific APIs are available for developers to persist data between page loads ?
        Choose 3 answers`, 
        answers: [
            { text: "Cookies", correct: true},
            { text: "localStorage", correct: true},
            { text: "Global variables", correct: false},
            { text: "IIFEs", correct: false },
            { text: "indexedDB", correct: true }
        ]
    }                                                                                               
];
//&lt;div&gt;
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}
//test
shuffleQuestions();

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
// function showQuestion(){
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex +1;
//     questionElement.innerHTML = questionNo + ". "+currentQuestion.question;

//     currentQuestion.answers.forEach(answer =>{
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click",selectAnswer);
//     })
// }
// function showQuestion() {
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//     // Shuffle answers array to randomize order
//     let shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

//     shuffledAnswers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");

//         // const pre = document.createElement("p"); // Create <pre> element
//         // pre.textContent = answer.text;
        
//         // button.classList.add("btn");
//         // button.appendChild(pre);


//         answerButtons.appendChild(button);
//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     });
// }
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Shuffle answers array to randomize order
    let shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        // Add event listener to select an answer
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct")
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect")
//     }
//     Array.from(answerButtons.children).forEach(button=>{
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     })
//     nextButton.style.display = "block";//it will show the next button if you click 1 answer button
// }
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Toggle selected state and mark answer as correct or incorrect
    if (selectedBtn.classList.contains('selected')) {
        selectedBtn.classList.remove('selected');
        if (isCorrect) {
            selectedBtn.classList.remove('correct');
        } else {
            selectedBtn.classList.remove('incorrect');
        }
    } else {
        selectedBtn.classList.add('selected');
        if (isCorrect) {
            selectedBtn.classList.add('correct');
        } else {
            selectedBtn.classList.add('incorrect');
        }
    }

    // Check if the user has selected all correct answers
    const correctAnswers = Array.from(answerButtons.children).filter(button => button.dataset.correct === "true");
    const selectedAnswers = Array.from(answerButtons.children).filter(button => button.classList.contains('selected'));
    const selectedCorrectAnswers = Array.from(answerButtons.children).filter(button => button.classList.contains('selected') && button.dataset.correct === "true");

    if(selectedAnswers.length == 3 && correctAnswers.length == 3){
        //nextButton.style.display = "block";//comment this out to directly next the question
            // If all correct answers are selected, enable the "Next" button
        if (correctAnswers.length === selectedCorrectAnswers.length) {
            score++;
        }
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        setTimeout(function() {
            handledNextButton();//put this to directly next the question
        }, 1000);
    }else if(selectedAnswers.length == 2 && correctAnswers.length == 2){
        //nextButton.style.display = "block";//comment this out to directly next the question
            // If all correct answers are selected, enable the "Next" button
        if (correctAnswers.length === selectedCorrectAnswers.length) {
            score++;
        }
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        setTimeout(function() {
            handledNextButton();//put this to directly next the question
        }, 1000);
    }else if(correctAnswers.length == 1){
        //nextButton.style.display = "block";//comment this out to directly next the question
        if (isCorrect) {
            score++;
        }
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        setTimeout(function() {
            handledNextButton();//put this to directly next the question
        }, 2000);
        
    }else {
        nextButton.style.display = "none"; // Hide the "Next" button if not all correct answers are selected
    }
}
function  showScore(){
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function  handledNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handledNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();