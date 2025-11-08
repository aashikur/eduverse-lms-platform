"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
//   Google,
  Github,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  password: string;
  confirm: string;
  agree: boolean;
}

interface ErrorState {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
  agree?: string;
}



export default function RegisterPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    confirm: "",
    agree: false,
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorState>({});

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function validate(): ErrorState {
    const err: ErrorState = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) err.email = "Enter a valid email";
    if (form.password.length < 8) err.password = "Password must be at least 8 characters";
    if (form.password !== form.confirm) err.confirm = "Passwords do not match";
    if (!form.agree) err.agree = "You must accept the terms";
    return err;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);

    alert("Registered — implement server integration.");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-6">
      <motion.div initial="hidden" animate="visible"  className="w-full max-w-md">
        <Card className="rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
          <CardHeader className="px-6 pt-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full  from-indigo-500 to-pink-500 w-12 h-12 flex items-center justify-center text-white shadow-md">
                <User size={18} />
              </div>
              <div>
                <CardTitle className="text-lg">Create your account</CardTitle>
                <p className="text-sm text-slate-500 dark:text-slate-400">Join us — secure, fast, and designed for creators.</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-6 py-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <Label className="mb-2">Full name</Label>
                <div className="relative">
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={cn(
                      "pl-10 rounded-xl border hover:border-slate-300 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900",
                      errors.name && "border-red-400"
                    )}
                  />
                  <User size={16} className="absolute left-3 top-3 text-slate-400" />
                </div>
                {errors.name && <p className="text-xs mt-1 text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <Label className="mb-2">Email</Label>
                <div className="relative">
                  <Input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={cn(
                      "pl-10 rounded-xl border hover:border-slate-300 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900",
                      errors.email && "border-red-400"
                    )}
                  />
                  <Mail size={16} className="absolute left-3 top-3 text-slate-400" />
                </div>
                {errors.email && <p className="text-xs mt-1 text-red-500">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <Label className="mb-2">Password</Label>
                <div className="relative">
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    className={cn(
                      "pl-10 rounded-xl border hover:border-slate-300 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900",
                      errors.password && "border-red-400"
                    )}
                  />
                  <Lock size={16} className="absolute left-3 top-3 text-slate-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label="toggle password"
                    className="absolute right-3 top-2.5 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && <p className="text-xs mt-1 text-red-500">{errors.password}</p>}
              </div>

              {/* Confirm */}
              <div>
                <Label className="mb-2">Confirm password</Label>
                <Input
                  name="confirm"
                  type={showPassword ? "text" : "password"}
                  value={form.confirm}
                  onChange={handleChange}
                  placeholder="Repeat your password"
                  className={cn(
                    "rounded-xl border hover:border-slate-300 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900",
                    errors.confirm && "border-red-400"
                  )}
                />
                {errors.confirm && <p className="text-xs mt-1 text-red-500">{errors.confirm}</p>}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <Checkbox name="agree" checked={form.agree} onCheckedChange={(v) => setForm((prev) => ({ ...prev, agree: !!v }))} />
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  I agree to the <a className="underline">Terms</a> and <a className="underline">Privacy Policy</a>.
                  {errors.agree && <p className="text-xs mt-1 text-red-500">{errors.agree}</p>}
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full rounded-xl py-3" disabled={loading}>
                  {loading ? "Creating account..." : "Create account"}
                </Button>
              </div>

              <div className="text-center text-sm text-slate-500 dark:text-slate-400">or continue with</div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="rounded-xl flex items-center justify-center gap-2 py-3">
                  {/* <Google size={16} /> Google */}
                </Button>
                <Button variant="outline" className="rounded-xl flex items-center justify-center gap-2 py-3">
                  <Github size={16} /> Github
                </Button>
              </div>
            </form>
          </CardContent>

          <CardFooter className="px-6 py-4">
            <div className="w-full text-center text-sm text-slate-600 dark:text-slate-400">
              Already have an account? <a className="underline">Log in</a>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}