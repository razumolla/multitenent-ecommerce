import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl bg-fuchsia-300">Welcome to Ecom-Web</h1>
      <p>This is a simple starter kit for your next ecommerce project.</p>
      <Button variant="outline">Get Started</Button>
      <Button variant="secondary" size="icon" className="size-8">
        <ChevronRightIcon />
      </Button>

      <h1>Features</h1>

      <Button variant="link">Next.js</Button>
    </div>
  );
}
