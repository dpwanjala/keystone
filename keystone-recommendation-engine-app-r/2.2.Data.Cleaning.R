# - we want to create one data set that includes observations from both
# student_profile_sim.csv and review_material_profile_sim.csv.
# - we can do this because the two data sets have exactly the same columns names
# and types. i.e they capture the same information.
# - doing this will be useful because we want to embed this entities in the
# same vector space.

# read from c.data.sim
student_profile_sim_csv <- read.csv(paste(p.data.sim, 
                                          "student_profile_sim.csv", sep = "" ))
review_material_profile_sim_csv <- read.csv(paste(p.data.sim, 
                                                  "review_material_profile_sim.csv", 
                                                  sep = "" ))

# inspect data
str(student_profile_sim_csv)
head(student_profile_sim_csv)
str(review_material_profile_sim_csv)
head(review_material_profile_sim_csv)

# stacking two data frames on top of each other, appending one to the other
student_review_material_blend <- rbind(student_profile_sim_csv, 
                                       review_material_profile_sim_csv)

# save the blended data set
write.csv(student_review_material_blend[,], paste(p.data.clean, "student_review_material_sim_blend.csv", sep = ""), row.names = TRUE)

rm(student_review_material_blend)