'use client'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Website() {
  
  return (
    <>
      <Head>
        <title>Digital Agency</title>
        <meta name="description" content="Xstar - Digital Agency Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-gray-900 text-white min-h-screen">
        {/* Header */}
        <header className="p-5 bg-gray-800 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Xstar Agency</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#portfolio">Portfolio</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="text-center py-20">
          <h2 className="text-4xl font-bold">Welcome to Xstar Agency</h2>
          <p className="mt-4 text-lg">We provide top-notch digital solutions for your business.</p>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-800 text-center">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Web Development</h3>
              <p className="mt-2">We build modern and scalable web applications.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">UI/UX Design</h3>
              <p className="mt-2">Creating beautiful and user-friendly designs.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">SEO Optimization</h3>
              <p className="mt-2">Improving search engine rankings for better visibility.</p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 text-center">
          <h2 className="text-3xl font-bold">Our Portfolio</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
            <div className="bg-gray-700 p-6 rounded-lg">
              <Image src="/project1.jpg" alt="Project 1" width={300} height={200} className="rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold">Project One</h3>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <Image src="/project2.jpg" alt="Project 2" width={300} height={200} className="rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold">Project Two</h3>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <Image src="/project3.jpg" alt="Project 3" width={300} height={200} className="rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold">Project Three</h3>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-800 text-center">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-4 px-6 md:px-20">Xstar Agency is a leading digital solutions provider specializing in web development, UI/UX design, and SEO optimization. We help businesses grow by creating impactful digital experiences.</p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-4">Have a project in mind? Lets discuss it!</p>
          <a href="mailto:contact@xstaragency.com" className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold">Contact Us</a>
        </section>
      </main>
    </>
  );
}
