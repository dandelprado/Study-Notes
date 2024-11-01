# Lagrange Interpolation Polynomial


| $x$  | $f(x)$  |
|------|---------|
| 308.6| 0.055389|
| 362.6| 0.047485|
| 423.3| 0.40914 |
| 491.4| 0.035413|


$$
\begin{aligned}
f_3(400) = f{x_0}(\frac{(x-x_1)(x-x_2)(x-x_3)}{(x_0-x_1)(x_0-x_2)(x_0-x_3)}) \\
+ f{x_1} (\frac{(x-x_0)(x-x_2)(x-x_3)}{(x_1-x_0)(x_1-x_2)(x_1-x_3)}) \\
+ f{x_2} (\frac{(x-x_0)(x-x_1)(x-x_3)}{(x_2-x_0)(x_2-x_1)(x_2-x_3)}) \\
+ f{x_3} (\frac{(x-x_0)(x-x_1)(x-x_2)}{(x_3-x_0)(x_3-x_1)(x_3-x_2)})
\end{aligned}
$$


$$
\begin{aligned}
f_3(400) = 0.055389(\frac{(400-362.6)(400-423.3)(400-491.4)}{(308.6-362.6)(308.6-423.3)(308.6-491.4)}) \\
+ 0.047485 (\frac{(400-308.6)(400-423.3)(400-491.4)}{(362.6-308.6)(362.6-423.3)(362.6-491.4)}) \\
+ 0.040914 (\frac{(400-308.6)(400-362.6)(400-491.4)}{(423.3-308.6)(423.3-362.6)(423.3-491.4)}) \\
+ 0.035413 (\frac{(400-308.6)(400-362.6)(400-423.3)}{(491.4-308.6)(491.4-362.6)(491.4-423.3)})
\end{aligned}
$$

$$
\begin{aligned}
f_3(400) = 0.055389(\frac{(37.4)(-23.3)(-91.4)}{(-54)(-114.7)(-182.8)}) \\
+ 0.047485 (\frac{(91.4)(-23.3)(-91.4)}{(54)(-60.7)(-128.8)}) \\
+ 0.040914 (\frac{(91.4)(37.4)(-91.4)}{(114.7)(60.7)(-68.1)}) \\
+ 0.035413 (\frac{(91.4)(37.4)(-23.3)}{(182.8)(128.8)(68.1)})
\end{aligned}
$$


$$
\begin{aligned}
f_3(400) = -0.00390 + 0.02189 + 0.02696 + (-0.00176) \\
f_3(400) = 0.04319
\end{aligned}
$$


# Alternative Cubic Spline Interpolation

| $x$  | $f(x)$ |
|------|--------|
| 1    | 8      |
| 4    | 12     |
| 9    | 18     |
|10    | 26     |


*The second derivative at the end points of the curve is equal to 0, therefore:*

$f''(x_0) = 0$

$f''(x_1) = ?$

$f''(x_2) = ?$

$f''(x_3) = 0$

*Using the equation above, we can find the value of $f''(x_1)$ and $f''(x_2)$:*

### Solving for $f''(x_1)$:

$$
\begin{aligned}
(x_i - x_{i-1})f''(x_{i - 1}) + 2(x_{i + 1} - x_{i - 1})f''(x_i) + (x_{i + 1} - x_i)f''(x_{i + 1}) \\
= \frac{6}{x_{i + 1} - x_i} [ f(x_{i + 1}) - f(x_i) ] + \frac{6}{x_i - x_{i - 1}} [f(x_{i - 1}) - f(x_i)]
\end{aligned}
$$

$$
\begin{aligned}
(x_1 - x_0)f''(x_0) + 2(x_2 - x_0)f''(x_1) + (x_2 - x_1)f''(x_2) \\
= \frac{6}{x_2 - x_1} [ f(x_2) - f(x_1) ] + \frac{6}{x_1 - x_0} [f(x_0) - f(x_1)]
\end{aligned}
$$

$$
\begin{aligned}
(4 - 1)(0) + 2(9 - 1)f''(x_1) + (9 - 4)f''(x_2) \\
= \frac{6}{9 - 4} [18 - 12] + \frac{6}{4 - 1} [8 - 12] \\
=2(8)f''(x_1)+5f''(x_2) = \frac{6}{5}[6] + 2[-4] \\
=16f''x_1 + 5f''x_2 = 7.2 + (-8) \\
=16f''x_1 + 5f''x_2 = -0.8 (equation 1)
\end{aligned}
$$

### Solving for $f''(x_2)$:

$$
\begin{aligned}
(x_i - x_{i-1})f''(x_{i - 1}) + 2(x_{i + 1} - x_{i - 1})f''(x_i) + (x_{i + 1} - x_i)f''(x_{i + 1}) \\
= \frac{6}{x_{i + 1} - x_i} [ f(x_{i + 1}) - f(x_i) ] + \frac{6}{x_i - x_{i - 1}} [f(x_{i - 1}) - f(x_i)]
\end{aligned}
$$

