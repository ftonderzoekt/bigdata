library(hexSticker)
library(ggplot2)
theme_set(theme_classic())

# Plot
g <- ggplot(mpg, aes(cty), height = 100)
g <- g + geom_density(aes(fill=factor(cyl)), alpha=0.8) +
  theme(axis.title.x=element_blank(),
        axis.text.x=element_blank(),
        axis.ticks.x=element_blank(),
        axis.title.y=element_blank(),
        axis.text.y=element_blank(),
        axis.ticks.y=element_blank(),
        legend.position="none"
        )

sticker(g, package="OGBigD", p_size=5, s_x=1, s_y=.8, s_width=1.2, s_height=1,
        h_fill="#f9690e", h_color="#f39c12",
        filename="logo.png")
