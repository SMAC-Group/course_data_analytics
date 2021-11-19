# load data and libraries
library(idar)
data(diet)

# Compute weight loss
diet$weight.loss = diet$initial.weight - diet$final.weight

# Extract data for women who take diet B
X = diet[diet$gender =="Female" & diet$diet.type == "B", ]$weight.loss

# t test
t.test(X, alternative = "greater")

# Wilcoxon test
wilcox.test(X, alternative = "greater")