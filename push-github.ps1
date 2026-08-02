# Script pour pusher NOVAE sur GitHub
# Lance ce fichier en faisant clic droit > "Exécuter avec PowerShell"

$repoPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoPath

Write-Host "📁 Dossier : $repoPath" -ForegroundColor Cyan

# Supprimer le verrou git si présent
if (Test-Path ".git\index.lock") {
    Remove-Item ".git\index.lock" -Force
    Write-Host "✅ Verrou git supprimé" -ForegroundColor Green
}

# Config identité git
git config user.email "cherkinicolas@gmail.com"
git config user.name "Nicolas Cherki"

# Ajouter tous les fichiers
git add .
Write-Host "✅ Fichiers ajoutés" -ForegroundColor Green

# Commit
git commit -m "NOVAE — refonte complete du site"
Write-Host "✅ Commit créé" -ForegroundColor Green

# Remote (ignore l'erreur si déjà existant)
git remote remove origin 2>$null
git remote add origin https://github.com/arkos-labs/safe-haven-services.git

# Renommer la branche en main
git branch -M main

Write-Host ""
Write-Host "⚠️  GitHub va te demander de t'authentifier." -ForegroundColor Yellow
Write-Host "   - Username : ton pseudo GitHub (ex: arkos-labs)" -ForegroundColor Yellow
Write-Host "   - Password : ton Personal Access Token (pas ton mot de passe GitHub !)" -ForegroundColor Yellow
Write-Host "   → Créer un token ici : https://github.com/settings/tokens/new" -ForegroundColor Yellow
Write-Host "     Cocher : repo (accès complet)" -ForegroundColor Yellow
Write-Host ""

# Push
git push -u origin main

Write-Host ""
Write-Host "🎉 Push terminé ! Vérifie sur : https://github.com/arkos-labs/safe-haven-services" -ForegroundColor Green
Write-Host ""
Read-Host "Appuie sur Entrée pour fermer"
