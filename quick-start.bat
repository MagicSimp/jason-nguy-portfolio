@echo off
echo 🚀 Setting up Jason Nguy Portfolio...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detected
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %ERRORLEVEL% EQU 0 (
    echo ✅ Dependencies installed successfully!
    echo.
    echo 🎉 Setup complete! Run the following commands:
    echo.
    echo    npm run dev     # Start development server
    echo    npm run build   # Build for production
    echo    npm run start   # Start production server
    echo.
    echo 🌐 The portfolio will be available at: http://localhost:3000
    echo.
    echo 💡 Tip: Open this project in VS Code for the best development experience!
) else (
    echo ❌ Failed to install dependencies. Please check your internet connection and try again.
    pause
    exit /b 1
)

pause
