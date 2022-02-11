# PLOT heat map of student_review_material_sim.csv =============================

# read s_rm_sim_csv
s_rm_sim_csv <- read.csv(paste(p.output, 
                               "student_review_material_sim.csv", sep = "" ))

# read this to access labels
s_rm_blend_csv <- read.csv(paste(p.data.clean, 
                                 "student_review_material_sim_blend.csv", 
                                 sep = "" ))


# inspect data
str(s_rm_sim_csv)
head(s_rm_sim_csv)

# convert into a matrix
s_rm_sim_matrix <- as.matrix(s_rm_sim_csv)[,-1]

labrow <- s_rm_blend_csv$id
labcol <- s_rm_blend_csv$id

# save heat map figure

pdf(paste(p.fig, "student_reviw_material_sim_heat_map.pdf", sep = ""))
par(mfrow=c(1,1))
heatmap(s_rm_sim_matrix,
        Rowv = NA,
        symm = T,
        labRow = labrow,
        labCol = labcol)

dev.off()


# later: Create table to show number of overlapping concepts by count