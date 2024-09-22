---
title: "Solutions of Linear Equation"
author: "Dan del Prado"
date: "BSCS3"
geometry: margin=1in
toc: true
header-includes:
    - \usepackage{multicol}
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

$2X_1 - 4X_2 + X_3 = -11$

$X_1 + 3X_2 + 2X_3 -4$

$3X_1 + 5X_2 + 2X_3 = -2$


##### Elimination Phase

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
0 & 5 & 1.5 \\
0 & 11 & 0.5 \\
\end{array}
\right|
\left|
\begin{array}{c}
-11 \\
1.5 \\
14.5 \\
\end{array}
\right|
$$

*The goal here is to create an **upper triangular matrix**, where all elements below the main diagonal are zeros. To achieve this, we need to perform row operations on $R_2$ and $R_3$ in order to eliminate the first element of both rows (below the diagonal). The number 2 is derived from the 1st element of $R_1$.*

$$
\left|
\begin{array}{ccc}
2 & -4 & 1 \\
0 & 5 & 1.5 \\
0 & 11 & 0.5 \\
\end{array}
\right|
\left|
\begin{array}{c}
-11 \\
1.5 \\
14.5 \\
\end{array}
\right|
\quad
\begin{array}{c}
R_3 \to R_3 - \left(\frac{11}{5}\right) R_2
\end{array}
\quad
\left|
\begin{array}{ccc}
2 & -4 & 1 \\
0 & 5 & 1.5 \\
0 & 0 & -2.8 \\
\end{array}
\right|
\left|
\begin{array}{c}
-11 \\
1.5 \\
11.2 \\
\end{array}
\right|
$$

*Same process as above, except we only needed to change the one in $R_3$ now.*

##### Back-subsitution Phase

$$
\left|
\begin{array}{ccc}
2 & -4 & 1 \\
0 & 5 & 1.5 \\
0 & 0 & -2.8 \\
\end{array}
\right|
\left|
\begin{array}{c}
-11 \\
1.5 \\
11.2 \\
\end{array}
\right|
$$

*The labels in the matrix should be as follows:*
 $$ 
  \begin{bmatrix}
  x_{1} & x_{2} & x_{3} \\
  x_{1} & x_{2} & x_{3} \\
  x_{1} & x_{2} & x_{3}
  \end{bmatrix} 
  $$

*Back substitution means solving from the last row towards the first row*

\begin{multicols}{2}

$R_3$

*Divide both sides by -2.8 to isolate $X_3$*:
\[
-2.8X_3 = 11.2 \quad \Rightarrow \quad X_3 = -4
\]

$R_2$

*Substitute $X_3$, transpose the result, and divide both sides by 5 to isolate $X_2$*:
\[
5X_2 + 1.5(-4) = 1.5 \quad \Rightarrow \quad 5X_2 - 6 = 1.5 \quad \Rightarrow \quad 5X_2 = 7.5
\]
\[
X_2 = 1.5
\]

\columnbreak

$R_1$

*Substitute $X_2$ and $X_3$ and solve for $X_1$*:
\[
2X_1 - 4(1.5) + (-4) = -11 \quad \Rightarrow \quad 2X_1 - 10 = -11
\]
\[
2X_1 = -1 \quad \Rightarrow \quad X_1 = -0.5
\]

\end{multicols}

Final Values: 

$$
\
X_1 = -0.5, \quad X_2 = 1.5, \quad X_3 = -4
\
$$
