---
title: "Solutions of Linear Equation"
author: "Dan del Prado"
---

<script type="text/javascript" async
   src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

[Back to Numerical Analysis](../Numerical%20Analysis/index.md)

A linear system is a set of $$n$$ equations that can solve $$n$$ number of unknowns. This can be written as:

$$
\begin{aligned}
A_{11}X_1 + A_{12}X_2 + ... + A_{1n}X_n = B_1 \\
A_{21}X_1 + A_{22}X_2 + ... + A_{2n}X_n = B_2 \\
A_{n1}X_1 + A_{n2}X_2 + ... + A_{nn}X_n = B_n

\end{aligned}
$$

Where:

The set $$x={X_1 X_2, ..., X_n}$$ is considered the solution of the linear system if they are **correct in all equations.**

# Methods of Solution

## Direct Method

### Gauss - Elimination
- Consists of 2 phases:
  1. **Elimination**: Series or row operations are performed in the coefficient matrix until it becomes an **upper triangular matrix**.

  $$ 
  \begin{bmatrix}
  x_{11} & x_{12} & x_{13} \\
  0      & x_{22} & x_{23} \\
  0      & 0      & x_{33}
  \end{bmatrix} 
  $$

  2. **Back-substitution**: Solving each element of the solution will start at the last row and move up to the first row.

#### Problem #1

Determine the solution of the linear system shown below using Gauss Elimination.

$$
\begin{aligned}
2X_1 - 4X_2 + X_3 = -11 \\

X_1 + 3X_2 + 2X_3 -4 \\

3X_1 + 5X_2 + 2X_3 = -2
\end{aligned}
$$


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

*The goal here is to create an **upper triangular matrix**, where all elements below the main diagonal are zeros. To achieve this, we need to perform row operations on $$R_2$$ and $$R_3$$ in order to eliminate the first element of both rows (below the diagonal). The number 2 is derived from the 1st element of $$R_1$$.*

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

*Same process as above, except we only needed to change the one in $$R_3$$ now.*

##### Back-substitution Phase

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

*Back substitution means solving from the last row towards the first row*


$$R_3$$

Divide both sides by -2.8 to isolate $$X_3$$:

$$-2.8X_3 = 11.2 \quad \Rightarrow \quad X_3 = -4$$

$$R_2$$

Substitute $$X_3$$, transpose the result, and divide both sides by 5 to isolate $$X_2$$:

$$5X_2 + 1.5(-4) = 1.5 \quad \Rightarrow \quad 5X_2 - 6 = 1.5 \quad \Rightarrow \quad 5X_2 = 7.5$$

$$X_2 = 1.5$$

$$R_1$$

Substitute $$X_2$$ and $$X_3$$ and solve for $$X_1$$:

$$2X_1 - 4(1.5) + (-4) = -11 \quad \Rightarrow \quad 2X_1 - 10 = -11$$

$$2X_1 = -1 \quad \Rightarrow \quad X_1 = -0.5$$


Final Values: 

$$X_1 = -0.5, \quad X_2 = 1.5, \quad X_3 = -4$$


### Gauss Jordan
- Similar to _Elimination_, except we need to make an **identity matrix**
- No back substitution required.

  $$ 
  \begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 0 & 1
  \end{bmatrix} 
  $$

#### Problem 1

Determine the solution of the linear system shown below using Gauss Jordan

$$
\begin{aligned}
2X_1 - 4X_2 + X_3 = -11 \\

X_1 + 3X_2 + 2X_3 -4 \\

3X_1 + 5X_2 + 2X_3 = -2
\end{aligned}
$$

  $$ 
  \begin{bmatrix}
  x_{11} & x_{12} & x_{13} \\
  0 & x_{22} & x_{23} \\
  0 & x_{32} & x_{33}
  \end{bmatrix} 
  $$

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

*The goal here is to create an **identity matrix**, where the main diagonal consists of 1s, while everything else is 0.*

  $$ 
  \begin{bmatrix}
  x_{11} & 0 & x_{13} \\
  0 & x_{22} & x_{23} \\
  0 & 0 & x_{33}
  \end{bmatrix} 
  $$

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
R_1 \to R_1 - \left(\frac{-4}{5}\right)  R_2 \\
R_3 \to R_3 - \left(\frac{11}{5}\right) R_2 
\end{array}
\quad
\left|
\begin{array}{ccc}
2 & 0 & 2.2 \\
0 & 5 & 1.5 \\
0 & 0 & -2.8 \\
\end{array}
\right|
\left|
\begin{array}{c}
-9.8 \\
1.5 \\
11.2 \\
\end{array}
\right|
$$

  $$ 
  \begin{bmatrix}
  x_{11} & 0 & 0 \\
  0 & x_{22} & 0 \\
  0 & 0 & x_{33}
  \end{bmatrix} 
  $$

$$
\left|
\begin{array}{ccc}
2 & 0 & 2.2 \\
0 & 5 & 1.5 \\
0 & 0 & -2.8 \\
\end{array}
\right|
\left|
\begin{array}{c}
-9.8 \\
1.5 \\
11.2 \\
\end{array}
\right|
\quad
\begin{array}{c}
R_1 \to R_1 - \left(\frac{-11}{14}\right)  R_3 \\
R_2 \to R_2 - \left(\frac{-15}{28}\right) R_3 
\end{array}
\quad
\left|
\begin{array}{ccc}
2 & 0 & 0 \\
0 & 5 & 0 \\
0 & 0 & -2.8 \\
\end{array}
\right|
\left|
\begin{array}{c}
-1 \\
7.5 \\
11.2 \\
\end{array}
\right|
$$

  $$ 
  \begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 0 & 1
  \end{bmatrix} 
  $$

$$
\left|
\begin{array}{ccc}
2 & 0 & 0 \\
0 & 5 & 0 \\
0 & 0 & -2.8 \\
\end{array}
\right|
\left|
\begin{array}{c}
-1 \\
7.5 \\
11.2 \\
\end{array}
\right|
\quad
\begin{array}{c}
R_1 \to R_1 \div 2 \\
R_2 \to R_2 \div 5  \\
R_3 \to R_3 \div -2.8
\end{array}
\quad
\left|
\begin{array}{ccc}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{array}
\right|
\left|
\begin{array}{c}
-0.5 \\
1.5 \\
-4 \\
\end{array}
\right|
$$

Final Values: 

$$
X_1 = -0.5, \quad X_2 = 1.5, \quad X_3 = -4
$$

<button onclick="window.print()">Download This Page as PDF</button>

[Back to Numerical Analysis](../Numerical%20Analysis/index.md)
