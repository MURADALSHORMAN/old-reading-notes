# ORDER OF EXECUTION
To find the source of an error, it helps to know how scripts are processed.The order in which statements are executed can be complex; some tasks
cannot complete until another statement or function has been run:

![](https://github.com/MURADALSHORMAN/reading-notes/blob/main/order1.JPG)

## EXECUTION CONTEXTS
The JavaScript interpreter uses the concept of execution contexts. There is one global execution context; plus, each function creates a new
new execution context. They correspond to variable scope.

1. GLOBAL CONTEXT
Code that is in the script, but not in a function.There is only one global context in any page.
2. FUNCTION CONTEXT
Code that is being run within a function.Each function has its own function context.
3. EVAL CONTEXT (NOT SHOWN)
Text is executed like code in an internal functioncalled 

### EXECUTION CONTEXT & HOISTING
Each time a script enters a new execution context, there are two phases of activity:

PREPARE
• The new scope is created
• Variables, functions, and arguments are created
• The value of the this keyword is determined

EXECUTE
• Now it can assign values to variables
• Reference functions and run their code
• Execute statements

### HOW TO DEAL WITH ERRORS

Now that you know what an error is and how the browser treats them,there are two things you can do with the errors.
1: DEBUG THE SCRIPT TO FIX ERRORS
If you come across an error while writing a script(or when someone reports a bug), you will need to debug the code, track down the source of the error,
and fix it.

2: HANDLE ERRORS GRACEFULLY
You can handle errors gracefully using try, catch,throw, and f i na 1 ly statements.

BROWSER DEV TOOLS & JAVASCRIPT CONSOLE
The JavaScript console will tell you when there is a problem with a script, where to look for the problem, and what kind of issue it seems to be.




