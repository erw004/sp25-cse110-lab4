1. `values added:  20`
2. `final result:  20`
3. You should not use `var` because you will be able to access certain variables in totally different scopes. In the screenshot above, we wouldn't want to access `result` since its scope should just be within the if statement block if the condition is `true`, which could lead to several issues like ambiguity in variable names if we happen to have another variable named `result` in the scope.
4. `values added:  20`
5. Error. On line 13, we reference `result`, but since we used `let` instead of `var` and defined `result` in a different scope, the variable name `result` is unknown on line 13.
6. Error. Since we declare and define `result` with `const result = 0;` on line 5, when `result` is reassigned with `result = num1 + num2;` on line 7, this breaks the rule that variables with the `const` keyword cannot be reassigned values. 
7. Since there was an error earlier, nothing is printed on line 13 because the program already stopped.
