'use client'

import React, { useRef } from 'react';
import { ArrowRightIcon, Mail, MessageSquare, User } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID || ''
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || ''
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || ''

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      toast.promise(emailjs
        .sendForm(serviceID, templateId, form.current, {
          publicKey: publicKey,
        }), 
        {
        loading: 'Sending Email...',
        success: (data) => {
          return 'Email has been sent'
        },
        error: 'Failed to send Email',
      })

    }
  };
  return (
    <form className="flex flex-col gap-y-4" onSubmit={sendEmail} ref={form}>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" name="from_name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" name="from_Email" />
        <Mail className="absolute right-6" size={20} />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea placeholder="Type Your Message Here" name='message' />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px] group" type='submit'>
        Connect
        <ArrowRightIcon size={20} className=" group-hover:-rotate-45 transition-all duration-500" />
      </Button>
    </form>
  )
}

export default Form