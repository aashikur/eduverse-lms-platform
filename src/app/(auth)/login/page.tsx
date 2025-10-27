import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GithubIcon } from "lucide-react";

const LoginPage = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">welcome back!</CardTitle>
                    <CardDescription>Login with Github Email Account</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                    <Button variant={'outline'} className="w-full">
                        <GithubIcon className="size-4"></GithubIcon>
                        Sign in with Github
                    </Button>


                    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                        <span className="relative bg-card z-10 px-2 text-muted-foreground">
                            or login with email
                        </span>
                    </div>

                    <div className="grid gap-3">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" placeholder="example@gmail.com" />
                            <Button>Continue with Email</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginPage;