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
