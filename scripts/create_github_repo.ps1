# PowerShell script to create GitHub repo and push
# Usage: ./create_github_repo.ps1 -RepoName my-repo -Visibility public
param(
  [Parameter(Mandatory=$true)]
  [string]$RepoName,
  [ValidateSet("public","private")]
  [string]$Visibility = "public"
)

# Ensure gh is installed and authenticated
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  Write-Error "GitHub CLI (gh) is not installed. Install from https://cli.github.com/"
  exit 1
}

gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Please run 'gh auth login' to authenticate with GitHub"
  exit 1
}

# Initialize git if needed
if (-not (Test-Path .git)) {
  git init
}

git add .
git commit -m "Initial commit" -q

gh repo create "$RepoName" --$Visibility --source=. --remote=origin --push

Write-Host "Repository created and pushed to GitHub: $RepoName"
