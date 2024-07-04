import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", excerpt: "This is the excerpt for the first post." },
    { id: 2, title: "Second Post", excerpt: "This is the excerpt for the second post." },
    { id: 3, title: "Third Post", excerpt: "This is the excerpt for the third post." },
  ]);

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      {posts.map((post) => (
        <Card key={post.id} className="mb-4">
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