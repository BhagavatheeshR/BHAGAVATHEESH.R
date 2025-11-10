const express = require('express');
const router = express.Router();

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    description: "Flutter-based e-commerce platform with secure payment integration and AWS cloud infrastructure.",
    technologies: ["Flutter", "AWS", "Node.js"],
    image: "/public/assets/images/app.jpg",
    category: "mobile"
  },
  {
    id: 2,
    title: "AWS Cloud Dashboard",
    description: "Real-time monitoring dashboard for AWS infrastructure with interactive data visualizations.",
    technologies: ["React", "AWS", "D3.js"],
    image: "/public/assets/images/app.jpg",
    category: "web"
  },
  {
    id: 3,
    title: "AI Vision Platform",
    description: "Machine learning web application with computer vision and real-time object detection.",
    technologies: ["Python", "TensorFlow", "Flask"],
    image: "/public/assets/images/app.jpg",
    category: "ai"
  }
];

// Get all projects
router.get('/', (req, res) => {
  res.json(projects);
});

// Get project by ID
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  res.json(project);
});

module.exports = router;