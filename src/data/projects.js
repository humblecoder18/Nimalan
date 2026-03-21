const projects = [
  {
    id: "AI-Automation-Workflow-using-n8n",
    title: "AI Automation Workflow using n8n",
    category: "Automation",
    year: "2026",
    tech: "Automation",
    description:
      "Intelligent automation system that integrates APIs and AI services to streamline workflows, automate chatbot responses, and handle data processing pipelines efficiently.",
    stack: ["Python", "n8n", "OpenAI", "Gmail API"],
    image: new URL("../assets/AI Automation Workflow using n8n.png", import.meta.url).href,
    github: "https://github.com/nimalanraja",
    demo: null,
    longDesc: `This project focuses on building end-to-end automation workflows using n8n as the orchestration platform. It integrates multiple APIs and AI services to automate repetitive tasks such as chatbot responses and data processing.

The system operates in an event-driven architecture, enabling seamless execution of workflows with minimal manual intervention. It improves operational efficiency by reducing human workload and ensuring consistent task execution.`,
  },
  {
    id: "Aircraft-Maintenance-Prediction-System",
    title: "Aircraft Maintenance Prediction System",
    category: "Machine Learning",
    year: "2025",
    tech: "Python,Scikit-learn & Machine Learning",
    description:
      "Predictive maintenance system that analyzes aircraft sensor data to detect anomalies and forecast potential failures using machine learning.",
    stack: ["Python", "Scikit-learn", "Machine Learning"],
    image: new URL("../assets/aircrat.jpeg", import.meta.url).href,
    github: "https://github.com/humblecoder18/Aircraft-Maintenance-Prediction-System",
    demo: null,
    longDesc: `This project leverages machine learning techniques to predict aircraft maintenance requirements by analyzing 21 different sensor parameters.

The system performs data preprocessing and feature engineering to enhance model performance. It applies predictive modeling and anomaly detection to identify early signs of system failures, enabling proactive maintenance and reducing operational risks.`,
  },
  {
    id: "Formula-1-Race-Outcome-Prediction",
    title: "Formula 1 Race Outcome Prediction",
    category: "Machine Learning",
    year: "2025",
    tech: "Python",
    description:
      "Machine learning model that predicts race outcomes using historical race data, driver performance metrics, and team statistics.",
    stack: ["Python", "pandas", "Scikit-learn", "Machine Learning"],
    image: new URL("../assets/f1.png ", import.meta.url).href,
    github: "https://github.com/humblecoder18/f1-Session_2026",
    demo: null,
    longDesc: `This project focuses on predicting Formula 1 race results using historical datasets. It involves extensive feature engineering using driver statistics, lap times, and team performance metrics.

Classification models are trained and evaluated to determine the most accurate prediction approach, providing insights into race dynamics and performance trends.`,
  },
  {
    id: "Jarvis-AI-Assistant-(Modular AI Agents)",
    title: "Jarvis AI Assistant (Modular AI Agents)",
    category: "AI Systems",
    year: "2025",
    tech: "Python,OpenAI API",
    description:
      "AI-powered voice assistant that uses modular agents to handle voice commands, web automation, and task execution.",
    stack: ["Python", "Speech Recognition", "Automation APIs"],
    image: new URL("../assets/jarvis.jpeg", import.meta.url).href,
    github: "https://github.com/humblecoder18/Jarvis-AI-Agent",
    demo: null,
    longDesc: `This project is an AI assistant designed with a modular architecture, enabling scalable and flexible task execution. It includes components like ListenerAgent for voice input and WebAgent for automation tasks.

The system integrates speech recognition to enable hands-free interaction and supports automation of various user tasks, making it a personal AI assistant for productivity.`,
  },
  {
    id: "Urban-Air-Quality-Prediction-using-Machine-Learning",
    title: "Urban Air Quality Prediction using Machine Learning",
    category: "Data Science",
    year: "2024",
    tech: "Python & Machine Learning",
    description:
      "Predictive model for estimating Air Quality Index (AQI) across major cities using historical pollution data.",
    stack: ["Python", "Pandas", "nScikit-learn", "Matplotlib", "Machine Learning"],
    image: new URL("../assets/AQI.jpeg", import.meta.url).href,
    github: "https://github.com/humblecoder18/Urban-Air-Quality-Prediction-using-Machine-Learning",
    demo: null,
    longDesc: `This project develops machine learning models to predict AQI levels using historical environmental data from multiple cities.

It includes data preprocessing, feature engineering, and regression modeling to improve prediction accuracy. The project was significant enough to be published in an IEEE conference, highlighting its real-world impact and research value.`,
  },
];

export default projects;
