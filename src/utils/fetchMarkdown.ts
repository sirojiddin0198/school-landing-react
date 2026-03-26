export interface Post {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch("/posts/posts.json");
  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
  }
  const data: Post[] = await response.json();
  return data;
};

export const fetchPostMarkdown = async (slug: string): Promise<string> => {
  const response = await fetch(`/posts/${slug}.md`);
  if (!response.ok) {
    throw new Error(`Failed to fetch post content: ${response.status} ${response.statusText}`);
  }
  return response.text();
};
