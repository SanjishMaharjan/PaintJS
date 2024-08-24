# React Paint App

This is a simple paint application built with React, TypeScript, Vite, and Tailwind CSS. The app allows users to draw shapes, use different tools like pen and eraser, and save the canvas as an image. The project is modular and demonstrates modern web development practices.

## Features

- **Draw Shapes:** Supports rectangle, circle, and line drawing.
- **Tool Options:** Choose between pen and eraser tools.
- **Color Palette:** Allows selecting colors using a palette and color picker.
- **Dynamic Canvas Size:** Automatically resizes the canvas based on the window size.
- **Clear and Save Options:** Clear the canvas or save the drawing as a PNG image.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm/yarn installed.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the app in your browser at `http://localhost:3000`.

### Available Scripts

- **`npm run dev` / `yarn dev`**: Starts the development server.
- **`npm run build` / `yarn build`**: Builds the project for production.
- **`npm run preview` / `yarn preview`**: Previews the production build locally.
- **`npm run lint` / `yarn lint`**: Lints the code using ESLint.

## Project Structure

```plaintext
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions (e.g., drawing shapes)
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # React entry point
│   ├── index.css       # Tailwind CSS imports and global styles
│   └── ...             # Other configuration files
├── .eslintrc.js        # ESLint configuration
├── postcss.config.js   # PostCSS configuration for Tailwind CSS
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Project dependencies and scripts
```

## Configuration

### ESLint Configuration

The project uses ESLint for linting. The configuration can be extended for stricter rules:

- **parserOptions**: Updated to support TypeScript-aware linting rules.
- **Extends**: Consider using `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked` for more robust type checking.

### Tailwind CSS Configuration

Tailwind CSS is pre-configured with a basic setup. You can extend the configuration in `tailwind.config.js` for custom themes, colors, or plugins.

### Prettier Configuration

Prettier is used for consistent code formatting. It's integrated with ESLint to ensure both tools work together smoothly.

## Development Workflow

1. Start the development server using `npm run dev` or `yarn dev`.
2. Edit components and pages in the `src/` directory.
3. Use Tailwind CSS utility classes for styling.
4. Lint the code with `npm run lint` or `yarn lint` before committing changes.
5. Build for production with `npm run build` or `yarn build`.

## Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
