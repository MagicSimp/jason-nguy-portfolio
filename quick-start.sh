#!/bin/bash

echo "🚀 Setting up Jason Nguy Portfolio..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt "18" ]; then
    echo "❌ Node.js version 18+ is required. You have version $(node -v)"
    echo "Please update Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! Run the following commands:"
    echo ""
    echo "   npm run dev     # Start development server"
    echo "   npm run build   # Build for production"
    echo "   npm run start   # Start production server"
    echo ""
    echo "🌐 The portfolio will be available at: http://localhost:3000"
    echo ""
    echo "💡 Tip: Open this project in VS Code for the best development experience!"
else
    echo "❌ Failed to install dependencies. Please check your internet connection and try again."
    exit 1
fi
