const researchPapers = [
  {
    id: "your-paper-id",               // ← must match the id in papers array
    title: "Your Full Paper Title",
    journal: "IEEE Xplore",
    date: "2025",
    doi: "https://actual-doi-link.com",
    coAuthors: "Co-author 1, Co-author 2",
    abstract: "Full abstract of your paper here. Can be multiple sentences.",

    // ── DETAIL PAGE CONTENT ──
    overview: `
      Write a full overview of your research here.
      What problem did you solve? What approach did you take?
    `,
    methodology: `
      Explain your methodology here.
      What tools, datasets, or techniques did you use?
    `,
    results: `
      What were your findings and results?
      Any accuracy scores, performance metrics, etc.
    `,
    conclusion: `
      What conclusions did you draw?
      What are the future directions?
    `,

    // ── IMAGES ──
    // Add your images to src/assets/ and list them here
    images: [
      new URL("../assets/paper-img2.jpg", import.meta.url).href,
    ],

    // ── TAGS ──
    tags: ["IoT", "Machine Learning", "Python", "ESP32"],
  },
];

export default researchPapers;