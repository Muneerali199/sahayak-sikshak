"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BrainCircuit,
  Languages,
  Paintbrush,
  BookOpenCheck,
  Sparkles,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons";

export default function LandingPage() {
  const features = [
    {
      icon: <Languages className="w-8 h-8 text-primary" />,
      title: "Localized Content Generation",
      description: "Create stories and examples in Hindi, Marathi, and more from a simple prompt.",
    },
    {
      icon: <BookOpenCheck className="w-8 h-8 text-primary" />,
      title: "Differentiated Materials",
      description: "Generate multiple versions of a worksheet from a textbook photo for different grade levels.",
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
      title: "Instant Knowledge Base",
      description: "Get simple, clear explanations for complex student questions with voice or text.",
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-primary" />,
      title: "Visual Aid Design",
      description: "Describe a concept and get a simple visual aid you can draw on a blackboard.",
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-primary" />,
      title: "Weekly Lesson Planner",
      description: "Automate the creation of structured weekly lesson plans for any topic and grade.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "And much more...",
      description: "From audio assessments to on-the-fly game generation, Sahayak is your all-in-one assistant.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline">Sahayak Teacher</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/login">
              <Button>
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/40">
          <div className="container text-center">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl font-headline">
              Your AI-Powered Teaching Assistant
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Spend less time on prep and more time on what matters most—teaching. Sahayak helps you with lesson plans, materials, and creative ideas, all in your local language.
            </p>
            <div className="mt-10">
              <Link href="/login">
                <Button size="lg">
                  Start For Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 py-20 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-headline">Everything a Teacher Needs</h2>
              <p className="mt-4 text-muted-foreground">From planning to assessment, Sahayak has you covered.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 md:py-32">
            <div className="container grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold font-headline">Built for the Indian Classroom</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Sahayak understands the unique needs of teachers in India. It generates hyper-local content, works with multiple Indian languages, and creates materials that are culturally relevant and easy to use in your classroom.
                    </p>
                    <div className="mt-8">
                        <Link href="/login">
                            <Button size="lg" variant="outline">
                                See it in Action
                            </Button>
                        </Link>
                    </div>
                </div>
                <div>
                    <Image
                        src="https://placehold.co/600x450.png"
                        alt="Teacher using Sahayak App"
                        width={600}
                        height={450}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="teacher classroom"
                    />
                </div>
            </div>
        </section>
      </main>

      <footer className="border-t bg-secondary/40">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sahayak Teacher. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
