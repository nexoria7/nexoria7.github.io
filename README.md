# NEXORIA — Software Engineering Portfolio

A dark, motion-rich portfolio presenting software development capabilities, selected projects and an engineering approach.

## Highlights
- Responsive layout for desktop and mobile
- Dark visual system with cyan, blue and violet accents
- Animated ambient particle field and orbital hero graphic
- Scroll progress, reveal transitions and mobile navigation
- Profile, expertise, selected work, approach and contact sections
- Reduced-motion support
- No framework, package manager or external runtime dependency

## Technology
HTML5 · CSS3 · Vanilla JavaScript · Python 3 (static build utility)

## Local build and preview
Run:
    python build.py
Then:
    python -m http.server 8000 --directory dist
Open http://localhost:8000

## Deployment
The site is designed for GitHub Pages and is served from the repository root. The Python script is a local build helper; GitHub Pages serves static web assets and does not execute Python on the server.

## Structure
- index.html — page structure and content
- assets/css/style.css — visual system and responsive layout
- assets/js/main.js — navigation, reveal effects and particle field
- build.py — dependency-free Python build utility

## Content note
Project descriptions are concise portfolio summaries. Repository links are provided only where a public repository URL is known. The portfolio intentionally avoids personal identifiers and student-oriented framing.
