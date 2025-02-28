'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Agency</title>
        <meta name="description" content="Xstar - Digital Agency Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white min-h-screen">
        {/* Header */}
        <header className="p-5 bg-indigo-800 flex justify-between items-center shadow-lg">
          <h1 className="text-3xl font-bold">Xstar Agency</h1>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#portfolio">Portfolio</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <motion.section className="text-center py-24"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-5xl font-bold">Welcome to Xstar Agency</h2>
          <p className="mt-6 text-xl">We provide top-notch digital solutions for your business.</p>
        </motion.section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-indigo-800 text-center">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 p-8">
            {['Web Development', 'UI/UX Design', 'SEO Optimization'].map((service, index) => (
              <motion.div key={index} className="bg-indigo-700 p-8 rounded-xl shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}>
                <h3 className="text-2xl font-semibold">{service}</h3>
                <p className="mt-4">High-quality solutions to boost your business.</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 text-center">
          <h2 className="text-4xl font-bold">Our Portfolio</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 p-8">
            {["/project1.jpg", "/project2.jpg", "/project3.jpg"].map((src, index) => (
              <motion.div key={index} className="bg-indigo-700 p-8 rounded-xl shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}>
                <Image src={src} alt={`Project ${index + 1}`} width={300} height={200} className="rounded-lg" />
                <h3 className="mt-4 text-2xl font-semibold">Project {index + 1}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <motion.section id="contact" className="py-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="mt-6 text-lg">Have a project in mind? Lets discuss it!</p>
          <a href="mailto:contact@xstaragency.com" className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:bg-blue-700 transition">Contact Us</a>
        </motion.section>
      </main>
    </>
  );
}
