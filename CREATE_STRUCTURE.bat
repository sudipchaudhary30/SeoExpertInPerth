@echo off
REM Windows batch script to create folder structure
REM Run this file by double-clicking it or: CREATE_STRUCTURE.bat

echo Creating complete portfolio folder structure...

REM Create main folders
mkdir src
mkdir src\app
mkdir src\components
mkdir src\lib
mkdir src\styles
mkdir content
mkdir content\blog
mkdir public
mkdir public\images
mkdir deployment
mkdir deployment\cloudflare
mkdir deployment\database

echo.
echo === FOLDER STRUCTURE CREATED ===
echo.
echo Project folders ready:
echo   - src\app              (Pages and API routes)
echo   - src\components       (React components)
echo   - src\lib             (Utilities)
echo   - src\styles          (Styles)
echo   - content\blog        (Blog posts)
echo   - public              (Static files)
echo   - deployment          (Setup guides)
echo.
echo Next: Copy all files from INSTALLATION.md into these folders
echo.
pause
