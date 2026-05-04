package com.tyler.jobListing.DAO;

import com.tyler.jobListing.models.Post;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SearchDAO {

    List<Post> findByText(String text);
}
