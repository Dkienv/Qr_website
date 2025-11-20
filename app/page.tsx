"use client";

import Image from "next/image";
import Link from "next/link";
import { machineModels } from "@/lib/models";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border-light bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-foreground">
                <Image src="/logo.png" alt="CAFEQUIPOS Logo" width={200} height={40} />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-button-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-foreground/60 hover:text-button-primary transition-colors"
              >
                Models
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-foreground/60 hover:text-button-primary transition-colors"
              >
                Latest Tutorials
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-foreground/60 hover:text-button-primary transition-colors"
              >
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

      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">Latest &amp; Greatest Tutorials</h1>
          <p className="mt-4 text-lg text-foreground/70">Freshly brewed content to help you master your machine</p>
        </div>
      </section>

      {/* Machine Models Grid */}
      <main className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {machineModels.map((model) => (
            <Link
              key={model.id}
              href={`/models/${model.slug}`}
              className="group overflow-hidden rounded-lg bg-card-bg shadow-md transition-all hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-contain p-8 transition-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-button-primary">
                  Espresso Machine
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-button-primary transition-colors">
                  {model.name}
                </h3>
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-button-primary px-4 py-2 text-sm font-medium text-white transition-colors group-hover:bg-button-hover">
                    View Tutorials
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
