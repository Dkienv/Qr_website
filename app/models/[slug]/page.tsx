"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getModelBySlug } from "@/lib/models";
import Footer from "@/components/Footer";
import { useState } from "react";
import { use } from "react";

export default function ModelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const model = getModelBySlug(slug);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!model) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border-light bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-xl font-bold text-foreground">
                Espresso Academy
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-button-primary transition-colors">
                Home
              </Link>
              <Link href="/" className="text-sm font-medium text-foreground/60 hover:text-button-primary transition-colors">
                Models
              </Link>
              <Link href="/" className="text-sm font-medium text-foreground/60 hover:text-button-primary transition-colors">
                Latest Tutorials
              </Link>
              <Link href="/" className="text-sm font-medium text-foreground/60 hover:text-button-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-md p-2 text-foreground hover:bg-background transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav className="border-t border-border-light py-4 md:hidden">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-sm font-medium text-foreground hover:text-button-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="text-sm font-medium text-foreground/60 hover:text-button-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Models
                </Link>
                <Link
                  href="/"
                  className="text-sm font-medium text-foreground/60 hover:text-button-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Latest Tutorials
                </Link>
                <Link
                  href="/"
                  className="text-sm font-medium text-foreground/60 hover:text-button-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Model Hero Section */}
      <section className="border-b border-border-light bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-b from-gray-900 to-gray-800">
              <Image
                src={model.image}
                alt={model.name}
                fill
                className="object-contain p-12"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-button-primary">
                Espresso Machine Model
              </div>
              <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
                {model.name}
              </h1>
              <p className="text-lg text-foreground/70">
                Master your {model.name} with our comprehensive video tutorials. Learn everything from basic setup to advanced techniques.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-button-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-foreground">
                    {model.tutorials.length} Tutorials Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">
            Tutorials for {model.name}
          </h2>
          <p className="mt-2 text-foreground/70">
            Step-by-step guides to help you get the most out of your machine
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {model.tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="group overflow-hidden rounded-lg bg-card-bg shadow-md transition-all hover:shadow-xl"
            >
              {/* Tutorial Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-button-primary/20 p-6 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-button-primary/30">
                    <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Coffee image overlay */}
                <Image
                  src={model.image}
                  alt={tutorial.title}
                  fill
                  className="object-cover opacity-30"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Tutorial Info */}
              <div className="p-6">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-button-primary">
                  {tutorial.category}
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground line-clamp-2">
                  {tutorial.title}
                </h3>

                {/* Meta Info */}
                <div className="mb-4 flex items-center gap-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{tutorial.difficulty}</span>
                  </div>
                </div>

                {/* Watch Button */}
                <a
                  href={tutorial.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-button-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-button-hover"
                >
                  Watch Tutorial
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-button-primary hover:text-button-hover transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Back to All Models</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
