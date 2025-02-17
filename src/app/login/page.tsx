'use client'

import { X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import axios from "axios"


const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://deploy-two-jade.vercel.app";





const Page = () => {
    const [isOpen, setIsOpen] = useState(true)
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("");
  const [errors, setErrors] =useState({email:"",password:""})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/api/login`, payload, { withCredentials: true })
      if (response.data.user) { 
        window.location.href = '/';
     

      }
    } catch (error:any) {
      if(error.response.data){
        setErrors({email:error.response.data.email,password:error.response.data.password})
      }
      
    }
  
  };


  if (!isOpen) return null
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
            <h1 className="text-2xl font-semibold text-center">Welcome back!</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-zinc-400">
                  EMAIL ADDRESS
                </Label>
                <Input
                  id="email"
                  placeholder="name@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-800 border-zinc-700"
                />
                <p className="text-red-400">{errors.email}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm text-zinc-400">
                  PASSWORD
                </Label>
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-zinc-800 border-zinc-700"
                />
                <p className=" text-red-500">{errors.password}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" className="border-zinc-700 data-[state=checked]:bg-pink-500" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                <Button variant="link" className="text-pink-400 hover:text-pink-300 p-0 h-auto">
                  Forgot password?
                </Button>
              </div>
              <div className="h-[78px] bg-zinc-800 rounded border border-zinc-700" aria-label="reCAPTCHA">
                {/* reCAPTCHA would be implemented here */}
              </div>
              <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white">Login</Button>
              <div className="text-center space-x-1 text-sm">
                <span className="text-zinc-400">Don't have an account?</span>
                <Button variant="link" className="text-pink-400 hover:text-pink-300 p-0 h-auto">
                    <Link href="/regester">Register</Link>
                  
                </Button>
                <span className="text-zinc-400">or</span>
                <Button variant="link" className="text-pink-400 hover:text-pink-300 p-0 h-auto">
                  Verify
                </Button>
              </div>
            </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
    );
}

export default Page;
