'use client'

import { X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import axios from "axios"


const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://deploy-two-jade.vercel.app";


const Page = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] =useState({email:"",password:""})


  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordsMatch(value === password);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!passwordsMatch) return;

    const payload = {
      name,
      email,
      password,
    };

    
    try {
      const response = await axios.post(`${API_BASE_URL}/api/createUser`, payload, { withCredentials: true })
      if (response.data.user) {        
        console.log(response.data);
     
          window.location.href = '/';
        
      }
    } catch (error:any) {
     
      
      setErrors({email:error.response.data.email,password:error.response.data.password})
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-zinc-900 text-white border-zinc-800">
        <CardHeader className="relative p-0">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 text-zinc-400 hover:text-white"
            onClick={() => {
              window.location.href = '/';
              setIsOpen(false)}}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-center">Create an Account</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm text-zinc-400">
                  YOUR NAME
                </Label>
                <Input
                  id="name"
                  placeholder="Name"
                  required
                  className="bg-zinc-800 border-zinc-700"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-zinc-400">
                  EMAIL ADDRESS
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@email.com"
                  required
                  className="bg-zinc-800 border-zinc-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="text-red-600">{errors.email}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm text-zinc-400">
                  PASSWORD
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-zinc-800 border-zinc-700"
                />
                <p className="text-red-600">{errors.password}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-sm text-zinc-400">
                  CONFIRM PASSWORD
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="bg-zinc-800 border-zinc-700"
                />
                {!passwordsMatch && confirmPassword && (
                  <p className="text-red-400 text-sm">Passwords do not match</p>
                )}
              </div>
              <div className="h-[78px] bg-zinc-800 rounded border border-zinc-700" aria-label="reCAPTCHA">
                {/* reCAPTCHA would be implemented here */}
              </div>
              <Button 
                type="submit" 
                className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                disabled={!passwordsMatch}
              >
                Register
              </Button>
              <div className="text-center space-x-1 text-sm">
                <span className="text-zinc-400">Have an account?</span>
                <Button variant="link" className="text-pink-400 hover:text-pink-300 p-0 h-auto">
                  <Link href="/login">Login</Link>
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;
