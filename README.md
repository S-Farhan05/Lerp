# LERP Lab - Linear Interpolation Animation

A simple interactive canvas-based animation demonstrating linear interpolation (LERP) between two shapes.

## Overview

This project is a Week 8 HCI lab assignment that visualizes the concept of linear interpolation. Users can draw two different shapes on a canvas and watch them smoothly animate from one to the other.

## Features

- **Interactive Drawing**: Click on the canvas to place points for Shape A (blue) and Shape B (red)
- **Shape Switching**: Right-click to switch from drawing Shape A to Shape B
- **LERP Animation**: Press any key to start the interpolation animation between the two shapes
- **Visual Feedback**: Real-time visualization of point placement

## How to Use

1. **Draw Shape A**: Left-click on the canvas to place blue points
2. **Switch to Shape B**: Right-click anywhere on the canvas
3. **Draw Shape B**: Continue left-clicking to place red points
4. **Animate**: Press any key on your keyboard to start the animation

The animation will smoothly interpolate each point from Shape A to its corresponding point in Shape B.

## Technical Details

- Built with vanilla JavaScript and HTML5 Canvas
- Implements linear interpolation formula: `lerp(a, b, t) = a + (b - a) * t`
- Animation uses `requestAnimationFrame` for smooth rendering
- Interpolation parameter (t) increases from 0 to 1 over time

## Files

- `index.html` - Main HTML structure
- `script.js` - Canvas logic and LERP implementation

## Running the Project

Simply open `index.html` in any modern web browser. No additional dependencies or setup required.

## Assignment Context

This is part of a Human-Computer Interaction (HCI) course, Week 8 lab focusing on animation and interpolation techniques.
