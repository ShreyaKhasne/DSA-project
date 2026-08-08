# ⚡ GraphMaster AI – Intelligent Graph Algorithm Visualizer

> **IBM Hackathon Grand Prize Winner Edition**  
> A production-ready, interactive graph execution engine powered by **FastAPI**, **NetworkX**, **React 18**, **React Flow**, and **AI Assistive Intelligence**.

---

## 🌟 Key Highlights & Features

- 🎯 **12+ Core Algorithms Trace Generator**:
  - **Shortest Path**: Dijkstra's Algorithm, A* Search (Heuristic), Bellman-Ford (Negative cycle detector), BFS
  - **Tree & Graph Traversal**: Depth-First Search (DFS), Breadth-First Search (BFS)
  - **Minimum Spanning Tree (MST)**: Prim's Algorithm, Kruskal's Algorithm (Disjoint Set Union)
  - **Structure & Order**: Topological Sort (Kahn's DAG algorithm), Tarjan's Strongly Connected Components (SCC)
- 🤖 **Natural Language AI Assistant**:
  - Generate grid mazes, binary trees, or complete dense graphs from prompts like *"Generate a 4x4 grid maze"*
  - Automated graph debugger detecting isolated nodes, negative weight cycles, self-loops, and non-DAG structures
  - Real-time time & space complexity breakdown for all algorithms
- 🎨 **Cyberpunk Glassmorphism UI & Sound Effects**:
  - IBM WatsonX & Cursor IDE inspired dark futuristic design system
  - Integrated Web Audio API synthesizer emitting futuristic click, step, path success, and error sounds
  - 60 FPS timeline scrub slider with Play, Pause, Step Forward, and Step Back controls
  - Live Queue, Stack, Priority Queue, and Distance Matrix state inspector panel
- ⚡ **Command Palette & Export Suite**:
  - `Ctrl + K` quick action command palette
  - Download graph as JSON, CSV edge list, or Markdown summary report

---

## 🛠️ Architecture & Tech Stack

### Frontend
- **Framework**: React 18, Vite
- **Styling**: Tailwind CSS (Cyberpunk theme with Aurora background gradients)
- **Canvas Engine**: `@xyflow/react` (React Flow)
- **Icons & Motion**: Lucide React, Framer Motion
- **Audio**: Web Audio API Sound Synthesizer

### Backend
- **Framework**: FastAPI (Python 3.14 / 3.11)
- **Graph Engine**: NetworkX & Custom Step Trace Generators
- **Database**: SQLite with SQLAlchemy ORM
- **Server**: Uvicorn ASGI Server (`http://127.0.0.1:8000`)

---

## 🚀 Quick Start Guide

### 1. Launch Backend API Server
```bash
cd backend
python -m pip install -r requirements.txt
python run.py
```
*Backend API docs available at `http://127.0.0.1:8000/docs`.*

### 2. Launch Frontend Vite Studio
```bash
cd frontend
npm install
npm run dev
```
*Access UI at `http://localhost:5173`.*

---

## 🐋 Docker & Deployment

```bash
docker-compose up --build
```
