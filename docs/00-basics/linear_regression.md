# Linear Regression

Concise study notes on ordinary least squares linear regression.

## At a glance

- Model: linear mapping from features to target.
- Use closed-form solution for small datasets; use gradient methods or regularized solvers otherwise.

## Model

Predict with weights $w$ and bias $b$:

$y = w^{\top} x + b$

The normal-equation (closed-form) solution is

$$
w = (X^{\top} X)^{-1} X^{\top} y
$$

where $X$ is the n×d design matrix (rows = examples).

## Loss

- Mean squared error (MSE):

$$
\mathrm{MSE} = \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2
$$

## Practical tips

- Regularization: Ridge adds $\lambda \|w\|_2^2$, Lasso adds $\lambda \|w\|_1$.
- Center and scale features for gradient-based solvers.
- Check condition number of $X^{\top}X$; if ill-conditioned prefer regularization or SVD.

## Minimal Python example

```python
import numpy as np
from sklearn.linear_model import LinearRegression

X = np.array([[1], [2], [3], [4]])
y = np.array([3, 5, 7, 9])  # approx y = 2x + 1

model = LinearRegression().fit(X, y)
print('coef=', model.coef_, 'intercept=', model.intercept_)
```

## References

- Ordinary Least Squares, linear algebra textbooks.
- scikit-learn `LinearRegression` and `Ridge`, `Lasso` implementations.

