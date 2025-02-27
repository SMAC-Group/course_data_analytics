---
title: 'Chapter 1: A Brief Introduction to R and RMarkdown'
description:
  ''
prev: null
next: /chapter2
type: chapter
id: 1
---

<exercise id="1" title="Installing R, RStudio, Rtools/Xcode and idarps">

## Installing R

This course will make use of `R`, which is a programming language for statistical computing and graphics supported by the R Core Team and the [R Foundation for Statistical Computing](https://www.r-project.org/). `R` is widely used by data scientists, data miners and statisticians for data analysis and for developing statistical software. 

### Installing R on macOS

To install `R` on macOS, download the `.pkg` installer on the [CRAN website](https://cran.r-project.org/bin/macosx/) and execute it once downloaded.

### Installing R on Windows

To install `R` on Windows, download the `.exe` installer on the [CRAN website](https://cran.r-project.org/bin/windows/base/) and execute it once downloaded.

### Installing R on Ubuntu Linux

To install `R` on Ubuntu Linux, follow the procedure detailed [here](https://cran.r-project.org/).


## Installing RStudio

`RStudio` is an Integrated Development Environment (IDE) for `R`. An IDE is a software application that provides comprehensive facilities to computer programmers for software development. An IDE usually consists of at least a source code editor, build automation tools and a debugger. We will be using `RStudio` throughout the semester. Please install it from the [RStudio’s official webpage](https://www.rstudio.com/).

⚠ Note that you should install `R` first before installing `RStudio`.

### Installing RStudio on macOS

To install `RStudio` on macOS, download the macOS `.dmg` installer on the [RStudio’s products page](https://www.rstudio.com/products/rstudio/download/) and execute it once downloaded.

### Installing RStudio on Windows

To install `RStudio` on Windows, download the Windows `.exe` installer on the [RStudio’s products page](https://www.rstudio.com/products/rstudio/download/) and execute it once downloaded.

### Installing RStudio on Ubuntu Linux

To install `RStudio` on Ubuntu Linux, download the Ubuntu/Debian `.deb` installer on the [RStudio’s products page](https://www.rstudio.com/products/rstudio/download/). You can then install the `.deb` file.

## Installing R package idarps 

We have developed an `R` package for this class which is called `idarps` (Introduction to Data Analytics with R for Pharmaceutical Sciences). 


### Installation from CRAN

You can download the `idarps` package directly from [Comprehensive R Archive Network (CRAN)](https://cran.r-project.org/) by executing the following `R` command:

```R
install.packages("idarps")
```

Make sure that the package is correctly installed by checking the installation logs. You should see something like:


```out
...
** testing if installed package can be loaded from final location
** testing if installed package keeps a record of temporary installation path
* DONE (idarps)
```

### Installation of the development version from GitHub

In order to install the `idarps` package from its [GitHub repository](https://github.com/SMAC-Group/idarps), you will have to first install a `C++` compiler in your computer, either `Rtools` on Windows or `Xcode` on macOS. The steps to do so are explained as follows.

To start, check your `R` version installed with:

```R
R.Version()$version.string
```

You should obtain an output similar to:

```out
[1] "R version 4.1.3 (2022-03-10)"
```

#### Installing `Rtools` on Windows

If you are on Windows, go to the [R for Windows Build Tools Archive](https://cran.r-project.org/bin/windows/Rtools/history.html) and install the correct `Rtools` version depending on your `R` version by downloading the `.exe` file and executing it.


#### Installing `Xcode` on macOS

If you are on macOS, go to the [Mac Apple Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12) and install the latest `Xcode` application. 

You should then be able to install the `devtools` package by running the following command in `R`: 

```R
install.packages("devtools")
``` 

Make sure that the installation succeeded by checking the installation logs. You should see something like:

```out
...
** testing if installed package can be loaded from final location
** testing if installed package keeps a record of temporary installation path
* DONE (devtools)
```

Once this is done, you can install the `idarps` package with:

```r
devtools::install_github("https://github.com/SMAC-Group/idarps")
```

You should see something like:


```out
...
** testing if installed package can be loaded from final location
** testing if installed package keeps a record of temporary installation path
* DONE (idarps)
```

To test if the package is correctly installed you can simply run:

```r
library(idarps)
```

and you should see an output like this:


```out
> library(idarps)
> 
```


then you have successfully installed and loaded the `idarps` package! Congratulations!

Below is a GIF which illustrates the installation of the `idarps` package:

<center>

![](gif_idarps.gif)

</center>

</exercise>



<exercise id="2" title="Introduction to RMarkdown">

<center>
<img src="hex_rmd.png" width = 20%>
</center>

`RMarkdown` (or `R Markdown`) is a syntax for creating documents using literate programming. This technique allows the combination of document narrative and code computation to dynamically generate documents in different formats. This allows the creation of scientific reports that combine textual elements written by the authors with computed elements, such as visual representations or the results of a statistical analysis or data modelling.


In a nutshell, `RMarkdown` stands on the shoulders of `knitr` and `Pandoc`. The former executes the computer code embedded in `Markdown`, and converts `RMarkdown` to `Markdown`. The latter renders `Markdown` to the output format you want (such as PDF, HTML, Word, and so on).
-- <cite>R Markdown: The Definitive Guide</cite>

<center>
<img src="workflow.png" width = 70%>
</center>

# Getting started

Here is how we can create a new `RMarkdown` document in `Rstudio`: 

<center>
<img src="demo_rmd_2.gif" width = 100%>
</center>

The `YAML` header declares various elements of the aesthetics and compilation options of your document, such as the title of the document, the author, the date, the output format (`.pdf`, `.html`), the theme, specific `css` or `pandoc` options, and so on. An example of the `YAML` header is presented below.

```r
---
title: Report 
author: Stéphane Guerrier
date: "`r format(Sys.time(), '%d %B, %Y')`" 
output:
  html_document:
    css: "my_style.css"
    toc: true
    theme: united
bibliography: biblio.bib
---
```

Since compiling a `.Rmd` document in `.pdf` requires `LaTeX`, and maybe not everyone has `LaTeX` installed, we will only consider compilation in `.html` for this class. If you are interested, you can find a detailed procedure to install the [`tinytex`](https://yihui.org/tinytex/) `LaTeX` distribution at this webpage: [Install LaTeX (TinyTeX) for PDF reports](https://bookdown.org/yihui/rmarkdown-cookbook/install-latex.html).

# RMarkdown playground
We prepare an application (https://dal-unige.shinyapps.io/rmd_app/) that allows you to try out the various functionalities of `RMarkdown`. 

 <iframe src="https://dal-unige.shinyapps.io/rmd_app/" title="RMarkdown playground" height="800" width="770"  ></iframe> 
 

</exercise>



<exercise id="3" title="Basic arithmetic and logical computations">

`R` can be used for arithmetic and logical computations. It provides the following standard arithmetic operators:

<div style="text-align:center"><img src="arithmetic_op.png" alt=" " width="70%"> </div>

For example, if you want to compute the following expression: \\(6\times3 + \frac{3^2}{2} +2 \\), you can run the following command:

```R
6*3 + 3^2/2 + 2
``` 

which will return:

```out
[1] 24.5
``` 

Similarly, `R` provides the following standard logical operators:

<div style="text-align:center"><img src="logical_op.png" alt=" " width="70%"> </div>

For example, if you want to compare two numbers, say \\(9\\) and \\(12\\), you can run the following command:


```R
a = 9
b = 12
a > b
a == b
a < b
```

which will return:

```
> a = 9
> b = 12
> a > b
[1] FALSE
> a == b
[1] FALSE
> a < b
[1] TRUE
```

# Exercises

### Exercise 1

Try the following commands in `R` and be sure to understand how they operate and what they
return.

```R
a = 5
b = 10
a + b 
b - a
a * b
b / a
a^2
a == b
a != b
a > b
a < b
a %% 2
a %/% 2
```

### Exercise 2

Define the object `val_1` as `TRUE`, `val_2` as `FALSE` and `val_3` as `NA`. Test equality between `val_1` and `val_2`, and between `val_2` and `val_3`. What can you conclude on the comparison between objects when one of them is equal to `NA`?

<codeblock id="chap_intro_r_logical_1">


</codeblock>



</exercise>



<exercise id="4" title="Working with vectors and matrices">


You can easily create vectors and matrices in `R` and perform computations.

## Vectors

You can create a vector in different ways. The most basic approach is to list out every element in the vector using the function `c()`. For example, to create a sequence from \\(0\\) to \\(12\\) by \\(1\\) we can use:

```R
c(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
```

You can also use the following command:

```R
0:12
```

or use the function `seq()`:

```
seq(from = 0, to = 12, by = 1)
```

All commands will return:

```out
 [1]  0  1  2  3  4  5  6  7  8  9  10  11  12
```


## Matrices

You can define a matrix in `R` with the function `matrix()`. For example,  

```R
matrix(seq(4), ncol = 2, nrow = 2)
```

creates the following matrix:

```out
     [,1] [,2]
[1,]    1    3
[2,]    2    4
```


## Subsetting

The operation of extracting a value from an `R` object is called <b>subsetting</b>. To subset an element from a vector, you can use the `[]` operator.  

⚠ Note that in `R` the index starts from 1.

For example, you can extract the 5th element from the previous sequence with the following command:

``` 
mysequence = seq(from = 0, to = 12, by = 1)
mysequence[5]
```

which will return: 

```out
[1] 4
```

Similarly, you can also subset matrices with the `[]` operator. For example, we can subset the element of the 1st row and of the 2nd column of the matrix previously defined with:

```R
mymat = matrix(seq(4), ncol = 2, nrow = 2)
mymat[1,2]
```

which returns:

```
[1] 3
```

## Operations on vectors and matrices

Once a vector or a matrix is defined, we can then perform various operations and computations. Some simple examples include:

```R
b = c(1,2,3,4)
b * 2
``` 

which will do the computation for all elements of the vector `b` and return:

```out
[1]  2  4  6  8
```

If we run:

```R
sqrt(b)
``` 

it will return the computation for all elements of the vector `b`:

```out
[1]  1.000000 1.414214 1.732051 2.000000
```

Similarly, we can perform different computations on matrices. For example, we define two matrices `A` and `C` with:

```R
A = matrix(seq(4), ncol = 2, nrow = 2)
C = matrix(c(5:8), ncol = 2, nrow = 2)
``` 

When we run:

```R
A * C
``` 

it will return:

```
     [,1] [,2]
[1,]   5    21
[2,]   12   32
```

Notice that this is not a matrix multiplication! The `*` operator actually performs a vectorized multiplication on the matrices (i.e. multiply each element in `A` to the corresponding element in `C`). In order to perform a matrix multiplication, we should use `%*%`:

```R
A %*% C
``` 

and it will return: 

```
     [,1] [,2]
[1,]   23   31
[2,]   34   46
```

To compute the inverse of the matrix `A`, we can use the function `solve()`:

```
D = solve(A)
```

So if we multiply the matrix `A` to the matrix `D`, we will get the identity matrix:

```R
A %*% D
``` 

```out
      [,1] [,2]
[1,]    1    0
[2,]    0    1
``` 

We can also calculate the determinant or the transpose of a given matrix using the functions `det()` or `t()` respectively:

```R
det(A)
t(A)
```

# Exercises

### Exercise 1

Create a vector with the first five lower-case letters of the alphabet. Extract the 4th element.


<codeblock id="chap_intro_r_vector_1">

</codeblock>

### Exercise 2

Create a [Toeplitz matrix](https://en.wikipedia.org/wiki/Toeplitz_matrix) where the first row of the matrix corresponds to the vector \\(\[1,2,3,4\]\\).

<codeblock id="chap_intro_r_matrix_1">

The final matrix should be:

<div style="text-align:center"><img src="toeplitz_2.png"" alt=" " width="25%"> </div>

</codeblock>



</exercise>


<exercise id="5" title="Working with dataframes">

## Basic operations

A `data.frame` is the most common way to store data in `R` and, in general, is the data structure most often used for data analysis. A `data.frame` organizes features (or variables) associated with observations in a tabular format.

One can create a `data.frame` using the function `data.frame()`. For example, let us create a `data.frame` of students with their name, age, weight (in kg), height (in cm) and favorite sport.

```R
df = data.frame("name" = c("Florian", "Kevin", "Sadri", "Caroline"), 
                "age" = c(21, 24, 26, 28), 
                "weight" = c(75, 65, 78, 65),
                "height" = c(180, 165, 172, 165),
                "sport" = c("running", "boxing", "tennis", "swimming"))
``` 

As it can be observed, a `data.frame` is created by combining vectors of the same length. 

One can inspect the structure of the `data.frame` using the function `str()`, 

```R
str(df)
```

which returns all the structural information of `df`:

```out
'data.frame':	4 obs. of  5 variables:
 $ name  : chr  "Florian" "Kevin" "Sadri" "Caroline"
 $ age   : num  21 24 26 28
 $ weight: num  75 65 78 65
 $ height: num  180 165 172 165
 $ sport : chr  "running" "boxing" "tennis" "swimming"
```

One can print the first or last row of the `data.frame` with the functions `head()` and `tail()` respectively.  

```R
head(df, 1)
tail(df, 1)
``` 

To print the names of the columns, we use the function `colnames()`:

```R
colnames(df)
```

which returns:

```out
[1] "name"   "age"    "weight" "height" "sport" 
```

You can extract a specific column with the `$` operator. For example, you can subset the column `weight` using the following command:

``` 
df$weight
```

which returns:

```out
[1] 75 65 78 65
``` 

Similarly, suppose that you want to add a new column `bmi` which is equal to the weight (in kg) divided by the squared height (in meters). You can create this new variable using the `$` operator as such: 

```R
df$bmi = df$weight / (df$height / 100)^2
```

Now the `bmi` data is also stored in `df`:

```out
      name age weight height    sport      bmi
1  Florian  21     75    180  running 23.14815
2    Kevin  24     65    165   boxing 23.87511
3    Sadri  26     78    172   tennis 26.36560
4 Caroline  28     65    165 swimming 23.87511
```


# Subsetting operations

You can perform conditional subsetting operations on `data.frame`. To illustrate, let us consider the dataset `diet` in the `idarps` package.

```R
library(idarps)
data(diet)
```

Suppose that you want to extract the data of all `Male` from this dataset. You can subset as such:

```R
diet_sub = diet[diet$gender=="Male", ]
```

You can then count the number of `Male` in the study with:

```R
dim(diet_sub)[1]
```

```out
[1] 33
```

Similarly, if you want to extract only the data of `Male` who followed diet A, then you can use:

```R
diet_sub_2= diet[diet$gender=="Male" & diet$diet.type=="A", ]
diet_sub_2
``` 

```out
   id gender age height diet.type initial.weight final.weight
44 15   Male  39    168         A             71         71.6
45 16   Male  31    158         A             72         70.9
46 17   Male  40    173         A             74         69.5
47 18   Male  50    160         A             78         73.9
48 19   Male  43    162         A             80         71.0
49 20   Male  25    165         A             80         77.6
50 21   Male  52    177         A             83         79.1
51 22   Male  42    166         A             85         81.5
52 23   Male  39    166         A             87         81.9
53 24   Male  40    190         A             88         84.5
```


## Exercises

### Exercise 1

Load the `diet` dataset from the `idarps` package and extract subjects with an `initial.weight` smaller or equal to 70.

<codeblock id="chap_intro_r_diet_2">


</codeblock>

### Exercise 2

Load the `diet` dataset from the `idarps` package and extract the data of `Female` who followed diet A.

<codeblock id="chap_intro_r_diet_1">


</codeblock>


### Exercise 3

Load the `diet` dataset from the `idarps` package and extract the data of `Female` who (1) followed either diet B or C, and (2) had a final weight below 65 kg.

<codeblock id="chap_intro_r_diet_3">


</codeblock>





</exercise>

<exercise id="6" title="Basic data visualization">

One advantage of working with `R` when performing data analysis is that `R` provides great data visualization capabilities. 

As an example, let us consider the dataset `diet` in the `idarps` package and create the variable `weight_loss`.

```R 
library(idarps)
data(diet)
diet$weight_loss = diet$final.weight - diet$initial.weight
```

Suppose that now you want to plot the distribution of `weight_loss` using a [boxplot](https://en.wikipedia.org/wiki/Box_plot). You can use the following command:

```
boxplot(diet$weight_loss, main = "Distribution of weight loss")
```

<div style="text-align:center"><img src="weight_loss.png"" alt=" " width="70%"> </div>


Similarly, you can produce a histogram of `weight_loss` with:

```
hist(diet$weight_loss, main = "Distribution of weight loss", xlab = "")
```

<div style="text-align:center"><img src="hist_weight.png"" alt=" " width="70%"> </div>

Suppose that now you want to produce a simple graph of the function \\(f(x) = x\sin(1/x)\\) with \\(x\\) between \\(-2\\) and \\(2\\). We start by generating many values for \\(x\\):

```
x = seq(from = -2, to = 2, by = 0.01)
```

Then we can generate the corresponding \\(f(x)\\) values:

```
y = x * sin(1/x)
```

Lastly, we can plot the graph using the function `plot()`:

```
plot(x, y, type = "l")
```

<div style="text-align:center"><img src="f1.png"" alt=" " width="70%"> </div>

Besides using the base `R`, there are many existing graphics libraries such as [`ggplot2`](https://ggplot2.tidyverse.org/) or [`plotly`](https://plotly.com/r/) which are constructed to help generate high quality graphs in `R`.


</exercise>





