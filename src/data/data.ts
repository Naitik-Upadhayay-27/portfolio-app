export const portfolioData = {
  // Header/Navigation
  nav: {
    logo: "ADAM SCHARF",
    links: [
      { text: "HOME", url: "/" },
      { text: "SHOW REEL", url: "/show-reel" },
      { text: "ABOUT", url: "/about" },
      { text: "BOOK ONLINE", url: "/book-online" },
    ],
  },

  // Hero Section
  hero: {
    title: "ART DIRECTOR",
    subtitle: "",
    description: "",
    ctaText: "Book Now",
  },

  // Portfolio Section
  portfolio: {
    title: "PORTFOLIO",
    projects: [
      {
        id: 1,
        title: "Ray of Light",
        category: "MUSIC VIDEO",
        image: "https://i.pinimg.com/originals/9d/44/75/9d44754c4da6e9ee1eff104b38095e4c.jpg",
        description: "Music video direction for emerging artist",
        url: "/portfolio/ray-of-light"
      },
      {
        id: 2,
        title: "Rick Landry / Roots",
        category: "COMMERCIAL",
        image: "https://images.unsplash.com/photo-1613336026275-d6d473084e85",
        description: "Brand campaign for fashion label",
        url: "/portfolio/rick-landry-roots"
      },
      {
        id: 3,
        title: "Reflections",
        category: "SHORT FILM",
        image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3",
        description: "Award-winning short film",
        url: "/portfolio/reflections"
      },
      {
        id: 4,
        title: "Thunder Storm",
        category: "MUSIC VIDEO",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279",
        description: "Visual storytelling for rock band",
        url: "/portfolio/thunder-storm"
      },
      {
        id: 5,
        title: "Hounds of Love",
        category: "COMMERCIAL",
        image: "https://images.unsplash.com/photo-1605812276723-c31bb1a68a21",
        description: "Luxury brand campaign",
        url: "/portfolio/hounds-of-love"
      },
      {
        id: 6,
        title: "A New World",
        category: "SHORT FILM",
        image: "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e",
        description: "Sci-fi short film",
        url: "/portfolio/a-new-world"
      },
      {
        id: 7,
        title: "The Chicks / Drive",
        category: "MUSIC VIDEO",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3",
        description: "Music video for The Chicks",
        url: "/portfolio/the-chicks-drive"
      },
    ],
  },

  // About Section
  about: {
    title: "ABOUT",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
    bio: "I am a creative director and filmmaker with over 15 years of experience in the industry. My work spans music videos, commercials, and short films, with a focus on visual storytelling and innovative direction. I've collaborated with major brands and artists to create compelling visual narratives that resonate with audiences worldwide.",
    stats: [
      { label: "Years Experience", value: "15+" },
      { label: "Projects Directed", value: "120+" },
      { label: "Awards", value: "25+" },
    ],
    skills: [
      {
        title: "Art Direction",
        description: "Creating the visual aesthetic and mood for productions through set design, color schemes, and visual elements."
      },
      {
        title: "Film Direction",
        description: "Guiding actors, camera crews, and production teams to bring scripts to life with a cohesive vision."
      },
      {
        title: "Visual Storytelling",
        description: "Crafting compelling narratives through imagery, composition, and visual sequences that engage audiences."
      },
      {
        title: "Creative Concept Development",
        description: "Generating innovative ideas and translating them into executable creative briefs and production plans."
      },
      {
        title: "Production Management",
        description: "Overseeing all aspects of production from pre to post, ensuring projects stay on schedule and within budget."
      },
      {
        title: "Post-Production Supervision",
        description: "Managing editing, color grading, sound design, and visual effects to achieve the final creative vision."
      },
      {
        title: "Brand Storytelling",
        description: "Developing authentic narratives that connect brands with their audiences through emotional and memorable content."
      },
      {
        title: "Cinematography",
        description: "Utilizing camera techniques, lighting, and composition to create visually stunning and meaningful imagery."
      }
    ],
  },

  // Book Online Section
  booking: {
    title: "BOOK ONLINE",
    description: "Schedule a consultation to discuss your project needs.",
    services: [
      { 
        id: "tv-commercial",
        name: "TV COMMERCIAL", 
        duration: "1 hr", 
        type: "Creative Meeting",
        description: "Initial creative consultation for TV commercial projects. We'll discuss your vision, target audience, and creative direction.",
        image: "https://i.pinimg.com/originals/9d/44/75/9d44754c4da6e9ee1eff104b38095e4c.jpg"
      },
      { 
        id: "fashion-video",
        name: "FASHION VIDEO", 
        duration: "1 hr", 
        type: "Creative Meeting",
        description: "Consultation for fashion video projects. We'll explore visual aesthetics, styling, and narrative approach for your brand.",
        image: "https://images.unsplash.com/photo-1613336026275-d6d473084e85"
      },
      { 
        id: "music-video",
        name: "MUSIC VIDEO", 
        duration: "1 hr", 
        type: "Creative Meeting",
        description: "Creative session for music video concepts. We'll discuss visual storytelling that complements your music and artist image.",
        image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3"
      },
    ],
  },

  // Show Reel Section
  showreel: {
    title: "SHOW REEL",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-with-a-cold-and-distant-gaze-39892-large.mp4", // Local video file
    description: "A selection of my recent directorial work across various mediums.",
  },

  // Footer
  footer: {
    copyright: "© 2025 by ADAM SCHARF. All rights reserved.",
    social: [
      { name: "Instagram", url: "https://instagram.com" },
      { name: "Vimeo", url: "https://vimeo.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
};
