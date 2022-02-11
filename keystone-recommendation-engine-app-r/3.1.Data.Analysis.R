# calculate student and review material pairwise cosine similarity ====

student_review_material_sim_blend_csv <- read.csv(paste(p.data.clean, "student_review_material_sim_blend.csv", 
                                      sep = "" ))

# inspect data
str(student_review_material_sim_blend_csv)
head(student_review_material_sim_blend_csv)


# select section of student_review_material_sim_blend_csv with features we are 
# interested in, exclude id and name

features_col <- which(colnames(student_review_material_sim_blend_csv) 
                      %in% c("number", "graph", "algebra", "measurement"))

entities_feature_df <- student_review_material_sim_blend_csv[,features_col]


# inspect data
str(entities_feature_df)
head(entities_feature_df)

# - convert the data frame into a matrix so we can easily do vector-wise 
# calculations. 
# - each row vector in a matrix is a single question and the column are the concept

entities_feature_matrix <- as.matrix(entities_feature_df, 
                                     rownames = TRUE, 
                                     rownames.value = student_review_material_sim_blend_csv$id)

# calculate the entities feature pairwise cosine similarity
entities_feature_sim <- cosine(t(entities_feature_matrix))

# SAVE entities_feature_sim as a data frame of similarity scores to csv in c.output 

entities_feature_sim <- as.data.frame(entities_feature_sim)

# add rownames and colnames
colnames(entities_feature_sim) <- student_review_material_sim_blend_csv$id
rownames(entities_feature_sim) <- student_review_material_sim_blend_csv$id

write.csv(entities_feature_sim, paste(p.output, "student_review_material_sim.csv",
                            sep = ""), row.names = TRUE)

