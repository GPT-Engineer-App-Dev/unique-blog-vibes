import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const recentPosts = [
    { title: "First Post", excerpt: "This is the excerpt for the first post." },
    { title: "Second Post", excerpt: "This is the excerpt for the second post." },
    { title: "Third Post", excerpt: "This is the excerpt for the third post." },
  ];

  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg">A place where I share my thoughts and experiences.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        {recentPosts.map((post, index) => (
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
      </section>
    </div>
  );
};

export default Index;