@echo off
REM Windows batch script to create GitHub repo using gh
REM Usage: create_github_repo.bat my-repo public
SET REPO=%1
SET VIS=%2
IF "%VIS%"=="" SET VIS=public

where gh >nul 2>&1
IF ERRORLEVEL 1 (
  echo GitHub CLI (gh) not found. Install from https://cli.github.com/
  exit /b 1
)

gh auth status >nul 2>&1
IF ERRORLEVEL 1 (
  echo Please run: gh auth login
  exit /b 1
)

IF NOT EXIST .git (
  git init
)

git add .

git commit -m "Initial commit"

gh repo create %REPO% --%VIS% --source=. --remote=origin --push

echo Repository created and pushed: %REPO%
