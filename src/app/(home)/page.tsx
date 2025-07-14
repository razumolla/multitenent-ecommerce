import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex  flex-col min-h-screen gap-y-4 p-4">
      <div>
        <Button variant="elevated">I am Button</Button>
      </div>

      <div>
        <Input type="text" placeholder="Input data" />
      </div>

      <div>
        <p>Welcome to your multitenant ecommerce app.</p>
        <p>Welcome to your multitenant ecommerce app.</p>
        <p>Welcome to your multitenant ecommerce app.</p>
        <Checkbox>Checkbox</Checkbox>
      </div>

      <Progress value={50} max={100} />
      <Textarea placeholder="This is description" />
    </div>
  );
}
