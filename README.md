# 🧩 Real-Time Dashboard Scaffold Generator

A **Hygen-based scaffold generator** that creates **real-time monitoring dashboards** (Grafana-like) using:

- **PostgreSQL** (metrics data)
- **Node.js + WebSockets** (real-time backend)
- **React + Vite + Recharts** (live charts)

With **one command**, users can generate a **complete, runnable application**.

---

## 🚀 What This Generator Does

This scaffold generates a full application with:

- 📡 Real-time data streaming (WebSockets)
- 📊 Live charts (CPU usage, blocked calls, etc.)
- 🗄️ SQL-based metric aggregation
- ⚙️ Config-driven dashboards
- 🧱 Clean backend + frontend separation

You **do not** need to write boilerplate code.

---

## 📦 Prerequisites

Make sure you have the following installed:

- **Node.js** ≥ 18  
- **npm**
- **Git**
- **PostgreSQL** (v14+ recommended)

Verify:
```bash
node -v
npm -v
git --version
```

---

## 🧰 Installation (One-Time)

### 1️⃣ Clone the scaffold repository
```bash
git clone https://github.com/Sampreeta11/realtime-dashboard-scaffold.git
cd realtime-dashboard-scaffold
```

### 2️⃣ Install Hygen globally
```bash
npm install -g hygen
```

Verify:
```bash
hygen --version
```

---

## 🛠️ Generate a New Dashboard App

Run **one command**:

```bash
hygen dashboard new --projectName cpu-monitor-app --refreshInterval 2000
```

### 📁 This generates:
```
cpu-monitor-app/
├── backend/
│   ├── server.js
│   ├── scheduler.js
│   ├── websocket.js
│   └── db/queries/cpu_usage.sql
├── frontend/
│   └── src/
│       ├── Dashboard.jsx
│       ├── socket.js
│       └── useRealtimeMetric.js
└── dashboard.config.json
```

---

## ▶️ Run the Generated Application

### 🔹 Backend
```bash
cd cpu-monitor-app/backend
npm install
node server.js
```

Backend runs on:
```
http://localhost:3001
```

---

### 🔹 Frontend (new terminal)
```bash
cd cpu-monitor-app/frontend
npm install
npm run dev -- --port 5175
```

Open browser:
```
http://localhost:5175
```

🎉 You’ll see a **real-time CPU usage chart**.

---

## 🗄️ Database Setup (PostgreSQL)

Create database:
```sql
CREATE DATABASE metrics;
```

Create table:
```sql
CREATE TABLE metrics_cpu (
  timestamp TIMESTAMP,
  cpu_used INT,
  cpu_total INT,
  blocked_calls INT
);
```

Insert sample data:
```sql
INSERT INTO metrics_cpu
(timestamp, cpu_used, cpu_total, blocked_calls)
VALUES
(NOW(), 45, 100, 3);
```

The dashboard will update **in real time** as new rows are inserted.

---

## ⚙️ Configuration (`dashboard.config.json`)

Dashboards are **config-driven**, similar to Grafana:

```json
{
  "realtime": true,
  "refreshIntervalMs": 2000,
  "metrics": [
    {
      "id": "cpu_usage",
      "query": "cpu_usage.sql",
      "chart": "line",
      "unit": "%"
    }
  ]
}
```

Add new metrics by:
1. Adding a SQL file  
2. Updating this config  

No backend/frontend code changes needed.

---

## 🧠 How It Works (High Level)

```
PostgreSQL → SQL Aggregation → Node Scheduler → WebSocket → React Charts
```

- SQL calculates percentages
- Backend pushes data every N milliseconds
- React listens via WebSockets
- Charts update live

---

## 👥 Who Is This For?

- Platform engineers
- Backend / full-stack developers
- Teams building internal monitoring tools
- Anyone wanting Grafana-like dashboards with custom logic

---

## 🏆 Why This Scaffold Is Useful

- ✅ No boilerplate
- ✅ Reusable for many dashboards
- ✅ Real-time by default
- ✅ Clean architecture
- ✅ Easy to extend

---

## 📌 Example Use Case

```bash
hygen dashboard new --projectName db-monitor --refreshInterval 1000
hygen dashboard new --projectName api-monitor --refreshInterval 3000
```

Each command generates a **new independent dashboard app**.

---

## 📄 License

MIT License

---

## 🙌 Author

**Sampreeta**  
GitHub: https://github.com/Sampreeta11
