package com.tyler.jobListing.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "jobpost")
public class Post {
    private String profile;
    private String desc;
    private int exp;
    private String[] techs;
}
