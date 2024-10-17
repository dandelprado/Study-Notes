# Lagrange Interpolating Polynomial
- polynomial with degree $n$ that passes through a point $(x_0, y_0), (x_1, y_1), \cdots, (x_n, y_n)$
- defined mathematically as

$$
f_n(x) = \sum_{i=0}^{n} L_i(x) f(x_i)
$$

Where:

$$
L_i(x) = \prod_{\substack{j=0 \\ j \neq i}}^{n} \frac{x - x_j}{x_i - x_j}
$$



#### Problem # 1

Determine the value of $f(7)$ for a given set of data below using the alternative cubic spline interpolation method. $x$ should be in increasing number. 

| $x$ | $f(x)$ |
|-----|--------|
| 1   | 12     |
| 5   | -26    |
| 8   | -14    |
| 10  | 37     |

$$
\begin{aligned}
f_3(x) = f{x_0} (\frac{(x-x_1)(x-x_2)(x-x_3)}{(x_0-x_1)(x_0-x_2)(x_0-x_3)} \\
+ f{x_1} (\frac{(x-x_0)(x-x_2)(x-x_3)}{(x_1-x_0)(x_1-x_2)(x_1-x_3)} \\
+ f{x_2} (\frac{(x-x_0)(x-x_1)(x-x_3)}{(x_2-x_0)(x_2-x_1)(x_2-x_3)} \\
+ f{x_3} (\frac{(x-x_0)(x-x_1)(x-x_2)}{(x_3-x_0)(x_3-x_1)(x_3-x_2)}
\end{aligned}
$$

$$
\begin{aligned}
f_3(7) = 12 (\frac{(7-5)(7-8)(7-10)}{(1-5)(1-8)(1-10)}) \\
+ -26 (\frac{(7-1)(7-8)(7-10)}{(5-1)(5-8)(5-10)} \\
+ -14 (\frac{(7-1)(7-5)(7-10)}{(8-1)(8-5)(8-10)} \\
+ 37 (\frac{(7-1)(7-5)(7-8)}{(10-1)(10-5)(10-8)}
\end{aligned}
$$

$$
\begin{aligned}
f_3(7) = 12 (\frac{(2)(-1)(-3)}{(-4)(-7)(-9)}) \\
+ -26 (\frac{(6)(-1)(-3)}{(4)(-3)(-5)} \\
+ -14 (\frac{(6)(2)(-3)}{(7)(3)(-2)} \\
+ 37 (\frac{(6)(2)(-1)}{(9)(5)(2)}
\end{aligned}
$$

$$
\begin{aligned}
f_3(7) = -0.28571 -7.8 - 12 -4.93333 \\
f_3(7) = -25.01904
\end{aligned}
$$
