import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import { formatDate } from "../../utils/formatDate";

interface Post {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
  <Grid>
      <Paper elevation={3} sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          component="img"
          src={post.image}
          alt={post.title}
          sx={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 1 }}
        />
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {formatDate(post.date)}
        </Typography>
        <Typography variant="body1">{post.excerpt}</Typography>
        <Button variant="outlined" href={`/posts/${post.slug}`}>
          Batafsil
        </Button>
      </Paper>
    </Grid>
  );
};

export default PostCard;
