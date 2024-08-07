'use client'

import { ArrowRightIcon, Mail, MessageSquare, User } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
        {/* input */}
        <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="Name"/>
            <User className="absolute right-6" size={20}/>
        </div>
                {/* input */}
                <div className="relative flex items-center">
            <Input type="email" id="email" placeholder="Email"/>
            <Mail className="absolute right-6" size={20}/>
        </div>
                {/* textarea */}
                <div className="relative flex items-center">
            <Textarea placeholder="Type Your Message Here"/>
            <MessageSquare className="absolute top-4 right-6" size={20}/>
        </div>
        <Button className="flex items-center gap-x-1 max-w-[166px] group">
            Connect
            <ArrowRightIcon size={20} className=" group-hover:-rotate-45 transition-all duration-500"/>
            </Button>
    </form>
  )
}

export default Form