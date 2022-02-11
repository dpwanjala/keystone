# STEP 1: SIMULATE STUDENT PROFILES ====

# A student profile is observations about a student including their
# 1) identifications i.e id and name
# 2) performance on different concepts

# a) number of students
students.length <- 5

# b) student ids
# initialize empty student.ids vector
student.ids <- c()
# create a vector of questions.id i.e s-1, s-2 etc.
for (student in 1:students.length) {
  student.ids[student] <- paste("s", student, sep = "-")
}

# c) student name
# initialize empty student.names vector
student.names <- c("Josh", "Sasha", "Nora", "DP", "Sofia")

# d) concept.names
concept.names <- c("number", "graph", "algebra", "measurement")

# g) columns for the data set in order they will appear. 
columns <- c("id", "name", concept.names)

# g) create an m (students.length) by n (length of columns) matrix to hold all
# of the simulated data. 
# each row will be observations about a single student
# and columns the different variables measured about that student.

student_profile_matrix <- matrix(nrow = students.length, 
                                 ncol = length(columns),
                                 dimnames = list(student.ids, columns))

# 1 a) simulate student.ids and name to correct column vectors ===== 

# insert student.ids into q_p_matrix
student_profile_matrix[,1] <- student.ids

# insert questions.text into q_p_matrix
student_profile_matrix[,2] <- student.names

# inspect the matrix
str(student_profile_matrix)
head(student_profile_matrix)

# 1 b) simulate scores for each concept ====

# constraints
# a) the score for a concept is either 1 (mastered) or 0 (needs review)
# b) the scores for a concept assumes a binomial distribution.

# use binomial distribution to simulate whether student understands a concept
# or not.


for(concept in concept.names){
  
  set.seed(paste(1, which(concept.names == concept), sep = "")) 
  sim_scores <- rbinom(students.length,1,.5)
  
  # attach this to correct position in the matrix
  student_profile_matrix[, which(colnames(student_profile_matrix) == concept)] <- sim_scores
}

# 1 c) save simulated data to csv in c.data.sim ====
student_profile_df <- as.data.frame(student_profile_matrix)

write.csv(student_profile_df, paste(p.data.sim, "student_profile_sim.csv", 
                                    sep = ""), row.names = FALSE)

# STEP 2: SIMULATE REVIEW MATERIAL PROFILES =====

# A review material profile is observations about a review material its:
# 1) identifications i.e id and name
# 2) concepts the material covers

# a) number of review materials
review.materials.length <- 5

# b) review material ids
# initialize empty ids vector
review.material.ids <- c()

# create a vector of review..id i.e rm-1, rm-2 etc.
for (material in 1:review.materials.length) {
  review.material.ids[material] <- paste("rm", material, sep = "-")
}

# d) review.materials.names
review.materials.names <- c("review material 1", 
                            "review material 2", 
                            "review material 3", 
                            "review material 4", 
                            "review material 5")

# g) create an m (review.materials.length) by n (length of columns) matrix to hold all
# of the simulated data. 

review_material_profile_matrix <- matrix(nrow = review.materials.length, 
                                         ncol = length(columns),
                                         dimnames = list(review.material.ids, columns))


# 2 a) simulate insert review.material.ids and name to correct column vectors  ==== 

# insert student.ids into q_p_matrix
review_material_profile_matrix[,1] <- review.material.ids

# insert questions.text into q_p_matrix
review_material_profile_matrix[,2] <- review.materials.names

# inspect the matrix
str(review_material_profile_matrix)
head(review_material_profile_matrix)

# 2 b) simulate review material scores for each concept =============================

# constraints
# a) the score for a concept is either 1 (covered) or 0 (not covered) by a review material
# b) the score for a concept is normally distributed across the review materials

for(concept in concept.names){
  
  set.seed(paste(2, which(concept.names == concept), sep = "")) 
  
  sim_scores <- rbinom(review.materials.length,1,.5)
  
  # attach this to correct position in the matrix
  review_material_profile_matrix[, which(colnames(review_material_profile_matrix) == concept)] <- sim_scores
}

# 2 c) save simulated data to csv in c.data.sim ====
review_material_profile_df <- as.data.frame(review_material_profile_matrix)

write.csv(review_material_profile_df, paste(p.data.sim, 
                                            "review_material_profile_sim.csv", 
                                            sep = ""), row.names = FALSE)
