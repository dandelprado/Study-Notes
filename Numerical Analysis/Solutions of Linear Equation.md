---
title: "Solutions of Linear Equation"
author: "Dan del Prado"
date: "BSCS3"
geometry: margin=1in
toc: true
---

A linear system is a set of $n$ equations that can solve $n$ number of unknowns. This can be written as:

$A_{11}X_1 + A_{12}X_2 + ... + A_{1n}X_n = B_1$

$A_{21}X_1 + A_{22}X_2 + ... + A_{2n}X_n = B_2$

$A_{n1}X_1 + A_{n2}X_2 + ... + A_{nn}X_n = B_n$

The set $x={X_1 X_2, ..., X_n}$ is considered the solution of the linear system if they are **correct in all equations.**

# Methods of Solution

## Direct Method

### Gauss - Elimination
- Consists of 2 phases:
  1. **Elimination**: Series or row operations are performed in the coefficient matrix until it becomes an **upper triangular matrix**.

  $$ 
  \begin{bmatrix}
  x_{1} & x_{2} & x_{3} \\
  0      & x_{5} & x_{6} \\
  0      & 0      & x_{9}
  \end{bmatrix} 
  $$

  2. **Back-substitution**: Solving each element of the solution will start at the last row and move up to the first row.

#### Problem #1

Determine the solution of the linear system shown below using Gauss Elimination.
$$
2X_1 - 4X_2 + X_3 = -11

X_1 + 3X_2 + 2X_3 -4

3X_1 + 5X_2 + 2X_3 = -2
$$


## Elimination Phase:

$$
\left|
\begin{array}{ccc}
2 & -4 & 1 \\
1 & 3 & 2 \\
3 & 5 & 2 \\
\end{array}
\right|
\left|
\begin{array}{c}
-11 \\
-4 \\
-2 \\
\end{array}
\right|
\quad
\begin{array}{c}
R_2 \to R_2 - \left(\frac{1}{2}\right) R_1 \\
R_3 \to R_3 - \left(\frac{3}{2}\right) R_1
\end{array}
\quad
\left|
\begin{array}{ccc}
2 & -4 & 1 \\
0 & 5 & \frac{3}{2} \\
0 & 11 & \frac{1}{2} \\
\end{array}
\right|
\left|
\begin{array}{c}
-11 \\
\frac{3}{2} \\
\frac{29}{2} \\
\end{array}
\right|
$$

*The goal here is to create an **upper triangular matrix**, where all elements below the main diagonal are zeros. To achieve this, we need to perform row operations on $R_2$ and $R_3$ in order to eliminate the first element of both rows (below the diagonal). The number 2 is derived from the 1st element of $R_1$.*
