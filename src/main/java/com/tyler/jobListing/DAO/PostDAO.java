package com.tyler.jobListing.DAO;

import com.tyler.jobListing.models.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostDAO extends MongoRepository<Post, String> {


}