$$
\begin{aligned}
(x_2 - x_1)f''(x_1) + 2(x_3 - x_1)f''(x_2) + (x_3 - x_2)f''(x_3) \\
= \frac{6}{x_3 - x_2} [ f(x_3) - f(x_2) ] + \frac{6}{x_2 - x_1} [f(x_1) - f(x_2)]
\end{aligned}
$$

$$
\begin{aligned}
(9 - 4)f''(x_1) + 2(10 - 4)f''(x_2) + (10 - 9)(0) \\
= \frac{6}{10 - 9} [26 - 18] + \frac{6}{9 - 4} [12 - 18] \\
=5f''(x_1) + 2(6)f''(x_2) = 6(8) + \frac{6}{5}(-6) \\
=5f''x_1 + 12f''x_2 = 48 + (-7.2) \\
=5f''x_1 + 12f''x_2 = 40.8 (equation 2)
\end{aligned}
$$


### Finding the value of the second derivatives $f''(x_1)$ and $f''(x_2)$

$$
\begin{aligned}
16f''x_1 + 5f''x_2 = -0.8 \\
16f''x_1 = -0.8 - 5f''x_2 \\
f''x_1 = \frac{-0.8 - 5f''x_2}{16}
\end{aligned}
$$

$$
\begin{aligned}
5f''x_1 + 12f''x_2 = 40.8 \\
5(\frac{-0.8 - 5f''x_2)}{16}) + 12f''x_2 = 40.8 \\
\frac{-4 - 25f''x_2}{16} + 12f''x_2 = 40.8 \\
\frac{-4 - 25f''x_2 + 192f''x_2}{16} = 40.8 \\
\frac{-4 + 167f''x_2}{16} = 40.8 \\
-4 + 167f''x_2 = 652.8 \\
167f''x_2 = 656.2.8 + 4 \\
167f''x_2 = 656.8 \\
f''x_2 = \frac{656.8}{167} \\
f''x_2 = 3.93293
\end{aligned}
$$

$$
\begin{aligned}
f''x_1 = \frac{-0.8 - 5f''x_2}{16}
f''x_1 = \frac{-0.8 - 5(3.93293)}{16} \\
f''x_1 = \frac{-0.8 - 19.66465}{16} \\
f''x_1 = \frac{-20.46465}{16} \\
f''x_1 = -1.27904
\end{aligned}
$$


### Finding the value of $f(6)$


$$
\begin{aligned}
f_6 = \frac{f''(x_{i-1})}{6(x_i - x_{i-1})} (x_i - x)^3 + \frac{f''(x_i)}{6(x_i - x_{i-1})} (x - x_{i-1})^3 \\
+ \left[ \frac{f(x_{i-1})}{x_i - x_{i-1}} - \frac{f''(x_{i-1})(x_i - x_{i-1})}{6} \right] (x_i - x) \\
+ \left[\frac{f(x_i)}{x_i - x_{i-1}} - \frac{f''(x_i)(x_i - x_{i-1})}{6} \right] (x - x_{i-1})
\end{aligned}
$$

$$
\begin{aligned}
x_i-1 = 4 \\
x_i = 9 \\ 
x = 6 \\
fx_i-1 = 12\\
fx_i = 18 \\ 
f''x_i-1 = -1.27904 \\ 
f''x_i = 3.93293 
\end{aligned}
$$

$$
\begin{aligned}
f_6 = \frac{-1.27904}{6(9-4)} (9 - 6)^3 + \frac{3.93293}{6(9 - 4)} (6 - 4)^3 \\
+ \left[ \frac{12)}{9 - 4} - \frac{(-1.27904)(9 - 4}{6} \right] (9 - 6) \\
+ \left[\frac{18}{9 - 4} - \frac{(3.93293)(9 - 4)}{6} \right] (6 - 4) \\
\end{aligned}
$$

$$
\begin{aligned}
f_6 = \frac{-1.27904}{6(5)} (3)^3 + \frac{3.93293}{6(5)} (2)^3 \\
+ \left[ \frac{12}{5} - \frac{(-1.27904)(5)}{6} \right] (3) \\
+ \left[\frac{18}{5} - \frac{(3.93293)(5)}{6} \right] (2) \\
\end{aligned}
$$

$$
\begin{aligned}
f_6 = \frac{-1.27904}{30} (27) + \frac{3.93293}{30} (8) \\
+ \left[ \frac{12}{5} - \frac{-6.3952}{6} \right] (3) \\
+ \left[\frac{18}{5} - \frac{19.66465}{6} \right] (2) \\
\end{aligned}
$$

$$
\begin{aligned}
f_6 = -0.10235 + 10.3976 + 0.64512 \\
f_6 = -0.10235 + 10.3976  + 0.64512 \\
f_6 = 10.94037
\end{aligned}
$$
