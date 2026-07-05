# Contributing to BuildVerse

Welcome to BuildVerse! We're thrilled that you'd like to contribute.

BuildVerse is a community-driven repository where developers can submit their open-source web projects. Every accepted project is automatically discovered and showcased on our live website!

## ⚙️ Submission Flow

1. **Fork the repository** and create a new branch.
2. **Create a new folder** inside the `projects/` directory. Use Title Case with spaces (or lowercase with hyphens, just be consistent).
3. **Include your project files** inside that new folder. Your folder MUST contain at least a `project.json` file and a `README.md`.
4. **Open a Pull Request** to our `main` branch.
5. After approval, the showcase updates automatically.

### Folder Naming Example
✅ `To Do Web App` or `to-do-web-app`
❌ `to_do_web_app`
❌ `todowebapp`

## 📄 The `project.json` File

Every project must include a `project.json` file inside its project folder.
Use the template below and update the values according to your project:

```json
{
  "title": "Your Project Title",
  "description": "A short, engaging description of what your project does (approx. 15-25 words).",
  "author": { 
    "name": "Your Name", 
    "github": "YourGithubUsername" 
  },
  "tags": ["React", "CSS", "Tool"],
  "demoUrl": "https://your-live-demo-link.com",
  "createdAt": "2026-07-05"
}
```

### Before Opening a Pull Request
- Ensure all fields in your `project.json` are filled correctly.
- Keep descriptions concise and meaningful.
- Use relevant tags so users can discover your project easily.
- Make sure to add a `README.md` to your project folder explaining what it is and how to run it locally.

Our maintainers will review your submission shortly. Once merged, your project will be instantly live on the BuildVerse platform!
