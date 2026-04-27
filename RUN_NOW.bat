@echo off
REM Setup and Run Sudip's Portfolio Website

cd /d "c:\Users\Victus\Desktop\Portfolio website"

echo ========================================
echo SUDIP CHAUDHARY - PORTFOLIO SETUP
echo ========================================
echo.

echo Creating folders...
md src\styles src\lib src\components src\app\portfolio src\app\blog src\app\api\contact content\blog public\images deployment 2>nul

echo Creating source files...
node setup-files.js

echo.
echo ========================================
echo Installing npm dependencies...
echo This may take 1-2 minutes...
echo ========================================
echo.

call npm install --legacy-peer-deps

echo.
echo ========================================
echo ✅ SETUP COMPLETE!
echo ========================================
echo.
echo 🚀 Starting your portfolio...
echo.
echo Opening http://localhost:3000 in browser...
echo.
echo Press CTRL+C to stop
echo ========================================
echo.

REM Try to open browser (Windows)
timeout /t 2 /nobreak
start http://localhost:3000

call npm run dev

pause
