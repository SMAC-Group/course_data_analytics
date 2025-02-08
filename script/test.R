# install.packages("idarps")

# Import data comments!!
library(idarps) 
data(diet)

# new comment
head(diet)
View(diet)


boxplot(diet$initial.weight)

library(idarps)
data(diet)

# Compute weight loss
diet$weight.loss = diet$initial.weight - diet$final.weight

# Select diet
posw = diet$diet.type=="A"

# Variable of interest
dietA = diet$weight.loss[posw]
dietA


# Import data
library(idarps)
data(diet)

# Compute weight loss
diet$weight.loss = diet$initial.weight - diet$final.weight

# Select diet
posw = diet$diet.type=="A"

# Variable of interest
dietA = diet$weight.loss[posw]

# Boxplot
boxplot_w_points(dietA)

# Histogram
hist_compare_to_normal(dietA)


# Import data
library(idarps)
data(diet)

# Compute weight loss
diet$weight.loss = diet$initial.weight - diet$final.weight

# Select diet
posw = diet$diet.type=="A"

# Variable of interest
dietA = diet$weight.loss[posw]

# Perform test
wilcox.test(dietA, alternative = "greater")


library(idarps)
data(codex)





