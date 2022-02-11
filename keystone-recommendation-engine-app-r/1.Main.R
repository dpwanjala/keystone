# working directory location

wk.dir <- getwd()

# directories list

folder.names <- c("a.data.raw","b.data.clean", "c.data.sim", "d.output","e.figures")

# create directories

for(i in 1:length(folder.names)){ 
  if(file.exists(folder.names[i]) == FALSE){
    dir.create(folder.names[i])
  } 
}

# path names to variables

p.data.raw <- paste(wk.dir, "/", folder.names[1], "/", sep = "")
p.data.clean <- paste(wk.dir, "/", folder.names[2], "/", sep = "")
p.data.sim <- paste(wk.dir, "/", folder.names[3], "/", sep = "")
p.output <- paste(wk.dir, "/", folder.names[4], "/", sep = "")
p.fig <- paste(wk.dir, "/", folder.names[5], "/", sep = "")


