import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-48 h-48 rounded-full mb-4" />
          <p>
            Hello! I'm the author of this blog. I write about various topics that interest me, ranging from technology to personal development.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;