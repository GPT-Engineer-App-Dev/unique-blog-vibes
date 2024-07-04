import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    { title: "First Post", excerpt: "This is the excerpt for the first post." },
    { title: "Second Post", excerpt: "This is the excerpt for the second post." },
    { title: "Third Post", excerpt: "This is the excerpt for the third post." },
  ];

  return (
    <div className="container mx-auto p-4">
      {posts.map((post, index) => (
        <Card key={index} className="mb-4">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.excerpt}</p>
            <a href="#" className="text-blue-500">Read More</a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Blog;