# calculate cosine similarity ====
# this function takes in either a pair of vectors or a matrix and return 
# pairwise similarity for the vectors or column vectors if matrix

cosine <- function( x, y=NULL ) {
  
  if ( is.matrix(x) && is.null(y) ) {
    
    co = array(0,c(ncol(x),ncol(x)))
    f = colnames( x )
    dimnames(co) = list(f,f)
    
    for (i in 2:ncol(x)) {
      for (j in 1:(i-1)) {
        co[i,j] = cosine(x[,i], x[,j])
      }
    }
    co = co + t(co)
    diag(co) = 1
    
    return (as.matrix(co))
    
  } else if ( is.vector(x) && is.vector(y) ) {
    return ( crossprod(x,y) / sqrt( crossprod(x)*crossprod(y) ) )
  } else {
    stop("argument mismatch. Either one matrix or two vectors needed as input.")
  }
  
}

# get neighbors function ====
# this functions returns most similar entities ordered from most similar to least

get_neighbors <- function(item, similarity_matrix, entity_ids){
  
 
  # retrieve all similarities score for item
  similarity_scores <- similarity_matrix[item,]
  
  # bind the scores to entity id by creating a data frame
  data <- cbind.data.frame(entity_ids, similarity_scores)
  
  # sort by similarity_scores in descending similarity
  #str(as.numeric(similarity_scores))
  df <- data[order(-as.numeric(data$similarity_scores)),]
  
  # remove similarity score with itself
  df <- df[-c(which(df$entity_ids == entity_ids[item])),]
  
  return(df)
}