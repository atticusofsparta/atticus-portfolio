export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-the-blogs",
    title: "Welcome to The Blogs ✨",
    description: "Hello fellow builder! I built this site using React, Next.js and Tailwind CSS. Check out the source code on GitHub.",
    date: "2025-12-16",
    imageUrl: "/blog-placeholder.svg",
    tags: ["development", "web"],
    content: `
      <h3>Why I Built This Blog</h3>
      
      <p>I'm a Full Stack Arweave Developer with extensive experience in the permaweb ecosystem. I wanted to create a permanent blog on Arweave where I can share my thoughts, tutorials, and development journey.</p>
      
      <h3>About Me</h3>
      
      <p>As a developer focused on decentralized web technologies, I've been building projects that leverage the power of permanent storage. My work includes developing SDKs for AO (Arweave Operating System), creating collaboration tools with secret sharing capabilities, and more.</p>
      
      <h3>What to Expect</h3>
      
      <p>In this blog, you'll find:</p>
      
      <ul>
        <li>Tutorials on building dApps with Arweave and AO</li>
        <li>Thoughts on the permaweb ecosystem</li>
        <li>Code snippets and best practices</li>
        <li>Tech stack deep dives</li>
      </ul>
      
      <p>Feel free to check out my projects and reach out if you'd like to collaborate!</p>
    `,
  },
  {
    slug: "introducing-ao-sdk",
    title: "Introducing the AO SDK 🚀",
    description: "A powerful SDK for building services on the Arweave Operating System.",
    date: "2025-11-20",
    imageUrl: "/blog-placeholder.svg",
    tags: ["AO", "SDK", "web"],
    content: `
      <h3>What is the AO SDK?</h3>
      
      <p>The AO SDK is a comprehensive solution for building services on the Arweave Operating System. It provides developer-friendly abstractions for working with AO's unique execution model.</p>
      
      <h3>Key Features</h3>
      
      <ul>
        <li>Elegant module definition and bundling</li>
        <li>Simplified AO host interactions</li>
        <li>Integration with Arweave storage</li>
        <li>Type-safe development experience</li>
      </ul>
      
      <h3>Getting Started</h3>
      
      <pre><code>import { createModule } from '@project-kardeshev/ao-sdk'</code></pre>
      
      <p>Check out the full documentation on GitHub to get started with building your first AO service!</p>
    `,
  },
  {
    slug: "arweave-permanent-storage-explained",
    title: "Understanding Arweave Permanent Storage 📦",
    description: "A deep dive into how Arweave achieves true permanent storage and why it matters for the future of web.",
    date: "2025-10-15",
    imageUrl: "/blog-placeholder.svg",
    tags: ["arweave", "blockchain", "storage"],
    content: `
      <h3>What is Permanent Storage?</h3>
      
      <p>In the world of blockchain and decentralized systems, permanent storage represents a paradigm shift from ephemeral cloud storage to truly immutable data persistence. Arweave achieves this through its unique perpetual storage model.</p>
      
      <h3>How Arweave Works</h3>
      
      <p>Arweave uses an endowment-based consensus mechanism where blocks are permanently added to the ledger once they reach a certain number of confirmations. This creates a secure, append-only data structure that guarantees permanent storage.</p>
      
      <h3>Key Benefits</h3>
      
      <ul>
        <li><strong>True Permanence:</strong> Once written, data is stored for forever (or at least 100 years based on the perpetual hashing rate)</li>
        <li><strong>Censorship Resistance:</strong> Decentralized network makes it impossible to remove content</li>
        <li><strong>No Hidden Fees:</strong> One-time payment covers all future storage costs</li>
        <li><strong>Content Addressing:</strong> Data integrity is cryptographically guaranteed</li>
      </ul>
      
      <h3>Use Cases</h3>
      
      <p>Permanent storage enables new applications like decentralized social media, immutable document stores, and the permaweb - a world where websites can be archived forever without relying on central servers.</p>
      
      <blockquote>
        "The web as we know it is ephemeral. Links rot, content disappears, and platforms shut down. Permanent storage offers a solution to this 'link rot' problem."
      </blockquote>
    `,
  },
];
