1. The bug is that `calculateSum()` is adding `num1` and `num2` together, which are both strings. Therefore, instead of adding the values numerically, the strings are concatenated.

2. I would fix it by parsing `num1` and `num2` as numbers.
