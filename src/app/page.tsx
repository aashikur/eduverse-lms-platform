import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function HomePage() {
  return (
    <div>
     <Button>Button</Button>
     <Button variant="destructive">Button</Button>
     <Button variant="outline">Button</Button>
     <Button variant="secondary">Button</Button>
     <Button variant="ghost">Button</Button>
     <Button variant="link">Button</Button>
     <Card>
       <CardHeader>
        <CardTitle>Toggle Theme is here</CardTitle>
        <CardDescription>
          Choose your theme : light | dark | system
        </CardDescription>
       </CardHeader>

       <CardContent>
         <ThemeToggle></ThemeToggle>
       </CardContent>
     </Card>
     
     
    </div>
  );
}
