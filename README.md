# 9 Men's Morris Game

A JavaScript implementation of the classic 9 Men's Morris game with additional features.

## HOW TO RUN
- Open index.html that is inside Website folder

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies used](#technologies-Used)
- [Project Objectives](#project-objectives)
- [Game Rules](#game-rules)
- [How to Play](#how-to-play)
- [Installation](#installation)
- [Usage](#usage)
- [Buttons and Functionality](#buttons-and-functionality)
- [Contributors](#Contributors)

## Description

This project is a web-based implementation of the 9 Men's Morris game. The game follows traditional rules and includes additional features such as save, reset, load functionalities, a "How to Play" guide, and a graph displaying remaining and captured pieces.

## Features

- Interactive game board
- Turn-based gameplay
- Mill formation detection
- Piece sliding and removal
- Timers for each player's turn
- Save, reset, and load functionalities
- "How to Play" guide
- Graph showing remaining and captured pieces


## Technologies used
- HTML
- CSS
- JAVASCRIPT
- CANVAS
- TAILWIND

## External Libraries used
- p5.min.js
- p5.sound.min.js


## Project Objectives

### 1. Implement Game Rules with Creative and Responsive UI

Details:
- Implement the rules of 9 Men's Morris.
- Ensure a user-friendly and visually appealing UI.
- Handle piece movement, mill formation, and board interaction.

### 2. Implement Betting Rule

Details:
- Integrate a betting system for players.
- Players can place bets on the game outcome.
- Implement UI for placing and displaying bets.

### 3. Implement Clock Timer

Details:
- Integrate a clock timer for each player.
- Reflect time remaining for a player's turn.
- Consider the betting rule and adjust the timer accordingly.
- Update UI to display countdown timer.

### 4. Implement Saved State

Details:
- Implement save and load functionality.
- Save relevant information: game board state, players' turns, clock timer values, active bets.
- Provide an interface for saving and loading game states.



## Game Rules

- Players: Two players, each with nine pieces
- Board: A grid with 24 intersections
- Pieces: Usually black and white
- Objective: To reduce the number of opponent's pieces to - - less than three or to render the opponent unable to play
- Setup: Players take turns placing all of their pieces on   the board
- Movement: Players take turns moving their pieces. A piece - can only be moved one place at a time.
- Mills: Players try to form "mills" by lining up three of - - their own pieces horizontally or vertically. When a mill is closed, a player can remove one of the opponent's pieces.


### Placing Phase

1. Each player starts with 9 pieces of a distinct color.
2. Players take turns placing their pieces on the board, aiming to form mills (three pieces in a row).
3. When a player forms a mill, they can remove one of their opponent's pieces from the board.

### Moving Phase

1. After all pieces are placed, players take turns sliding their pieces to adjacent empty spots.
2. Again, forming a mill allows a player to remove an opponent's piece.
3. The game continues until one player is reduced to two pieces or is unable to make a legal move.

## How to Play

1. Clone or download the repository.
2. Open the `index.html` file in a web browser.
3. Follow the on-screen instructions to play the game.

## Installation

No additional installation is required. Simply open the `index.html` file in a modern web browser.

## Usage

- Click on an empty cell during the placing phase to place a piece.
- Click on your own piece and then on an adjacent empty cell during the moving phase to slide a piece.
- Forming a mill will prompt you to click on an opponent's piece to remove it.

## Buttons and Functionality

- **Save:** Save the current game state to the local storage.
- **Reset:** Reset the game to the initial state.
- **Load:** Load a previously saved game from the local storage.
- **How to Play:** Displays a popup message providing instructions on how to play the game.
- **Pieces Animation:** Graphical representation showing the remaining and captured pieces for each player.

## Contributors
- Shubham Kathiriya (Roll no : 2023201050) - IIIT H 
- Sneha Arora (Roll no: 2023201025) - IIIT H
- Soham Kale (Roll no: 2023202018) - IIIT H 
- Soham Ghosh (Roll no: 2023202011) - IIIT H

