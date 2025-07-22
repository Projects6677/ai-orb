// src/data.js
// This file contains all the static data for the application,
// such as the list of AI tools and their categories.

export const aiTools = [
  { 
    id: 1, 
    name: 'Copy.ai', 
    category: 'Marketing', 
    description: 'Leverage AI to generate high-converting marketing copy, blog posts, and social media content in seconds.', 
    longDescription: "Copy.ai is a versatile AI-powered copywriter that helps businesses and individuals overcome writer's block. It can create everything from ad copy and product descriptions to full-length blog posts and email newsletters. By providing a brief input, users can get multiple creative options to choose from, significantly speeding up the content creation process.",
    logo: 'https://placehold.co/100x100/db2777/0f172a?text=C' 
  },
  { 
    id: 2, 
    name: 'Midjourney', 
    category: 'Creative', 
    description: 'Transform your imagination into stunning, high-quality images with simple text-based prompts.',
    longDescription: "Midjourney is an independent research lab that produces a proprietary artificial intelligence program that creates images from textual descriptions. It's renowned for its artistic and highly detailed outputs, making it a favorite among artists, designers, and creatives for concept art, illustrations, and unique visual content.",
    logo: 'https://placehold.co/100x100/6d28d9/0f172a?text=M' 
  },
  { 
    id: 3, 
    name: 'Synthesia', 
    category: 'Education', 
    description: 'Turn text into professional training videos with realistic AI avatars, perfect for corporate learning.', 
    longDescription: "Synthesia is a leading AI video generation platform that allows users to create professional-looking videos from text in over 120 languages. It features a wide range of stock AI avatars and voices, or you can create your own. It's ideal for creating training materials, how-to videos, and corporate communications without needing cameras or film crews.",
    logo: 'https://placehold.co/100x100/0891b2/0f172a?text=S' 
  },
  { 
    id: 4, 
    name: 'Jasper', 
    category: 'Marketing', 
    description: 'An advanced AI writing assistant for creating high-converting ad copy, emails, and long-form articles.', 
    longDescription: "Jasper (formerly Jarvis) is an AI writing platform that helps teams create high-quality content faster. It integrates with various marketing tools and is trained on a vast corpus of marketing and sales copy, enabling it to produce persuasive and on-brand content for a wide range of business needs.",
    logo: 'https://placehold.co/100x100/db2777/0f172a?text=J' 
  },
  { 
    id: 5, 
    name: 'Shopify Magic', 
    category: 'Commerce', 
    description: 'AI tools integrated into Shopify to auto-generate compelling product descriptions for e-commerce.', 
    longDescription: "Shopify Magic is a suite of AI-powered features built directly into the Shopify platform. Its primary function is to help merchants write compelling product descriptions automatically. By inputting a few keywords or features, Shopify Magic can generate engaging and persuasive text, saving store owners time and improving conversion rates.",
    logo: 'https://placehold.co/100x100/16a34a/0f172a?text=SM' 
  },
  { 
    id: 6, 
    name: 'Runway', 
    category: 'Creative', 
    description: 'A comprehensive suite of AI magic tools for advanced video editing, generation, and creative effects.', 
    longDescription: "Runway offers a wide array of AI-powered tools for video creators. It goes beyond simple editing, offering features like text-to-video generation, video-to-video style transfer, object removal, and motion tracking. It's a powerful platform for filmmakers and artists looking to push the boundaries of visual storytelling.",
    logo: 'https://placehold.co/100x100/6d28d9/0f172a?text=R' 
  },
  { 
    id: 7, 
    name: 'Notion AI', 
    category: 'Productivity', 
    description: 'Seamlessly integrated AI to summarize meetings, brainstorm ideas, and draft content within your workspace.', 
    longDescription: "Notion AI brings the power of generative AI directly into the Notion workspace. It can help users be more productive by automating writing tasks, summarizing long documents, brainstorming ideas from a prompt, and even translating text. It acts as a thought partner to enhance your existing workflows.",
    logo: 'https://placehold.co/100x100/f59e0b/0f172a?text=N' 
  },
  { 
    id: 8, 
    name: 'Khanmigo', 
    category: 'Education', 
    description: 'An AI-powered tutor and teaching assistant from Khan Academy to guide students and assist teachers.', 
    longDescription: "Khanmigo is an AI assistant developed by Khan Academy for both learners and educators. For students, it acts as a Socratic tutor, guiding them through problems without giving away the answer. For teachers, it can help with lesson planning and administrative tasks, freeing them up to focus on teaching.",
    logo: 'https://placehold.co/100x100/0891b2/0f172a?text=K' 
  },
  { 
    id: 9, 
    name: 'Zendesk AI', 
    category: 'Commerce', 
    description: 'AI-powered customer service bots, intelligent routing, and agent assists to enhance support experiences.', 
    longDescription: "Zendesk AI integrates artificial intelligence into its popular customer service platform. It offers intelligent chatbots that can resolve common customer issues, smart triage to route tickets to the right agent, and AI-powered suggestions to help agents respond faster and more effectively. The goal is to improve customer satisfaction and operational efficiency.",
    logo: 'https://placehold.co/100x100/16a34a/0f172a?text=Z' 
  },
];

export const categories = [
    { name: 'Marketing', color: 'pink', icon: 'M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM5.25 9h9.5' },
    { name: 'Commerce', color: 'green', icon: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l.383-1.437M7.5 14.25L5.106 5.106A2.25 2.25 0 002.868 3H2.25' },
    { name: 'Education', color: 'cyan', icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6-2.292m0-14.25v14.25' },
    { name: 'Productivity', color: 'amber', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Creative', color: 'violet', icon: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4-2.245 4.5 4.5 0 118.9-2.255a2.25 2.25 0 10-1.72-3.482 4.5 4.5 0 10-8.894 6.13A2.25 2.25 0 109.53 16.122z' },
];

export const categoryMap = categories.reduce((acc, cat) => {
    acc[cat.name] = cat;
    return acc;
}, {});
