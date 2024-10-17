# Spline Interpolation
- there is a separate polynomial function for every two consecutive given points.
- depends on the degree of polynomial connecting each two consecutive points, but the most common are linear ($1^{st}$ degree), quadratic ($2^{nd}$ degree), and cubic ($3^{rd}$ degree) splines.
 

## Alternative Method in Alternative Cubic Spline Interpolation

$$
\begin{aligned}
f_i = \frac{f''(x_{i-1})}{6(x_i - x_{i-1})} (x_i - x)^3 + \frac{f''(x_i)}{6(x_i - x_{i-1})} (x - x_{i-1})^3 \\
+ \left[ \frac{f(x_{i-1})}{x_i - x_{i-1}} - \frac{f''(x_{i-1})(x_i - x_{i-1})}{6} \right] (x_i - x) \\
+ \left[\frac{f(x_i)}{x_i - x_{i-1}} - \frac{f''(x_i)(x_i - x_{i-1})}{6} \right] (x - x_{i-1})
\end{aligned}
$$

*Since the second derivative is unknown, we can use the following equation to find it:*

$$
\begin{aligned}
(x_i - x_{i-1})f''(x_{i - 1}) + 2(x_{i + 1} - x_{i - 1})f''(x_i) + (x_{i + 1} - x_i)f''(x_{i + 1}) \\
= \frac{6}{x_{i + 1} - x_i} [ f(x_{i + 1}) - f(x_i) ] + \frac{6}{x_i - x_{i - 1}} [f(x_{i - 1}) - f(x_i)]
\end{aligned}
$$



#### Problem # 1

Determine the value of $f(7)$ for a given set of data below using the alternative cubic spline interpolation method. $x$ should be in increasing number. 

| $x$ | $f(x)$ |
|-----|--------|
| 1   | 12     |
| 5   | -26    |
| 8   | -14    |
| 10  | 37     |

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
(x_1 - x_{1-1})f''(x_{1 - 1}) + 2(x_{1 + 1} - x_{1 - 1})f''(x_1) + (x_{1 + 1} - x_1)f''(x_{1 + 1}) \\
= \frac{6}{x_{1 + 1} - x_1} [ f(x_{1 + 1}) - f(x_1) ] + \frac{6}{x_1 - x_{1 - 1}} [f(x_{1 - 1}) - f(x_1)]
\end{aligned}
$$

$$
\begin{aligned}
(x_1 - x_0)f''(x_0) + 2(x_2 - x_0)f''(x_1) + (x_2 - x_1)f''(x_2) \\
= \frac{6}{x_2 - x_1} [ f(x_2) - f(x_1) ] + \frac{6}{x_1 - x_0} [f(x_0) - f(x_1)]
\end{aligned}
$$

#### Substituting the given values

$$
\begin{aligned}
(5 - 1)(0) + 2(8 - 1)f''(x_1) + (8 - 5)f''(x_2) = \frac{6}{8 - 5} [ -14 - (-26) ] + \frac{6}{5 - 1} [12 - (-26)]]
\end{aligned}
$$

#### Simplifying

$$
\begin{aligned}
14f''(x_1) + 3f''(x_2) = 81 (equation 1)
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
(x_2 - x_{2-1})f''(x_{2 - 1}) + 2(x_{2 + 1} - x_{2 - 1})f''(x_2) + (x_{2 + 1} - x_2)f''(x_{2 + 1}) \\
= \frac{6}{x_{2 + 1} - x_2} [ f(x_{2 + 1}) - f(x_2) ] + \frac{6}{x_2 - x_{2 - 1}} [f(x_{2 - 1}) - f(x_2)]
\end{aligned}
$$

$$
\begin{aligned}
(x_2 - x_1)f''(x_1) + 2(x_3 - x_1)f''(x_2) + (x_3 - x_2)f''(x_3) \\
= \frac{6}{x_3 - x_2} [ f(x_3) - f(x_2) ] + \frac{6}{x_2 - x_1} [f(x_1) - f(x_2)]
\end{aligned}
$$

#### Substituting the given values

$$
\begin{aligned}
(8-5)f''(x_1) + 2(10-5)f''(x_2) + (10-8)f''(x_3) = \frac{6}{10-8} [37 - (-14)] + \frac{6}{8-5} [-26 - (-14)]
\end{aligned}
$$

#### Simplifying
*Automatically, $f''(x_3) = 0$*

$$
\begin{aligned}
3f''(x_1) + 10f''(x_2) = 3 [51] + 2 [-12]
\end{aligned}
$$

$$
\begin{aligned}
3f''(x_1) + 10f''(x_2) = 129 (equation 2)
\end{aligned}
$$

### Finding the value of the second derivatives $f''(x_1)$ and $f''(x_2)$


$$
\begin{aligned}
14f''(x_1) + 3f''(x_2) = 81 \\
= \frac{14f''x_1}{14} = \frac{81 - 3f''(x_2)}{14} \\ 
= f''(x_1) = \frac{81 - 3f''(x_2)}{14}
\end{aligned}
$$

$$
\begin{aligned}
3f''(x_1) + 10f''(x_2) = 129 \\
= 3(\frac{81 - 3f''(x_2)}{14}) + 10f''(x_2) = 129 \\
\end{aligned}
$$

_Multiply the second term by 14 to be able to combine the two terms_

$$
\begin{aligned}
\frac{243 - 9f''{x_2}}{14} + \frac{140f''{x_2}}{14} = 129 \\
\end{aligned}
$$

$$
\begin{aligned}
\frac{243 - 131f''{x_2}}{14} = 129 \\
\end{aligned}
$$

_Multiply both sides by 14 again to cancel the denominator because $\frac{14}{14}$ = 1_

$$
\begin{aligned}
243 - 131f''{x_2} = 1806 \\
\end{aligned}
$$

_Transpose and get rid of the denominator_

$$
\begin{aligned}
f''{x_2} = 11.93130
\end{aligned}
$$

$$
\begin{aligned}
f''{x_1} = \frac{81 - 3f''(x_2)}{14} \\
= \frac{81-3(11.93130)}{14} \\ 
= \frac{81-35.7939}{14} \\
= \frac{45.2061}{14} \\ 
f''{x_1} = 3.22901
\end{aligned}
$$

### Finding the value of $f(7)$

$$
\begin{aligned}
f_7 = \frac{f''(x_{i-1})}{6(x_i - x_{i-1})} (x_i - x)^3 + \frac{f''(x_i)}{6(x_i - x_{i-1})} (x - x_{i-1})^3 \\
+ \left[ \frac{f(x_{i-1})}{x_i - x_{i-1}} - \frac{f''(x_{i-1})(x_i - x_{i-1})}{6} \right] (x_i - x) \\
+ \left[\frac{f(x_i)}{x_i - x_{i-1}} - \frac{f''(x_i)(x_i - x_{i-1})}{6} \right] (x - x_{i-1})
\end{aligned}
$$

$$
\begin{aligned}
f_7 = \frac{3.22901}{18} (1)^3 + \frac{11.93130}{18} (2)^3 \\
+ \left[ \frac{-26}{3} - \frac{3.22901(3)}{6} \right] (8 - 7) \\
+ \left[\frac{-14}{3} - \frac{11.93130(3)}{6} \right] (7 - 5)
\end{aligned}
$$

$$
\begin{aligned}
f_7 = 0.17939 + 5.3028 + (-8.66667 - 1.61450) + ( -4.66667 - 5.96565)(2) \\
= 0.17939 + 5.3028 -10.28117 -21.26464 \\ 
f_7 = -26.06362
\end{aligned}
$$
