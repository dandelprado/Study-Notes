---
title: "Midterm Activity 1 - Polynomial Interpolation"
author: "Dan S. del Prado"
date: "2024-10-10"
---

### Lagrange Interpolation for \( f(7) \)

$$
\begin{aligned}
x_0 &= 1, & f(x_0) &= 12 \\
x_1 &= 5, & f(x_1) &= -26 \\
x_2 &= 8, & f(x_2) &= -14 \\
x_3 &= 10, & f(x_3) &= 37 \\
\end{aligned}
$$

Lagrange interpolation formula:

$$
f(x) = \sum_{i=0}^{3} f(x_i) \cdot L_i(x)
$$

Where:

$$
L_i(x) = \prod_{j=0, j \neq i} \frac{x - x_j}{x_i - x_j}
$$

### Calculate $L_i(7)$

#### $L_0(7)$:

$$
L_0(7) = \frac{(7 - 5)(7 - 8)(7 - 10)}{(1 - 5)(1 - 8)(1 - 10)} = \frac{(2)(-1)(-3)}{(-4)(-7)(-9)} = \frac{6}{252} = \frac{1}{42}
$$

#### $L_1(7)$:

$$
L_1(7) = \frac{(7 - 1)(7 - 8)(7 - 10)}{(5 - 1)(5 - 8)(5 - 10)} = \frac{(6)(-1)(-3)}{(4)(-3)(-5)} = \frac{18}{60} = \frac{3}{10}
$$

#### $L_2(7)$:

$$
L_2(7) = \frac{(7 - 1)(7 - 5)(7 - 10)}{(8 - 1)(8 - 5)(8 - 10)} = \frac{(6)(2)(-3)}{(7)(3)(-2)} = \frac{-36}{-42} = \frac{6}{7}
$$

#### $L_3(7)$:

$$
L_3(7) = \frac{(7 - 1)(7 - 5)(7 - 8)}{(10 - 1)(10 - 5)(10 - 8)} = \frac{(6)(2)(-1)}{(9)(5)(2)} = \frac{-12}{90} = -\frac{2}{15}
$$

### Calculate $f(7)$

The interpolation formula is:

$$
f(7) = f(x_0) \cdot L_0(7) + f(x_1) \cdot L_1(7) + f(x_2) \cdot L_2(7) + f(x_3) \cdot L_3(7)
$$

Substitute the values:

$$
f(7) = 12 \cdot \frac{1}{42} + (-26) \cdot \frac{3}{10} + (-14) \cdot \frac{6}{7} + 37 \cdot \left( -\frac{2}{15} \right)
$$

### Simplify

Each term evaluates as follows:

$$
\begin{aligned}
12 \cdot \frac{1}{42} &= \frac{12}{42} = \frac{2}{7} \approx 0.28571 \\
-26 \cdot \frac{3}{10} &= -\frac{78}{10} = -7.8 \\
-14 \cdot \frac{6}{7} &= -12 \\
37 \cdot \left( -\frac{2}{15} \right) &= -\frac{74}{15} \approx -4.93333 \\
\end{aligned}
$$

Which adds to:

$$
f(7) = 0.28571 - 7.8 - 12 - 4.93333
$$

$$
f(7) \approx -24.44762
$$

