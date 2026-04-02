# LucenEdge AI Frontier

Welcome to the **LucenEdge AI Frontier** project! This is a modern, interactive, and high-performance full-stack web application built using cutting-edge React ecosystem tools. It features complex 3D animations, a dark-tech aesthetic, and seamless client/server environments seamlessly unified via TanStack Start.

## 🚀 Tech Stack

The application is built on a robust and modern architecture:
- **Framework:** [TanStack Start](https://tanstack.com/start/latest) (Full-stack React framework)
- **Routing:** [TanStack Router](https://tanstack.com/router/latest)
- **Tooling:** [Vite](https://vitejs.dev/) with TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `clsx` and `tailwind-merge`
- **UI Components:** Radix UI Primitives & shadcn/ui
- **Animations & 3D:** [Framer Motion](https://www.framer.com/motion/), [Three.js](https://threejs.org/), and `@react-three/fiber`
- **Deployment:** Configured for Vercel

## 📂 Project Structure

- `src/components/` - Reusable UI elements, interactive Three.js scenes, and layout components.
- `src/routes/` - File-based routing powered by TanStack router. Contains the primary pages/views.
- `src/data/` - Static data storage and configuration arrays.
- `src/lib/` - Utility functions and helpers.
- `vite.config.ts` - Vite configuration specifically geared up with Nitro to target **Vercel** serverless functions.

## 📦 Getting Started

### Prerequisites
Make sure you have Node.js and a package manager (`npm`, `yarn`, `pnpm`, or `bun`) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thinkdiff/Lucen-Edge-PR.git
   cd lucenedge-ai-frontier-main
   ```

2. Install dependencies:
   ```bash
   npm install
   # or `bun install` / `yarn install`
   ```

### Development

To start the development server with HMR (Hot Module Replacement):

```bash
npm run dev
```

Visit `http://localhost:8080` in your browser to view the application.

## 🛠 Building for Production

To build the application for production, simply run:

```bash
npm run build
```

This will run the Vite build process. Because the Vercel preset is injected (`process.env.NITRO_PRESET = "vercel"`), building this command will automatically compile the server output compatible with Vercel's Edge/Node environments.

To preview the built project locally:
```bash
npm run preview
```

## ☁️ Deployment (Vercel)

The project is natively configured for easy deployment on **Vercel**. 
1. Link your GitHub repository to your Vercel account.
2. Vercel will automatically detect the Vite commands and run `npm run build`.
3. The custom Vite configuration will tell the underlying Nitro server to export the project safely into the `.vercel/output` folder without throwing 404 errors.

## 📜 License

See the `LICENSE` file for more details.