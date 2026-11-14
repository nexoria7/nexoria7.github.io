# NEXORIA NEXUS

A private, modular, offline-ready workspace for projects, code and files.

**Live site:** https://nexoria7.github.io  
**Repository:** https://github.com/nexoria7/nexoria7.github.io

## Modules
- Dashboard for workspace activity, project summaries and tasks.
- Project manager with progress and status tracking.
- Code Studio for HTML, CSS and JavaScript experiments with a sandboxed preview.
- File manager for local text notes, imports and downloads.
- Analytics for project progress and task completion.
- Separate local workspaces: Personal, Development, NEON OVERDRIVE and AI Research.
- English and Persian interface with automatic LTR and RTL direction.
- JSON backup and restore.
- Installable PWA shell with service-worker caching for offline revisits.

## Architecture
Vanilla HTML, CSS and JavaScript modules. Data is stored in IndexedDB with a localStorage fallback. No build step, backend, account system, external API key or cloud service is required.

## Run and deploy
Serve this repository with any static web server for local testing. GitHub Pages can publish the root of the main branch. Keep the website entry file in the repository root.

## Privacy and limitations
Workspace records stay in the current browser profile on the current device. They are not uploaded to GitHub and do not automatically synchronize across devices or users. Clearing site data can remove them; export backups regularly. This static edition does not include cloud login, collaboration, cloud synchronization, or server-side Python execution. Code Studio previews run inside a sandboxed iframe.