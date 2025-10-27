import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon } from "lucide-react";

const LoginPage = () => {
    return (
        <div>
            <Card>
               <CardHeader>
                <CardTitle className="text-xl">welcome back!</CardTitle>
                <CardDescription>Login with Github Email Account</CardDescription>
               </CardHeader>

               <CardContent>
                 <Button variant={'outline'} className="w-full">
                    <GithubIcon className="size-4"></GithubIcon>
                    Sign in with Github
                 </Button>
               </CardContent>
            </Card>
        </div>
    );
};

export default LoginPage;