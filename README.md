# Assembly: Endgame

**Assembly: Endgame** is a fast, accessible, Hangman-inspired word game built with React.  
Instead of losing body parts, each wrong guess eliminates a programming language.  
Lose them all — and Assembly takes over.

🌐 **[Live site](https://assemblyanegame.netlify.app/)**

## Features

- Hangman-style gameplay with a programming twist
- Visual “language elimination” instead of traditional Hangman drawings
- Lazy state initialization for improved performance
- Confetti animation on win (`react-confetti`)
- Accessible focus management and screen reader announcements
- Installable as a Progressive Web App (PWA)

## Tech Stack

- **React**
- **Vite**
- **clsx** – conditional class handling
- **Biome** – linting and formatting
- **react-confetti** – win celebration animation

## How to Play

1. A hidden word is randomly selected at the start of the game.
2. Click letters on the on-screen keyboard to make guesses.
3. Correct guesses reveal letters in the word.
4. Wrong guesses eliminate a programming language.
5. The game ends when:
    - ✅ You reveal the entire word (you win), or
    - ❌ All programming languages are eliminated (Assembly wins).


## Accessibility

- Keyboard-accessible controls
- Visible focus states
- Screen reader announcements for game status changes
- Clear visual feedback for correct and incorrect guesses


## 🚀 Performance

Optimized for maximum efficiency, scoring a perfect **100** in all Lighthouse categories (Performance, Accessibility,
Best Practices, and SEO).
