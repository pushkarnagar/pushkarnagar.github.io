````markdown
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

- Regularization: Ridge adds $\\lambda \\|w\\|_2^2$, Lasso adds $\\lambda \\|w\\|_1$.
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

## Assumptions

Common assumptions for ordinary least squares (OLS) linear regression:

- **Linearity:** the conditional expectation is linear: $E[y\\mid x]=w^{\\top}x+b$.
- **Independence:** observations are independent (no autocorrelation).
- **Homoscedasticity:** error variance is constant: $\\mathrm{Var}(\\varepsilon_i)=\\sigma^2$.
- **Zero mean errors / exogeneity:** $E[\\varepsilon\\mid x]=0$ (no omitted-variable bias).
- **No perfect multicollinearity:** columns of $X$ are linearly independent so $X^{\\top}X$ is invertible.
- **(Optional for inference) Normality of errors:** $\\varepsilon\\sim N(0,\\sigma^2)$ simplifies confidence intervals and tests.

Violations affect estimation or inference: heteroskedasticity breaks OLS efficiency (use robust SEs), autocorrelation requires time-series methods, and endogeneity requires instrumental variables.

## Special cases & common remedies

- **Positive-only targets ($y>0$):** if the response is strictly positive consider a log transform ($\\log y$) and model linearity in log-space, or use a GLM (Gamma family with log link) or Poisson/Quasi-Poisson for counts.
- **Count data / many zeros:** use Poisson, negative binomial, or zero-inflated models instead of OLS.
- **Bounded outcomes (e.g., probabilities):** use logistic regression or Beta regression rather than OLS.
- **Heteroskedasticity:** use weighted least squares (WLS) or heteroskedasticity-robust standard errors (HC0–HC3).
- **Multicollinearity / high-dimensional data (p > n):** use Ridge, Lasso, or dimensionality reduction (PCA); drop or combine correlated features.
- **Outliers / heavy tails:** use robust regression (Huber, RANSAC) or transform the outcome.
- **Singular/ill-conditioned $X^{\\top}X$:** use regularization or compute a pseudo-inverse via SVD.

Keep explanations short and add examples or Jupyter notebooks when you want runnable demonstrations.

````
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

