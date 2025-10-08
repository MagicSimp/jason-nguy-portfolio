# 🚀 Jason Nguy Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring a space theme with purple gradients.

## ✨ Features

- **Modern Design**: Space-themed dark UI with purple gradients and glassmorphism effects
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive**: Smooth animations, typing effects, and hover transitions
- **Technologies Showcase**: 4-column layout with progress bars
- **Project Gallery**: Showcases professional projects with live demos
- **Contact Form**: Functional contact form with collaboration options
- **Performance Optimized**: Built with Next.js for fast loading

## 🚀 Quick Start

### Prerequisites

Make sure you have **Node.js 18+** installed on your computer.
- [Download Node.js](https://nodejs.org/)

### Installation & Setup

#### Option 1: Quick Start (Recommended)

1. **Download the project**
   - Download all files from this project
   - Extract to a folder on your computer

2. **Run the setup script**

   **On Windows:** Double-click `quick-start.bat`

   **On Mac/Linux:** Open terminal and run:
   ```bash
   chmod +x quick-start.sh
   ./quick-start.sh
   ```

3. **Start development**
   ```bash
   npm run dev
   ```

4. **View the portfolio**

   Open your browser and go to: **http://localhost:3000**

#### Option 2: Manual Setup

1. **Download and extract the project**

2. **Open in VS Code**
   ```bash
   # Navigate to the project folder
   cd jason-nguy-portfolio

   # Open in VS Code
   code .
   ```

3. **Install dependencies**

   Open VS Code terminal (`Ctrl + ~` or `View > Terminal`) and run:
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **View the portfolio**

   Open your browser and go to: **http://localhost:3000**

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
jason-nguy-portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── Navigation.tsx  # Navigation bar
│   │   ├── HeroSection.tsx # Hero section
│   │   ├── TechnologiesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CapabilitiesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── MicroProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── utils.ts        # Utility functions
├── public/                 # Static assets
├── package.json           # Dependencies
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/HeroSection.tsx`)
   - Change name, title, and description
   - Update social media links

2. **About Section** (`src/components/AboutSection.tsx`)
   - Update work experience and education
   - Modify skill levels and certifications

3. **Projects** (`src/components/ProjectsSection.tsx`)
   - Replace with your own projects
   - Update project images, descriptions, and links

4. **Contact Information** (`src/components/ContactSection.tsx`)
   - Update social media links
   - Modify contact form settings

### Styling

- **Colors**: Modify the purple gradient theme in `src/app/globals.css`
- **Components**: Customize individual components in `src/components/`
- **Layout**: Adjust spacing and sizing using Tailwind CSS classes

## 🖥️ VS Code Extensions (Recommended)

Install these extensions for the best development experience:

1. **ES7+ React/Redux/React-Native snippets** - React snippets
2. **Tailwind CSS IntelliSense** - Tailwind CSS autocomplete
3. **TypeScript Importer** - Auto import for TypeScript
4. **Auto Rename Tag** - Automatically rename paired HTML tags
5. **Prettier - Code formatter** - Code formatting
6. **Thunder Client** - API testing (if adding backend features)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Deploy with one click!

### Netlify

1. Run `npm run build`
2. Upload the `out` folder to Netlify
3. Your site is live!

### Other Platforms

This project works with any hosting platform that supports Node.js:
- Heroku
- Railway
- DigitalOcean
- AWS

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

If you need help or have questions:
1. Check the VS Code terminal for error messages
2. Make sure all dependencies are installed: `npm install`
3. Ensure Node.js 18+ is installed
4. Try deleting `node_modules` and running `npm install` again

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
