export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center">
            <div className="flex w-full flex-col max-w-sm gap-6">
                {children}
            </div>
        </div>
    )
}