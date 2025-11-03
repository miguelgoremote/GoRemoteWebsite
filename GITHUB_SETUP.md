# GitHub Setup Anleitung

## Schritt 1: GitHub Repository erstellen

1. Gehe zu https://github.com/new
2. Erstelle ein neues Repository (z.B. "GoRemoteWebsite")
3. **WICHTIG**: Erstelle es LEER (keine README, keine .gitignore, keine License)
4. Kopiere die Repository-URL (z.B. `https://github.com/username/GoRemoteWebsite.git`)

## Schritt 2: GitHub Device Flow Authentifizierung

### Option A: Mit gh CLI (empfohlen)

1. Installiere GitHub CLI falls noch nicht installiert:
   ```bash
   brew install gh
   ```

2. Authentifiziere dich mit Device Flow:
   ```bash
   gh auth login --device
   ```

3. Befolge die Anweisungen - GitHub zeigt dir einen Code in der Console
4. Gehe zu https://github.com/login/device und gib den Code ein

5. Füge dann das Remote hinzu:
   ```bash
   git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO.git
   git push -u origin main
   ```

### Option B: Mit Git Credential Helper

1. Erstelle einen Personal Access Token auf GitHub:
   - Gehe zu: https://github.com/settings/tokens
   - Klicke auf "Generate new token (classic)"
   - Gib dem Token einen Namen (z.B. "GoRemote Website")
   - Wähle die Scope: `repo` (vollen Zugriff)
   - Kopiere den Token

2. Wenn du das Repository erstellt hast, führe aus:
   ```bash
   git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO.git
   ```

3. Beim ersten Push wirst du nach Credentials gefragt:
   - Username: Dein GitHub Username
   - Password: Der Personal Access Token (nicht dein Passwort!)

## Schritt 3: Push zu GitHub

```bash
git push -u origin main
```

## Schritt 4: Vercel Deployment

1. Gehe zu https://vercel.com
2. Klicke auf "New Project"
3. Importiere dein GitHub Repository
4. Vercel erkennt automatisch Vite/React
5. Klicke auf "Deploy"

Die Website wird automatisch gebaut und deployed!

