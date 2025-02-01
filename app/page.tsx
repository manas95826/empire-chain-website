"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

const features = [
  "🤖 Multiple LLMs",
  "📚 Vector Stores",
  "🔍 Advanced Document Processing",
  "🎙️ Speech-to-Text Capabilities",
  "🌐 Web Crawling",
  "📊 Data Visualization",
  "🎯 RAG",
  "💬 Interactive Chatbots",
  "🤖 AI Agents"
];

const integrations = [
  { name: "OpenAI", logo: "/integrations/openai.svg?v=2" },
  { name: "Claude", logo: "/integrations/anthropic.svg?v=2" },
  { name: "Gemini", logo: "/integrations/gemini.png?v=2" },
  { name: "Agno", logo: "/integrations/agno.png?v=2" },
  { name: "Chroma", logo: "/integrations/chroma.png?v=2" },
  { name: "Groq", logo: "/integrations/groq-wh.png?v=2" },
  { name: "Github", logo: "/integrations/github-white.png" },
  { name: "Qdrant", logo: "/integrations/qdrant.png?v=2" },
  { name: "Streamlit", logo: "/integrations/streamlit-white.png?v=2" },
];

export default function Home() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [nextFeature, setNextFeature] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [copyText, setCopyText] = useState("Copy");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentFeature(nextFeature);
        setNextFeature((next) => (next + 1) % features.length);
        setIsAnimating(false);
      }, 500);
    }, 1500);

    return () => clearInterval(interval);
  }, [nextFeature]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const element = document.querySelector('[data-scroll-animate]');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-[#111827]">
            How Engineers Use
          </h1>
          <div className="h-[80px] sm:h-[100px] relative overflow-hidden">
            <div
              key={currentFeature}
              className={`absolute w-full transition-all duration-500 ease-in-out ${
                isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              <h2 className="text-3xl sm:text-5xl font-semibold font-['VT323'] text-[#111827] tracking-wider py-2 scrolling-text">
                {features[currentFeature]}
              </h2>
            </div>
            <div
              key={nextFeature}
              className={`absolute w-full transition-all duration-500 ease-in-out ${
                isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              <h2 className="text-3xl sm:text-5xl font-semibold font-['VT323'] text-[#111827] tracking-wider py-2 scrolling-text">
                {features[nextFeature]}
              </h2>
            </div>
          </div>
          <p className="text-xl mb-8 text-[#4B5563] max-w-3xl mx-auto">
            An orchestration framework for all your AI needs ⚡
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://manas95826.github.io/empire-chain/"
              className="px-8 py-3 bg-[#111827] text-white rounded-full font-medium hover:bg-[#1f2937] transition-all duration-300 ease-in-out hover:scale-105 shadow-sm"
              target="_blank"
            >
              Build your AI Solution
            </Link>
            <Link
              href="https://github.com/manas95826/empire-chain/tree/main/cookbooks"
              className="px-8 py-3 bg-white text-[#111827] border border-[#111827] rounded-full font-medium hover:bg-[#111827] hover:text-white transition-all duration-300 ease-in-out hover:scale-105"
              target="_blank"
            >
              View Cookbooks
            </Link>
          </div>
        </div>
      </section>

      {/* Updated Integrations section */}
      <section className="bg-gradient-to-br from-black via-[#111827] to-black max-w-full px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ffffff0d,transparent)]"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
                Integrations
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 mt-4 max-w-3xl mx-auto">
              Seamlessly integrate with the most powerful AI platforms and tools
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-12 place-items-center">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="group relative w-[180px] h-[100px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 
                    hover:shadow-[0_0_25px_-5px] hover:shadow-blue-500/20 
                    after:absolute after:inset-0 after:z-0 after:bg-gradient-to-br after:from-transparent after:via-transparent after:to-black/20 after:rounded-xl
                    before:absolute before:inset-[1px] before:z-[1] before:bg-gradient-to-br before:from-gray-900 before:via-gray-800 before:to-gray-900 before:rounded-xl
                    transition-all duration-300 hover:scale-105"
                >
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Image
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      width={140}
                      height={50}
                      className="object-contain transition-all duration-500 
                        opacity-75 group-hover:opacity-100 
                        group-hover:scale-105
                        animate-shimmer"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        maxHeight: '50px',
                        filter: 'brightness(1.2) contrast(1.1)'
                      }}
                      priority
                      unoptimized={true}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {/* Desktop Agents text */}
        <div className="hidden lg:block absolute left-0 top-[60%] -translate-y-1/2 -rotate-90 text-4xl text-gray-400 lg:left-[2rem] scrolling-text">
          Agents
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-[#111827]">
          Build AI solutions with Empire Chain
        </h2>
        <p className="text-xl sm:text-2xl text-[#4B5563] mt-4 mb-12 text-center max-w-3xl mx-auto">
          Create powerful AI products with just a few lines of code
        </p>
        <div className="max-w-3xl mx-auto relative">
          {/* Mobile Agents text */}
          <div className="lg:hidden absolute -top-10 left-1/2 -translate-x-1/2 text-6xl text-gray-600 scrolling-text opacity-70 z-0">
            Agents
          </div>
          <div className="bg-[#111827] rounded-xl p-6 overflow-x-auto code-container relative group z-1">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(`from empire_chain.agent.agent import Agent
from datetime import datetime

# Create agent
agent = Agent()

# Register functions
agent.register_function(get_weather)
agent.register_function(calculate_distance)
agent.register_function(get_time)

# Process queries
result = agent.process_query("What's the weather like in Tokyo?")
print(f"Result: {result['result']}")`);
                setCopyText("Copied!");
                setTimeout(() => setCopyText("Copy"), 2000);
              }}
              className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              {copyText}
            </button>
            <pre className="text-white font-mono text-sm flex justify-center items-center min-h-[300px]">
              <code className="typing-animation whitespace-pre-line font-['EditDot']" data-scroll-animate>
{`from empire_chain.agent.agent import Agent
from datetime import datetime

# Create agent
agent = Agent()

# Register functions
agent.register_function(get_weather)
agent.register_function(calculate_distance)
agent.register_function(get_time)

# Process queries
result = agent.process_query("What's the weather like in Tokyo?")
print(f"Result: {result['result']}")`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#111827]">
            Ready to build your AI agent?
          </h2>
          <p className="text-xl mb-8 text-[#4B5563]">
            Get started with Empire Chain today
          </p>
          <Link
            href="https://github.com/manas95826/empire-chain"
            className="px-8 py-3 bg-[#FF4F00] text-white rounded-full font-medium hover:bg-[#FF3300] transition shadow-sm inline-block"
            target="_blank"
          >
            View on GitHub
          </Link>
        </div>
      </section>
    </main>
  );
}
