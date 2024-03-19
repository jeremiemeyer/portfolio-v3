"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "../ui/use-toast"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  fullname: z.string().min(1, {
    message: "Your name is required.",
  }),
  email: z
    .string()
    .min(1, { message: "An email is required." })
    .email({
      message: "This email is invalid.",
    })
    .min(1, {
      message: "An email is required.",
    }),
  bodytext: z
    .string()
    .min(1, {
      message: "A message is required.",
    })
    .min(20, {
      message: "Please enter at least 20 characters.",
    }),
})

interface ContactFormProps {
  className?: string
}

export default function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const toast = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      bodytext: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    let data = {
      fullname: `${values.fullname}`,
      email: `${values.email}`,
      bodytext: `${values.bodytext}`,
    }

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      // console.log("Response received")
      if (res.status === 200) {
        setIsSubmitting(false)
        toast.toast({
          title: "Message sent!",
          description: "I'll get back to you asap",
        })
        // console.log("Response succeeded!")
        form.reset()
      } else {
        setIsSubmitting(false)
        toast.toast({
          title: "Message could not be sent",
          description: "Something went wrong",
        })
      }
    })
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("space-y-4 w-full", className)}
        >
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-zinc-100 dark:bg-zinc-800 text-black dark:text-zinc-100 rounded-2xl"
                    placeholder="Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    className="bg-zinc-100 dark:bg-zinc-800 text-black dark:text-zinc-100 rounded-2xl"
                    placeholder="E-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bodytext"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-zinc-100 dark:bg-zinc-800 text-black dark:text-zinc-100 rounded-2xl"
                    rows={6}
                    placeholder="Message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div />
          <Button variant="jm" type="submit" disabled={isSubmitting}>
            {!isSubmitting ? "Send" : "Sending..."}
          </Button>
        </form>
      </Form>
    </>
  )
}
