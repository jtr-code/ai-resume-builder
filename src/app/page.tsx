"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  FileText,
  ArrowRight,
  Upload,
  Sparkles,
  Star,
  Award,
  CheckCircle,
  Eye,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonial />
      <Cta />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-lg">
            <Brain className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold">ResumeAI</span>
        </div>

        <div className="hidden flex-1 items-center justify-center space-x-8 text-sm font-medium md:flex">
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Templates
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Examples
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Resources
          </a>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <Link href={"auth/signin"}>
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href={"auth/signin"}>
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="container py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center space-y-8">
          <Badge variant="secondary" className="w-fit">
            <Sparkles className="mr-2 h-3 w-3" />
            AI-Powered Resume Builder
          </Badge>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Create your <span className="text-primary">professional resume</span>{" "}
              in minutes
            </h1>
            <p className="text-muted-foreground max-w-[600px] text-xl">
              Harness the power of AI to build compelling resumes that get noticed by
              recruiters and hiring managers.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              <FileText className="mr-2 h-5 w-5" />
              Build My Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Upload className="mr-2 h-5 w-5" />
              Upload Resume
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">
              4.9/5 from 50k+ users
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="from-primary/20 to-secondary/20 absolute -inset-4 rounded-3xl bg-gradient-to-r blur-3xl" />
            <Card className="relative w-full max-w-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold">
                    JD
                  </div>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-muted-foreground text-sm">Senior Developer</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="mb-2 flex items-center text-sm font-medium">
                      <Award className="text-primary mr-2 h-4 w-4" />
                      Experience
                    </h4>
                    <Card className="bg-muted/50">
                      <CardContent className="p-3">
                        <h5 className="font-medium">Senior Software Engineer</h5>
                        <p className="text-muted-foreground text-xs">
                          TechCorp • 2022-Present
                        </p>
                        <p className="mt-1 text-sm">
                          Led development of scalable microservices
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center text-sm font-medium">
                      <CheckCircle className="text-primary mr-2 h-4 w-4" />
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">AWS</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Content",
      description:
        "Smart suggestions tailored to your industry and experience level",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Professional Layouts",
      description: "Clean, ATS-friendly, and recruiter-approved resume formats",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Fully Customizable",
      description: "Easily adapt templates to match your personal brand and style",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Proven Results",
      description:
        "Trusted by thousands of professionals landing dream jobs worldwide",
    },
  ];

  return (
    <section className="bg-muted/50 border-t py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why choose our builder?
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            {
              "Future-ready resumes designed for success in today's competitive job market."
            }
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="group transition-all duration-200 hover:shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex h-16 w-16 items-center justify-center rounded-lg transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Google",
      content:
        "This AI builder helped me land my dream job! The suggestions were incredibly relevant and saved me hours of writing.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Marketing Manager",
      company: "Meta",
      content:
        "Incredible tool! My resume went from bland to brilliant in just 10 minutes. The AI really understands what recruiters want.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Netflix",
      content:
        "The AI suggestions were incredibly relevant to my field. I got 3x more interviews after using this platform!",
      rating: 5,
    },
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-16 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Loved by professionals worldwide
          </h2>

          <Card className="mx-auto max-w-2xl">
            <CardContent className="p-8">
              <div className="mb-6 flex justify-center">
                <div className="flex">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>
              </div>

              <blockquote className="mb-6 text-lg leading-relaxed">
                {`"${testimonials[currentTestimonial].content}"`}
              </blockquote>

              <div className="text-center">
                <div className="text-lg font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonials[currentTestimonial].role} at{" "}
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  currentTestimonial === i ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="bg-muted/50 border-t py-24">
      <div className="container text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to build your perfect resume?
            </h2>
            <p className="text-muted-foreground text-xl">
              Join thousands of professionals who are landing their dream jobs with
              ResumeAI.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="sm:w-auto">
              <Sparkles className="mr-2 h-5 w-5" />
              Start Building Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="sm:w-auto">
              <Eye className="mr-2 h-5 w-5" />
              View Examples
            </Button>
          </div>

          <p className="text-muted-foreground text-sm">
            No credit card required • Free to start • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
