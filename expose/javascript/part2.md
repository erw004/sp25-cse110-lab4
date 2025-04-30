1. `3` will be printed because we print `i` on line 12, which has keyword `var` and during the `for` loop was incremented from 0 until it was no longer less than `prices.length`, which is 3 since we input `[100, 200, 300]` as `prices` in our function call.
   
2. `150` since `discountedPrice` has keyword `var` and keeps getting reassigned inside the `for` loop. So, in the last step of the `for` loop, `i = 2` since `prices.length = 3` and since `discount` is `0.5`, we calculate `discountedPrice = prices[2] * (1 - discount) = 300 * (1 - 0.5) = 150`.

3. `150`. We can use `discountedPrice` before to help us find our answer. Since `finalPrice`, like `discountedPrice`, keeps getting reassigned inside the `for` loop, on the last step, when `i = 2`, `finalPrice` is calculated as `finalPrice = Math.round(discountedPrice * 100) / 100 = Math.round(150 * 100) / 100 = 15000 / 100 = 150`.
   
4. `[ 50, 100, 150 ]`. At each step of the `for` loop, we push `finalPrice` to `discounted`, where `finalPrice = Math.round(discountedPrice * 100) / 100;` and `discountedPrice = prices[i] * (1 - discount);`. So, when we go through each step of the `for` loop, at `i = 0`, `discountedPrice = prices[0] * (1 - discount) = 100 * (1 - 0.5) = 50` and so `finalPrice = Math.round(discountedPrice * 100) / 100 = Math.round(50 * 100) / 100 = 5000 / 100 = 50`, which means `50` is pushed to `discounted` and `discounted` becomes `[ 50 ]`.

At `i = 1`, `discountedPrice = prices[1] * (1 - discount) = 200 * (1 - 0.5) = 100` and so `finalPrice = Math.round(discountedPrice * 100) / 100 = Math.round(100 * 100) / 100 = 10000 / 100 = 100`, which means `100` is pushed to `discounted` and `discounted` becomes `[ 50, 100 ]`.

At `i = 2`, `discountedPrice = prices[2] * (1 - discount) = 300 * (1 - 0.5) = 150` and so `finalPrice = Math.round(discountedPrice * 100) / 100 = Math.round(150 * 100) / 100 = 15000 / 100 = 150`, which means `150` is pushed to `discounted` and `discounted` becomes `[ 50, 100, 150 ]`.

5. Error. `i` no longer has keyword `var`, so its scope is kept to just the `for` loop. So, since line 12 is outside the `for` loop, `i` is unrecognized.

6. Error. Same idea as #5, since `discountedPrice` no longer has keyword `var`, its scope is just the `for` loop, which line 13 is outside of.

7. `150` since nothing really changed from #4 since `finalPrice` was declared and defined in the same scope as line 14 and the `for` loop updates `finalPrice` the same as before because its being updated within the scope of the variables we were discussing in #5 and #6.

8. `[ 50, 100, 150 ]`. Same reasoning as #7 in that `finalPrice` behavior should not change from before and we still append the same calculated values to `discounted` as we did in #4.

9. Error. same exact thing as #5. We have keyword `let` for `i` and thus its bound is just the `for` loop, which line 11 is not in the scope, so line 11 attempts to access `i`, which is out of scope.

10. `3`. `length` is defined as `prices.length` and since `prices` is an array of length 3, `length` becomes 3 and we print it.

11. `[ 50, 100, 150 ]`. Same parameters as #8 except we take out the logic for `finalPrice`, which just multiplied everything by 100, rounded, and then divided by 100. Since `discountedPrice` was only whole numbers, `finalPrice` is the same as `discountedPrice` because there was nothing to round really and multiplying by 100 and dividing by 100 doesn't really do anything. So, we just end up with the same array because `discountedPrice` is the same as `finalPrice` in #8.

12. 
    A - `student.name`
    
    B - `student['Grad Year']`
    
    C - `student.greeting()`
    
    D - `student['Favorite Teacher'].name`
    
    E - `student.courseLoad[0]`

13. 
    A - `32` since `'3'` is a string and when we add `2`, it treats the whole thing as a string, appending `'2'`.

    B - `1` since even though `'3'` is a string, because there is subtraction, `'3'` is treated as a number, leading to 3 - 2 = 1.

    C - `3`. `null` becomes `0` because we had `3` come first and then addition, making it 3 + 0 = 3.

    D - `3null`. `null` gets interpreted as a string because `'3'` is. So, `'null'` gets appended to `'3'`, becoming `3null`.

    E - `4`. `true` gets converted to a number, more specifically `1`. So, 1 + 3 = 4.

    F - `0`. Both get converted to numbers and they both correspond to 0, so 0 + 0 = 0.

    G - `3undefined`. Same idea as D but `undefined` is converted to `'undefined'`.

    H - `NaN` since both `'3'` and `undefined` convert to numbers, but `undefined` becomes `NaN`, leading to the whole expression resulting in `NaN`.

14. .
    A - `true`. Both are treated as numbers and 2 is > 1.

    B - `false`. Both are compared as strings and since `'2'` is lexicographically > `'12'`, it is false.

    C - `true`. Both are treated as numbers and thus are the same value of 2.

    D - `false`. One is a number, the other is a string, so false.

    E - `false`. `true` is converted to 1, which isn't a 2.

    F - `true`. `Boolean(2)` is `true` since 2 is converted to a boolean and any value != 0 is considered `true`. Therefore, `true` is `true`, so `true`.

15. The difference between `==` and `===` is that `==` changes the type of what's being compared to a common type and then compares them while `===` takes the things being compared as they are.


17. `[ 2, 4, 6 ]`. We call `modifyArray()` with parameters `array = [1,2,3]` and `callback = doSomething()`. `doSomething()` returns twice whatever you pass into it and so when we iterate through the `for` loop in `modifyArray()`, we push twice the value of `array[i]` into `newArr`.

When `i = 0`, we push `callback(array[0]) = doSomething(array[0]) = doSomething(1) = 1 * 2 = 2` into `newArr`. Now, `newArr` becomes `[ 2 ]`.

When `i = 1`, we push `callback(array[1]) = doSomething(array[1]) = doSomething(2) = 2 * 2 = 4` into `newArr`. Now, `newArr` becomes `[ 2, 4 ]`.

When `i = 2`, we push `callback(array[2]) = doSomething(array[2]) = doSomething(3) = 3 * 2 = 6` into `newArr`. Now, `newArr` becomes `[ 2, 4, 6 ]`.

Then, the `for` loop stops because `i` is no longer < `array.length` or 3. So, in the end, we return `newArr`, which is `[ 2, 4, 6 ]`
