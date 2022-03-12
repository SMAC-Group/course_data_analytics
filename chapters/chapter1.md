---
title: 'Chapter 1: Introduction to Statistical Inference'
description:
  ''
prev: null
next: /chapter2
type: chapter
id: 1
---


<exercise id="1" title="Installing R and RStudio">

## Installing `R`

This course will make use of the `R` programming language. The `R` language is a programming language for statistical computing and graphics supported by the R Core Team and the [`R` Foundation for Statistical Computing](https://www.r-project.org/). `R` is widely used by data scientists, data miners and statisticians for data analysis and developing statistical software.

### Installing `R` on macOS

To install `R` on macOS, download the `.pkg` installer on the [CRAN website](https://cran.r-project.org/bin/macosx/) and execute it once downloaded.

### Installing `R` on Windows

To install `R` on Windows, download the `.exe` installer on the [CRAN website](https://cran.r-project.org/bin/windows/base/) and execute it once downloaded.

### Installing `R` in Ubuntu Linux

To install `R` on Ubuntu Linux, follow the procedure detailled [here](https://cran.r-project.org/).


## Installing `RStudio`

RStudio is an Integrated Development Environment (IDE) for R. An Integrated Development Environment is a software application that provides comprehensive facilities to computer programmers for software development. An IDE normally consists of at least a source code editor, build automation tools and a debugger. We will be using RStudio Desktop throughout the semester. Please install it by going at [RStudio’s official webpage](https://www.rstudio.com/).


### Installing `RStudio` on macOS

To install `RStudio` on macOS, download the macOS `.dmg` installer on the [RStudio’s products page](https://www.rstudio.com/products/rstudio/download/) and execute it once downloaded.

### Installing `RStudio` on Windows

To install `RStudio` on Windows, download the Windows `.exe` installer the [RStudio’s products page](https://www.rstudio.com/products/rstudio/download/) and execute it once downloaded.

### Installing `RStudio` in Ubuntu Linux

To install `RStudio` on Ubuntu Linux, download the Ubuntu/Debian `.deb` installer the [RStudio’s products page](https://www.rstudio.com/products/rstudio/download/).

Open the terminal and run

```sh
sudo dpkg -i rstudio-2022.02.0-443-amd64.deb
```


### Installing `R` package `idar` 

We have developed an `R` package for this class which is called `idar` (Introduction to Data Analytics with `R` - `idar`) and that you can install by running the following code in your R console:

```r
install.packages("devtools")
devtools::install_github("https://github.com/SMAC-Group/idar", force = TRUE)
```

To test if the package was correctly installed you cans simply run

```r
library(idar)
```

If you see no error then the package was correctly installed! Below is a gif illustrating the install of the `idar` `R` package:

<center>

![](idar.gif)

</center>

</exercise>


<exercise id="2" title="Lecture Slides">


View the slides directly in the browser or download the slides
[here](https://github.com/SMAC-Group/course_data_analytics/raw/master/static/Lecture1.pdf). 

<iframe src="/Lecture1.html" width="710" height="530">
</iframe>

<!--

<br>
<br>

<iframe  width="710" height="530" src="https://www.youtube.com/embed/nG5TXyyaeDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

-->


</exercise>

<exercise id="3" title="Application" type = "slides">



<slides source="chapter1_01">
</slides>

</exercise>


<exercise id = "3" title ="Statistical Inference: Exercises">


---

### 1) Consider the dataset `palmerpenguins` in the packages `palmerpenguins`.Represent the bill length for species Gentoo and Chinstrap. We would like to test that the true difference in means for variable `bill_length_mm`
between group Chinstrap and group Gentoo is greater than 0

<codeblock id="01_01">
Check the argument `alternative` in the documentation of function `t.test` (You can find the documentation with `?t.test` )
</codeblock>

### 2) Load the package `idar` and load dataset `diet`. Consider the women  (`"Female"` in variable `gender`) who took diet B (`"B"` in variable `type` ) and wheter if there is evidence of a significant weight loss greater than 0. 


<codeblock id="01_02">

</codeblock>



### 3) In hypothesis testing, false positive also called type I error, which means
<choice id="1">
<opt text="the probability of rejecting null hypothesis when null hypothesis is true." correct="true">
</opt>
<opt text="the probability of not rejecting null hypothesis when null hypothesis is false." >
</opt>
<opt text="the probability of rejecting alternative hypothesis when alternative hypothesis is true.">
</opt>
<opt text="the probability of not rejecting alternative hypothesis when alternative hypothesis is true.">
</opt>
</choice>


### 4) Which statements following is true?
<choice id="2">
<opt text="A test is of significant level alpha when the probability of making a type I error equals 1-alpha." >
</opt>
<opt text="A test is of power beta when the probability to make a type II error is 1-beta." correct="true">
</opt>
<opt text="A test is of significant level alpha when the probability of making a type II error equals 1-alpha.">
</opt>
<opt text="A test is of power beta when the probability to make a type II error is beta.">
</opt>
</choice>

### 5)  Which statement following is false?
<choice id="3">
<opt text="Small p-value indicates strong evidence against null hypothesis." >
</opt>
<opt text="When the p-value is small enough, one says that the test based on the null and alternative hypothesis is significant." >
</opt>
<opt text="When the p-value is not small enough, with the available data, we can reject the null hypothesis."correct="true">
</opt>
<opt text="The obtained p-value summarizes the incompatibility between the data and the model constructed under the set of assumptions.">
</opt>
</choice>

### 6) When a measurement can be thought of as the average of numerous factors, its distribution tends to go to
<choice id="4">
<opt text="A uniform distribution." >
</opt>
<opt text="A Poisson distribution." >
</opt>
<opt text="A Beta distribution.">
</opt>
<opt text="A normal distribution."correct="true">
</opt>
</choice>

### 7)  Which following statement is true?
<choice id="5">
<opt text="the hypotheses of the Wilcoxon signed rank test are on the population mean." >
</opt>
<opt text="the hypotheses of the Wilcoxon signed rank test are on the population median." correct="true">
</opt>
<opt text="the hypotheses of the Wilcoxon signed rank test are on the population standard deviation.">
</opt>
<opt text="the hypotheses of the Wilcoxon signed rank test are on the population mode.">
</opt>
</choice>





### 1) Consider the boxplots of data associated with two groups: "treatment" and "control". Consider that you want to test the difference in the central value of both distributions. What test should you consider and why?

<div style="text-align:center">
<img src="plot1.png" alt=" " width="55%">
</div>

<choice id="6">
<opt text="One should consider a t-test because we want to test the difference in their central value." >
</opt>
<opt text="We should consider a t-test because there are some extreme observations in the control group" >
</opt>
<opt text="We should consider a Wilcoxon rank test because the extreme observations in the control group suggest that the data are not normally distributed and we would prefer to rely on a non-parametric test" correct="true">
</opt>
<opt text="We don't need to test anything because it is clear on the graph that the median of the control group is above the median of the treatment group.">
</opt>
</choice>


### 9) Consider that you observe a total of 50 observations. You would like to test that the true center of the distribution from which the sample you observe is generated is greater than a given value \\( \mu_{H0}\\). How do you compute the correct critical value with a significance level of \\( \alpha = 0.05 \\)? Hint: The degrees of freedom are given by \\( n-1 \\) where \\( n \\) is the number of observations



<choice id="7">
<opt text="<code>qt(p = 0.05, df = 49, lower.tail = FALSE)</code>" correct="true">
</opt>
<opt text="<code>qt(p = 0.05/2, df = 49, lower.tail = FALSE)</code>" >
</opt>
<opt text="<code>pt(q = .95, df = 49)</code>" >
</opt>
<opt text="<code>qt(p=.05, df=49, lower.tail=TRUE)</code>" >
</opt>
</choice>


### 10) Consider that you observe a total of 50 observations. You would like to test that the true center of the distribution from which the sample you observe is generated is not equal to a given value \\( \mu_{H0} \\). How do you compute the correct critical value with a significance level of \\( \alpha = 0.05\\)? Hint: The degrees of freedom are given by \\( n-1 \\) where \\( n\\) is the number of observations



<choice id="8">
<opt text="<code>qt(p = 0.05, df = 49, lower.tail = FALSE)</code>">
</opt>
<opt text="<code>qt(p = 0.05/2, df = 49, lower.tail = FALSE)</code>" correct="true">
</opt>
<opt text="<code>pt(q = .95, df = 49)</code>" >
</opt>
<opt text="<code>qt(p=.05, df=49, lower.tail=TRUE)</code>" >
</opt>
</choice>


### 11) Consider that you observe a total of 30 observations. The estimated mean is 23.5 and the estimated standard deviation is 8.5. You would like to test that the true center of the distribution from which the sample you observe is generated is not equal to a given value \\(\mu_{H0} = 20\\). Compute the test statistic. 


<choice id="9">
<opt text="<code>sqrt(30)*(23.5 - 20) / 8.5</code>" correct="true">
</opt>
<opt text="<code>sqrt(29)*(23.5 - 20) / 8.5</code>" >
</opt>
<opt text="<code>sqrt(29)*((23.5 - 20) / 8.5)</code>" >
</opt>
<opt text="<code>1-pt(sqrt(30)*(23.5 - 20) / 8.5, df = 29)</code>" >
</opt>
</choice>


</exercise>



