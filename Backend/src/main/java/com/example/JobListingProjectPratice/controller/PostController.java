package com.example.JobListingProjectPratice.controller;

import com.example.JobListingProjectPratice.model.JobPost;
import com.example.JobListingProjectPratice.repo.PostRepo;
import com.example.JobListingProjectPratice.services.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {

    @Autowired
    PostRepo repo;

    @Autowired
    SearchService service;

    @GetMapping("allPosts")
    public List<JobPost>gerAllPost(){
        return  repo.findAll();
    }


   @GetMapping("profile")
    public List<JobPost> searchPost(@RequestParam String keyword){
        return service.searchPostsByKeyword(keyword);
   }

   @PostMapping("post")
    public JobPost addPost(@RequestBody JobPost post){
        return repo.save(post);
   }
}
