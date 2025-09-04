export const fetchMarkdown = async () => {
  // posts.json faylini public/posts/posts.json dan o‘qiymiz
  const response = await fetch("/posts/posts.json");
  const data = await response.json();

  // Har bir post uchun kerakli ma’lumotlarni shakllantirish
  return data.map((post: any) => ({
    title: post.title,
    date: post.date,
    excerpt: post.excerpt,
    image: post.image,
    filename: post.filename,
  }));
};
