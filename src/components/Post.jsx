import { Box, Stack } from "@mui/material";
import React from "react";
import usePost from "../hooks/usePost";
import PostCard from "./PostCard";
import NewPostCard from "./NewPostCard";

const Post = () => {
  const { posts, deletePost, likePost, unlikePost } = usePost();

  return (
    <Box flex={4} sx={{ p: { xs: 0, sm: 2 } }}>
      <Stack spacing={{ sm: 1, md: 2, lg: 4 }}>
        <NewPostCard />
        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              {...post}
              {...{ deletePost, likePost, unlikePost }}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Post;
