import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState([]); // Holds all posts
  const [filteredPosts, setFilteredPosts] = useState([]); // Holds filtered posts based on search

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/allPosts");
        const data = await response.json();
        setPost(data); // Store all posts
        setFilteredPosts(data); // Initially, show all posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Function to handle search and filter posts
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    if (searchQuery === "") {
      // If the search box is empty, show all posts
      setFilteredPosts(post);
    } else {
      // Filter posts based on query with null/undefined checks
      const filtered = post.filter((p) =>
        (p.profile && p.profile.toLowerCase().includes(searchQuery)) || // Check if `profile` exists
        (p.description && p.description.toLowerCase().includes(searchQuery)) || // Check if `description` exists
        (p.skill && p.skill.some((skill) => skill.toLowerCase().includes(searchQuery))) // Check if `skill` exists and contains the keyword
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <Box sx={{ margin: "2%" }}>
      <Button
        sx={{
          margin: "1% 2%",
          padding: "10px 20px",
        }}
        variant="outlined"
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Home
        </Link>
      </Button>
      <Box>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search..."
          sx={{
            width: "100%",
            marginBottom: "20px",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          fullWidth
          value={query}
          onChange={handleSearch} // Update query and filter results
        />
      </Box>
      <Grid container spacing={4}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((p, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} sx={{ marginBottom: "45px" }}>
              <Card
                sx={{
                  padding: "20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                  gap: "15px", // Internal gap between card elements
                  my: "20px", // Add top and bottom spacing
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  {p.profile}
                </Typography>
                <Typography
                  sx={{
                    color: "#585858",
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                  }}
                >
                  Description: {p.description ? p.description : "No description available"}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "500",
                  }}
                >
                  Years of Experience: {p.experience} years
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                  }}
                  variant="body2"
                >
                  Skills:
                </Typography>
                {p.skill && p.skill.length > 0 ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px", // Gap between skill tags
                    }}
                  >
                    {p.skill.map((s, i) => (
                      <Typography
                        key={i}
                        sx={{
                          fontSize: "0.9rem",
                          backgroundColor: "#f0f0f0",
                          padding: "5px 10px",
                          borderRadius: "5px",
                        }}
                      >
                        {s}
                      </Typography>
                    ))}
                  </Box>
                ) : (
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#a0a0a0",
                    }}
                  >
                    No skills listed
                  </Typography>
                )}
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ margin: "2%" }}>
            No posts found for this search.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Feed;

