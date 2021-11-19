# load data and libraries
library(palmerpenguins)
library(dplyr)
library(ggplot2)
data("penguins")

# filter data to only keep Gentoo or Chinstrap
penguins_sub = penguins %>% filter(species %in% c("Gentoo", "Chinstrap"))

# boxplot
ggplot(penguins_sub, aes(x=species, y=bill_length_mm)) + 
  geom_boxplot()

# t test
t.test(formula = ___ ~ ___, alternative = ___)
