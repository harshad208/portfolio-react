// src/components/skillsData.jsx

import {
  SiPython, SiSqlite, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiDjango,
  SiFlask, SiFastapi, SiReact, SiNextdotjs, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiKeras,
  SiPytorch, SiOpencv, SiHuggingface, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiSqlalchemy,
  SiApachekafka, SiRabbitmq, SiDatabricks, SiDocker, SiJenkins, SiGit, SiGithubactions,
  SiAwsamplify, SiGooglecloud, SiMlflow, SiApacheairflow, SiGrafana, SiPrometheus, SiPostman
} from 'react-icons/si';

import { VscTerminalBash, VscAzure } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

export const skillsData = [
  {
    category: "Languages & Markup",
    skills: [
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "SQL", icon: <SiSqlite className="text-sky-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
      { name: "Bash", icon: <VscTerminalBash className="text-gray-400" /> },
    ],
  },
  {
    category: "Backend & Frameworks",
    skills: [
      { name: "Django", icon: <SiDjango className="text-green-800" /> },
      { name: "Flask", icon: <SiFlask className="text-gray-400" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },
      { name: "REST APIs", icon: <TbApi className="text-teal-400" /> },
    ],
  },
  {
    category: "Frontend & Libraries",
    skills: [
      { name: "React", icon: <SiReact className="text-sky-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-400" /> },
    ],
  },
  {
    category: "Data Science & Machine Learning",
    skills: [
      { name: "Pandas", icon: <SiPandas className="text-purple-500" /> },
      { name: "NumPy", icon: <SiNumpy className="text-sky-500" /> },
      { name: "scikit-learn", icon: <SiScikitlearn className="text-orange-500" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-600" /> },
      { name: "Keras", icon: <SiKeras className="text-red-600" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-orange-500" /> },
      { name: "OpenCV", icon: <SiOpencv className="text-red-500" /> },
      { name: "NLP", icon: <SiHuggingface className="text-yellow-400" /> },
    ],
  },
  {
    category: "Databases & Data Engineering",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "Redis", icon: <SiRedis className="text-red-600" /> },
      { name: "SQLAlchemy", icon: <SiSqlalchemy className="text-red-700" /> },
      { name: "Kafka", icon: <SiApachekafka className="text-gray-400" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq className="text-orange-600" /> },
      { name: "PySpark", icon: <SiDatabricks className="text-orange-500" /> },
    ],
  },
  {
    category: "DevOps, MLOps & Cloud",
    skills: [
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-red-500" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-sky-500" /> },
      { name: "Azure", icon: <VscAzure className="text-blue-500" /> },
      { name: "AWS", icon: <SiAwsamplify className="text-orange-500" /> },
      { name: "GCP", icon: <SiGooglecloud className="text-blue-500" /> },
      { name: "MLflow", icon: <SiMlflow className="text-blue-600" /> },
      { name: "Airflow", icon: <SiApacheairflow className="text-sky-400" /> },
    ],
  },
  {
    category: "Monitoring & Testing",
    skills: [
      { name: "Grafana", icon: <SiGrafana className="text-orange-500" /> },
      { name: "Prometheus", icon: <SiPrometheus className="text-orange-600" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "TensorBoard", icon: <SiTensorflow className="text-orange-600" /> },
    ],
  },
];
