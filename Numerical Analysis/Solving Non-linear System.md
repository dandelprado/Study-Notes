# Closed Methods in Finding the root of non-linear system

1. Bisection
    * Determine $xm = \frac{xl+xu}{2}$
    * Find $f(xl), f(xm), f(xu)$
    * Choose new interval (_find the interval with 2 different signts (+,-))_

Example Problem
Determine the root of $3x^4 + 7x^3 - 15x^2 + 5x = 17$ between $[0,2]$. Use Bisection Method for 7 iterations.

| $#$ | $x_l$ | $x_m$ | $x_u$ | $f(x_l)$ | $f(x_m)$ | $f(x_u)$ | $New$ |
|---|---|---|---|---|---|---|---|
| 1         | 0     | 1     | 2     |          |          |          |             |

**1st iteration**

$$
\begin{aligned}
    x_m &= \frac{x_l+x_u}{2} \\
    &= \frac{0 + 2}{2} \\
    x_m &= 1 \\
    f(x_l) &= 3(0)^4 + 7(0)^3 - 15(0)^2 + 5(0) - 17 \\
    &= 0 + 0 - 9 + 0 - 17 \\ 
    &= -17 \\
    f(x_m) &= 3(1)^4 + 7(1)^3 - 15(1)^2 + 5(1) - 17 \\
    &= 3 + 7 - 15 + 5 - 17 \\
    &= -17
\end{aligned}
$$
