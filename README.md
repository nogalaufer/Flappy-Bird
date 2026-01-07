# Flappy Bird Game

A classic Flappy Bird game implementation built with HTML5 Canvas and JavaScript. Navigate your bird through pipes while avoiding collisions with the ground and obstacles.

## 🎮 Features

- **Classic Gameplay**: Navigate the bird through pipes by clicking or pressing space
- **Score System**: Track your current score and high score (saved in localStorage)
- **Sound Effects**: Toggleable sound effects for flapping, scoring, and collisions
- **Responsive Design**: Works on desktop and mobile devices
- **Animated Sprites**: Smooth animations for bird, ground, and pipes
- **Game States**: Start screen, gameplay, and game over modal with score summary
- **Visual Feedback**: Medal display for new high scores

## 🛠️ Technologies Used

- **HTML5 Canvas**: For rendering game graphics
- **Kontra.js**: Lightweight JavaScript game engine
- **Vanilla JavaScript**: No frameworks, pure JS
- **CSS3**: Modern styling with animations
- **Font Awesome**: Icons for UI elements
- **Google Fonts**: Jersey 10 font for retro aesthetic

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd FlappyBird
```

2. Install dependencies:
```bash
npm install
```

3. Open `index.html` in your web browser, or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

4. Navigate to `http://localhost:8000` in your browser

## 🎯 How to Play

1. Click the **START** button to begin the game
2. Use **Spacebar** or **Click/Tap** to make the bird flap and fly upward
3. Navigate through the gaps between pipes
4. Avoid hitting the pipes or the ground
5. Each pipe you pass increases your score
6. When you crash, view your score and try to beat your high score!

## 📁 Project Structure

```
FlappyBird/
├── css/                    # Stylesheets
│   ├── base.css           # Base styles
│   ├── game-over-modal.css # Game over screen styles
│   ├── helpers.css        # Utility classes
│   ├── layout.css         # Layout styles
│   ├── mq.css             # Media queries
│   ├── start-modal.css    # Start screen styles
│   ├── style.css          # Main stylesheet
│   └── volume-btn.css     # Volume button styles
├── imgs/                   # Game assets
│   ├── birdUp.png         # Bird sprite
│   ├── pipe.top.png       # Top pipe sprite
│   ├── pipe.bottom.png    # Bottom pipe sprite
│   ├── ground*.png        # Ground sprites
│   └── backdrop*.png      # Background images
├── js/                     # JavaScript files
│   ├── gameFunc.js        # Main game functions
│   ├── loopGame.js        # Game loop and initialization
│   ├── services/          # Service modules
│   │   ├── game.service.js # High score and sound preferences
│   │   └── util.js        # Utility functions
│   └── sprites/           # Game sprite classes
│       ├── bird.js        # Bird sprite and physics
│       ├── ground.js      # Ground sprite
│       ├── pipe.js        # Pipe sprites
│       ├── gameText.js    # Score text display
│       └── tapAndPointer.js # Tap indicator
├── sounds/                 # Sound effects
├── index.html             # Main HTML file
├── package.json           # Dependencies
└── README.md             # This file
```

## 🎨 Game Mechanics

- **Gravity**: Bird falls naturally due to gravity
- **Jump**: Press space or click to make the bird jump upward
- **Collision Detection**: Circle-rectangle collision detection for bird vs pipes/ground
- **Scoring**: Score increases when passing through pipes
- **High Score**: Automatically saved to browser localStorage
- **Sound Preferences**: Sound on/off preference saved to localStorage

## 🎵 Sound Effects

- Flap sound when bird jumps
- Score sound when passing pipes
- Collision sound when hitting obstacles
- Click sound for UI interactions

## 🎮 Controls

- **Spacebar**: Make bird flap (desktop)
- **Mouse Click**: Make bird flap (desktop)
- **Touch/Tap**: Make bird flap (mobile)
- **Volume Button**: Toggle sound on/off

## 🔧 Dependencies

- `kontra`: ^10.0.2 - JavaScript game engine

## 📝 Browser Compatibility

Works on all modern browsers that support:
- HTML5 Canvas
- ES6 JavaScript
- CSS3 Animations
- LocalStorage API

## 🚀 Future Enhancements

Potential improvements:
- Difficulty levels
- Power-ups
- Multiple bird skins
- Leaderboard system
- Particle effects
- Background themes

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Development

The game uses a modular architecture with separate sprite classes and service modules for maintainability. The game loop is handled by Kontra.js, providing smooth 60fps gameplay.

---

Enjoy playing Flappy Bird! 🐦

