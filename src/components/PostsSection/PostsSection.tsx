
import { useEffect, useState } from "react";
import { Typography, Box, Grid, Modal, Paper, IconButton } from "@mui/material";
import * as styles from "./PostsSection.styles";
import PostCard from "./PostCard";

// Custom markdown renderer skeleton
function MarkdownRenderer({ markdown }: { markdown: string }) {
  // TODO: Replace with real markdown renderer
  return <Box sx={{ whiteSpace: "pre-line" }}>{markdown}</Box>;
}

const PostsSection = ({ id }: { id?: string }) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [selectedPost, setSelectedPost] = useState<any | null>(null);
  const [markdown, setMarkdown] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/posts/posts.json")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(console.error);
  }, []);

  const handleOpenPost = async (post: any) => {
    setSelectedPost(post);
    setOpen(true);
    try {
      const res = await fetch(`/posts/${post.slug}.md`);
      const text = await res.text();
      setMarkdown(text);
    } catch {
      setMarkdown("Post matni topilmadi.");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPost(null);
    setMarkdown("");
  };

  return (
    <Box id={id} sx={styles.sectionWrapper}>
      <Typography variant="h4" sx={styles.sectionTitle}>
        So‘nggi yangiliklar
      </Typography>
      <Grid container spacing={4}>
        {posts.map(post => (
          <Grid key={post.id}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                '&:hover': {
                  transform: "scale(1.04)",
                  boxShadow: "0 0 24px 4px #1976d2, 0 0 48px 8px #43a047",
                },
              }}
              onClick={() => handleOpenPost(post)}
            >
              <Box
                component="img"
                src={post.image}
                alt={post.title}
                sx={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 1 }}
              />
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {post.date}
              </Typography>
              <Typography variant="body1">{post.excerpt}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ maxWidth: 600, bgcolor: "background.paper", p: 4, mx: "auto", my: 8, borderRadius: 2, boxShadow: 24, position: "relative" }}>
          <IconButton onClick={handleClose} sx={{ position: "absolute", top: 8, right: 8 }}>
            <span aria-label="Yopish">✕</span>
          </IconButton>
          {selectedPost && (
            <>
              <Typography variant="h5" mb={2}>{selectedPost.title}</Typography>
              <MarkdownRenderer markdown={markdown} />
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default PostsSection;
