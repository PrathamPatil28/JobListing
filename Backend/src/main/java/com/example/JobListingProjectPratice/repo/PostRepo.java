package com.example.JobListingProjectPratice.repo;

import com.example.JobListingProjectPratice.model.JobPost;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepo extends MongoRepository<JobPost,String> {

}
