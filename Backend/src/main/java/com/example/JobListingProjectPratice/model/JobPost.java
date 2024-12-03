package com.example.JobListingProjectPratice.model;


import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document(collection = "posts")
public class JobPost {

    @Field("profile")
    private String profile;

    @Field("description")
    private String desc;

    @Field("experience")
    private int exp;

    @Field("skill")
    private List<String> skill; // Changed to List<String> instead of String[]



    public JobPost(){

    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public int getExp() {
        return exp;
    }

    public void setExp(int exp) {
        this.exp = exp;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public List<String> getSkill() {
        return skill;
    }

    public void setSkill(List<String> skill) {
        this.skill = skill;
    }
}
