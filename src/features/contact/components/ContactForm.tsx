"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { CalendarIcon, Mail, Phone } from "lucide-react";
import { contactFormSchema } from "../schemas/contactSchema";
import { useCreateContactMutation } from "../hooks/useCreateContactMutation";

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      dob: undefined,
      image: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      linkedin: "",
      website: "",
    },
  });

  const { mutate, isPending } = useCreateContactMutation();
  const dob = watch("dob");

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    mutate(data);
    reset();
  };

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6">
      <div className="border-accent rounded-2xl border">
        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  {...register("firstName")}
                />
                {errors.firstName?.message && (
                  <p className="text-sm text-red-500">{errors.firstName.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" {...register("lastName")} />
                {errors.lastName?.message && (
                  <p className="text-sm text-red-500">{errors.lastName.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  placeholder="Software Engineer"
                  {...register("jobTitle")}
                />
                {errors.jobTitle?.message && (
                  <p className="text-sm text-red-500">{errors.jobTitle.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid gap-2">
                <Label>Date of Birth</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      {dob ? format(dob, "PPP") : "Pick a date"}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={dob}
                      onSelect={(date) => setValue("dob", date!)}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {errors.dob?.message && (
                  <p className="text-sm text-red-500">{errors.dob.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="image">Image</Label>
                <Input id="image" type="text" {...register("image")} />
                {errors.image?.message && (
                  <p className="text-sm text-red-500">{errors.image.message}</p>
                )}
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email
                </Label>
                <Input
                  id="email"
                  placeholder="john.doe@example.com"
                  {...register("email")}
                />
                {errors.email?.message && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Phone
                </Label>
                <Input
                  id="phone"
                  placeholder="+1 (234) 567-8900"
                  {...register("phone")}
                />
                {errors.phone?.message && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  placeholder="United States"
                  {...register("country")}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="New York" {...register("state")} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York City" {...register("city")} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="pincode">Postal Code</Label>
                <Input id="pincode" placeholder="10001" {...register("pincode")} />
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/johndoe"
                  {...register("linkedin")}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  placeholder="https://johndoe.com"
                  {...register("website")}
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button type="submit" disabled={isPending} size="lg">
                {isPending ? "Creating Profile..." : "Create Contact Profile"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
