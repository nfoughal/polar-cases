'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import GooglerSignInButton from "../GooglerSignInButton"
import { useRouter } from "next/navigation"
import { useToast } from "../ui/use-toast"
 
const formSchema = z
.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(1, 'Password is required').min(8, 'Password must have than 8 characters'),
  ConfirmPassword: z.string().min(1, 'Password confirmation is required'),
})
.refine((data) => data.password === data.ConfirmPassword, {
    path : ['ConfirmPassword'],
    message : "password do not match",
})


const SignUpForm = () => {
  const { toast } = useToast();
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
          ConfirmPassword: "",
        },
      })
      async function onSubmit(values: z.infer<typeof formSchema>) {
        const response = await fetch('api/user', {
          method : 'POST',
          headers: {
            'Content-type' : 'application/json'
          },
          body: JSON.stringify({
            email : values.email,
            password : values.password
          })
        });
        if (response.ok){
          router.push('/signin')
        } else {
          toast({
            title: "Registration Failed",
            description: "Something went wrong. Please try signing up again.",
            variant: 'destructive'
          })
        }
      }
    return(
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ConfirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Re-Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
      <div className="w-full flex text-center justify-around my-8 relative ">
        <div className="h-px w-1/3 bg-gray-400 "></div>
        <span className="absolute -top-3 px-10">or</span>
        <div className="h-px w-1/3 bg-gray-400 "></div>
      </div>
      <GooglerSignInButton>Sign up with google</GooglerSignInButton>
      <p className="text-center text-gray-600 text-sm">
      If you have an account, please&nbsp;
      <Link className="text-blue-500 hover:underline" href={"/signin"}>Sign in</Link>
      </p>
    </Form>
    )
}

export default SignUpForm