import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export default function AuthLayout({ children }: { children: React.ReactNode }) { 
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center">
            <div className="flex w-full flex-col max-w-sm gap-6">
                <Link href="/" className={buttonVariants({
                    variant: "outline",
                    className: "absolute top-4 left-4"
                })}>
                    <ArrowLeft className="size-4" />
                    Back
                </Link>

                <div className="flex w-full max-w-sm flex-col gap-6">
                    <Link className="flex gap-2 items-center self-center font-medium" href="/">
                        <Image src={logo} alt="logo" width={32} height={32} />
                        Eduverse LMS
                    </Link>
                </div>
                {children}

                <div className="text-balance text-center text-xs text-muted-foreground">
                    <p>By clicking continue, you agree to our
                        {" "}
                        <span className="hover:text-primary hover:underline">Terms of Service</span>
                        {" "} and
                        <span className="hover:text-primary hover:underline"> Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div>
    )
}