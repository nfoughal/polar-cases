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
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useToast } from "../ui/use-toast"
 
const formSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(1, 'Password is required').min(8, 'Password must have than 8 characters'),
})


const SignInForm = () => {
  const { toast } = useToast();
  const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })
      async function onSubmit(values: z.infer<typeof formSchema>) {
        const signinData = await signIn('credentials', {
          email: values.email,
          password: values.password,
          redirect: false,
        });
        if(signinData?.error){
          toast({
            title: "Access denied :",
            description: "Verify your email and password.",
            variant: 'destructive'
          })
        }else{
          window.location.href = '/'
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
        <Button type="submit" className="w-full">Submit</Button>
      </form>
      <div className="w-full flex text-center justify-around my-8 relative ">
        <div className="h-px w-1/3 bg-gray-400 "></div>
        <span className="absolute -top-3 px-10">or</span>
        <div className="h-px w-1/3 bg-gray-400 "></div>
      </div>
      <GooglerSignInButton>Sign in with google</GooglerSignInButton>
      <p className="text-center text-gray-600 text-sm">
      If you don&apos;t have an account, please&nbsp;
      <Link className="text-blue-500 hover:underline" href={"/signup"}>Sign up</Link>
      </p>
    </Form>
    )
}

export default SignInForm