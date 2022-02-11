# MAKE A RECOMMENDATION FOR REVIEW MATERIAL GIVEN STUDENT PROFILE ====

# Change this values here and run this file to make a recommendation =====

# student for whom to make a review material recommendation
# improve this to take a vector to make recommendations in bulk
rec_students <- c(1,2,3,4,5)

# number of reviw material recommendations you want to make
num_recommendations <- 3

# strategy
# 1. given a student profile, use a modified version of k nearest neighbors
# algorithm to return the entities that are furthest from our student profile.
# 2. recommend first the review material that is furthest from the student


# read this to access labels
s_rm_blend_csv <- read.csv(paste(p.data.clean, 
                                 "student_review_material_sim_blend.csv", 
                                 sep = "" ))

rm_sim_csv <- read.csv(paste(p.data.sim, 
                                 "review_material_profile_sim.csv", 
                                 sep = "" ))

s_sim_csv <- read.csv(paste(p.data.sim, 
                             "student_profile_sim.csv", 
                             sep = "" ))

# read this to access the similarity matrix
s_rm_sim_csv <- read.csv(paste(p.output, 
                               "student_review_material_sim.csv", sep = "" ))

# inspect data
str(s_rm_sim_csv)
head(s_rm_sim_csv)

# convert into a matrix
s_rm_sim_matrix <- as.matrix(s_rm_sim_csv)[,-1]

labrow <- s_rm_blend_csv$id
labcol <- s_rm_blend_csv$id

# get recommendations for as many students as we like
recommendations_df <- as.data.frame(c())

for (student in rec_students) {
  # pull up corresponding student from list
  student_name <- s_sim_csv[student,2]
  student_id <- s_sim_csv[student,1]
  
  # get_neighbors takes as input an entity id, a similarity matrix and entity_ids
  
  neighbors <- get_neighbors(student, s_rm_sim_matrix, labrow)
  # recommend items from above list in the order they appear
  
  
  # filter only for review materials and not other students
  
  neighbors_rm <- neighbors[which(neighbors[,1] %in% rm_sim_csv[,1]),]
  
  recommendation <- neighbors_rm[c(1:num_recommendations),]
  
  # add student name to recommendation
  recommendation <- cbind(rep(student_id, num_recommendations), 
                          rep(student_name, num_recommendations), recommendation)
  
  colnames(recommendation) <- c("student id", "name", "review material", 
                                "similarity score")
  
  recommendations_df <- rbind(recommendations_df, recommendation)
  
}

# replace review material with name of the review material
# 
# recommendations_df[,2]
# 
# which(rm_sim_csv[,1] %in% unique(recommendations_df[,2]))

# Save recommendations to output 


# add rownames and colnames
# colnames(entities_feature_sim) <- student_review_material_sim_blend_csv$id
# rownames(entities_feature_sim) <- student_review_material_sim_blend_csv$id

write.csv(recommendations_df, paste(p.output, "recommendations.csv",
                                      sep = ""), row.names = FALSE)



