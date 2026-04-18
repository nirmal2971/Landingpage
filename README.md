# 🚀 Grafterr Landing Page (React)

This project is a responsive landing page built using React, based on the provided Figma design.

## ✨ Features

- Dynamic content rendering using JSON
- Custom hook for API simulation
- Responsive design (mobile, tablet, desktop)
- Interactive carousel for product showcase
- Gradient text and buttons
- Skeleton loading states
- Error handling with retry functionality

## 🛠 Tech Stack

- React (Functional Components + Hooks)
- CSS (custom styling)
- Vite (build tool)

## 📦 Project Structure

src/
 ├── components/
 │   ├── sections/ (Hero, Features)
 │   ├── ui/ (Carousel, ProductCard, Skeleton)
 ├── hooks/ (useContent)
 ├── services/ (API simulation)
 ├── data/ (content.json)

## ⚙️ How it works

- Content is fetched from a local JSON file using simulated API calls.
- A custom hook (`useContent`) handles loading, error, and retry logic.
- UI updates dynamically based on fetched data.

## 🎯 Key Highlights

- Clean component-based architecture
- Separation of concerns (UI, logic, data)
- Reusable components (Carousel, Skeleton)
- Pixel-close implementation of Figma design

## 🚀 Run Locally

```bash
npm install
npm run dev
