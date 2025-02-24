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
            { text: "0 0 1 2", correct: true },
            { text: "0 1 2 3", correct: false },
            { text: "0 1 1 2", correct: false }
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

        <button>Checkout</button>.

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
        <div id="main">
            <ul>
                <li>Leo</li>
                <li>Tony</li>
                <li>Tiger</li>
            </ul>
        </div>
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
    // {//number 88 in FreeCram
    //     question: `Refer to the following code:
    //     01 class Ship {
    //     02     constructor(size) {
    //     03         this.size = size;
    //     04      }
    //     05 }
    //     06
    //     07 class FishingBoat extends ship {
    //     08      constructor(size, capacity) {
    //     09          //missing code
    //     10          this.capacity = capacity;
    //     11      }
    //     12      displayCapacity() {
    //     13          console.log('The boat has a capacity of ${this.capacity} people.');
    //     14      }
    //     15 }
    //     16
    //     17 let myBoat = new FishingBoat('medium', 10);
    //     18 myBoat.displayCapacity();

    //     Which statement should be added to line 09 for the code to display. The boat has a capacity of 10 people?`,
    //     answers: [
    //         { text: "super.size = size;", correct: false },
    //         { text: "this.size = size;", correct: false },
    //         { text: "super(size);", correct: true },
    //         { text: "ship.size size;", correct: false }
    //     ]
    // },
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
    }                                       
];
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