package com.tyler.jobListing.controllers;

import com.tyler.jobListing.DAO.PostDAO;
import com.tyler.jobListing.DAO.SearchDAO;
import com.tyler.jobListing.models.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/version1")
public class PostController {

    @Autowired
    private PostDAO dao;


    @Autowired
    private SearchDAO searchDao;

    @GetMapping("/posts")
    public ResponseEntity<List<Post>> getAllPosts(){
        List<Post> posts = dao.findAll();

        if(posts.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(posts,HttpStatus.OK);
    }

    @GetMapping("/posts/search/{text}")
    public ResponseEntity<List<Post>> search(@PathVariable String text){
        List<Post> posts = searchDao.findByText(text);

        if(posts.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(posts,HttpStatus.OK);
    }
    @PostMapping("/posts")
    public ResponseEntity<Post> addPost(@RequestBody Post post){

        return new ResponseEntity<>(dao.save(post),HttpStatus.OK);
    }
}
