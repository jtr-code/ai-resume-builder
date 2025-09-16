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
  Menu,
  X,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonial />
      <Cta />
    </div>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="rounded-xl bg-neutral-800 p-2">
              <Brain className="h-6 w-6 text-neutral-100" />
            </div>
            <span className="text-xl font-bold">ResumeAI</span>
          </div>

          <div className="hidden space-x-8 text-neutral-400 md:flex">
            <a href="#">Templates</a>
            <a href="#">Examples</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            <Button variant="ghost" className="cursor-pointer">
              Login
            </Button>
            <Button className="cursor-pointer bg-neutral-200 text-neutral-900 hover:bg-neutral-300">
              Sign Up
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <Badge variant="outline" className="border-neutral-700 text-neutral-300">
              <Sparkles className="mr-1 h-3 w-3" /> AI-Powered Resume Builder
            </Badge>

            <h1 className="text-5xl leading-tight font-bold">
              Create your{" "}
              <span className="text-neutral-300">professional resume</span> in
              minutes
            </h1>

            <p className="text-lg text-neutral-400">
              Harness the power of AI to build compelling resumes that get noticed.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="cursor-pointer bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
              >
                <FileText className="mr-2 h-5 w-5" />
                Build My Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                <Upload className="mr-2 h-5 w-5" />
                Upload Resume
              </Button>
            </div>

            <div className="flex items-center space-x-2 text-neutral-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span>4.9/5 from 50k+ users</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-neutral-700/20 blur-3xl"></div>

            <Card className="relative border-neutral-800 bg-neutral-900 text-neutral-100 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-700 text-lg font-bold">
                    JD
                  </div>
                  <div>
                    <h3 className="font-bold">John Doe</h3>
                    <p className="text-sm text-neutral-400">Senior Developer</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="mb-2 flex items-center font-semibold">
                    <Award className="mr-2 h-4 w-4 text-neutral-300" />
                    Experience
                  </h4>
                  <div className="rounded bg-neutral-800 p-3">
                    <h5 className="font-medium text-neutral-100">
                      Senior Software Engineer
                    </h5>
                    <p className="text-xs text-neutral-400">
                      TechCorp • 2022-Present
                    </p>
                    <p className="text-sm text-neutral-300">
                      Led development of scalable microservices
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="mb-2 flex items-center font-semibold">
                    <CheckCircle className="mr-2 h-4 w-4 text-neutral-300" />
                    Skills
                  </h4>
                  <div className="flex gap-2">
                    <Badge
                      variant="outline"
                      className="border-neutral-600 text-neutral-200"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-neutral-600 text-neutral-200"
                    >
                      Node.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-neutral-600 text-neutral-200"
                    >
                      AWS
                    </Badge>
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
      description: "Smart suggestions tailored to your industry and experience",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Professional Layouts",
      description: "Clean, ATS-friendly, and recruiter-approved formats",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Customizable",
      description: "Adapt templates easily to your personal style",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Proven Results",
      description: "Trusted by thousands of professionals worldwide",
    },
  ];

  return (
    <section className="border-t border-neutral-800 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Why choose our builder?</h2>
          <p className="mt-2 text-neutral-400">
            Future-ready resumes designed for success.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Card
              key={i}
              className="border-neutral-800 bg-neutral-900 text-neutral-100 transition hover:bg-neutral-800"
            >
              <CardContent className="space-y-3 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded bg-neutral-800">
                  {f.icon}
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-neutral-400">{f.description}</p>
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
        "This AI builder helped me land my dream job! The suggestions were spot-on and saved me hours.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Marketing Manager",
      company: "Meta",
      content:
        "Incredible tool! My resume went from bland to brilliant in just 10 minutes.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Netflix",
      content:
        "The AI suggestions were incredibly relevant to my field. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section className="border-t border-neutral-800 py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <Card className="border-neutral-800 bg-neutral-900 text-neutral-100">
          <CardContent className="p-8">
            <blockquote className="text-neutral-300">
              “{testimonials[currentTestimonial].content}”
            </blockquote>
            <div className="font-semibold">
              {testimonials[currentTestimonial].name}
            </div>
            <div className="text-sm text-neutral-400">
              {testimonials[currentTestimonial].role} at{" "}
              {testimonials[currentTestimonial].company}
            </div>
          </CardContent>
        </Card>
        <div className="mt-4 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentTestimonial(i)}
              className={`h-3 w-3 rounded-full ${
                currentTestimonial === i ? "bg-neutral-200" : "bg-neutral-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold">Ready to build your perfect resume?</h2>
      <p className="mt-2 text-neutral-400">
        Join professionals landing their dream jobs with ResumeAI.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Button
          size="lg"
          className="cursor-pointer bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
        >
          <Sparkles className="mr-2 h-5 w-5" /> Start Building{" "}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button size="lg" variant="outline" className="cursor-pointer">
          <Eye className="mr-2 h-5 w-5" /> View Examples
        </Button>
      </div>
    </section>
  );
}
