package com.example.JobListingProjectPratice.services;

import com.example.JobListingProjectPratice.model.JobPost;
import com.example.JobListingProjectPratice.repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SearchService {

    @Autowired
    private PostRepo postRepo;

    public List<JobPost> searchPostsByKeyword(String keyword) {
        // Fetch all job posts from the repository
        List<JobPost> jobPosts = postRepo.findAll();

        // Filter the job posts based on the keyword
        return jobPosts.stream()
                .filter(jobPost ->
                        (jobPost.getProfile() != null && jobPost.getProfile().toLowerCase().contains(keyword.toLowerCase())) ||
                                (jobPost.getDesc() != null && jobPost.getDesc().toLowerCase().contains(keyword.toLowerCase())) ||
                                (jobPost.getSkill()!= null && jobPost.getSkill().stream()
                                        .anyMatch(tech -> tech.toLowerCase().contains(keyword.toLowerCase())))
                )
                .collect(Collectors.toList());
    }
}
