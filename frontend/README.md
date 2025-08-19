# Company Explorer - Frontend

A modern, responsive React application for discovering and exploring company information with an enhanced visual design system.

## ✨ Enhanced Design Features

### 🎨 Modern Visual System

- **Gradient Color Palette**: Multiple gradient combinations including neon, cosmic, aurora, and sunset themes
- **Glass Morphism**: Translucent cards with backdrop blur effects
- **Enhanced Shadows**: Colored shadow system with neon, cosmic, and aurora glows
- **Smooth Animations**: 60+ FPS animations with CSS transitions and keyframes

### 🌟 Interactive Elements

- **Magnetic Effects**: Hover animations that respond to user interaction
- **Particle System**: Floating particles that create dynamic backgrounds
- **Enhanced Hover States**: Multi-layered hover effects with transforms and shadows
- **Responsive Animations**: Smooth scaling, rotation, and movement effects

### 🎭 Animation System

- **Staggered Animations**: Sequential card animations with delays
- **Background Animations**: Floating geometric shapes and rotating backgrounds
- **Loading States**: Enhanced loading spinners with pulse effects
- **Transition Effects**: Smooth page transitions and element reveals

### 🎯 User Experience

- **Visual Feedback**: Immediate response to user interactions
- **Accessibility**: High contrast ratios and focus indicators
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Performance**: Optimized animations and efficient CSS

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## 🎨 Design System

### Color Variables

- Primary gradients for main elements
- Secondary gradients for accents
- Neon, cosmic, aurora, and sunset themes
- Consistent shadow and glow effects

### Typography

- Inter font family for modern readability
- Responsive font sizing with clamp()
- Gradient text effects for headings
- Optimized line heights and spacing

### Layout

- CSS Grid for responsive layouts
- Flexbox for component alignment
- Consistent spacing with CSS variables
- Mobile-first responsive breakpoints

## 🔧 Customization

### Adding New Gradients

```css
:root {
  --new-gradient: linear-gradient(135deg, #color1 0%, #color2 100%);
}
```

### Creating New Animations

```css
@keyframes newAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
```

### Magnetic Effects

Add the `magnetic` class to any interactive element:

```jsx
<button className="magnetic">Click me</button>
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## 🎯 Performance Features

- CSS-only animations (no JavaScript overhead)
- Efficient transforms and opacity changes
- Hardware-accelerated animations
- Optimized shadow and blur effects

## 🌈 Theme System

The application uses a comprehensive theme system with:

- CSS custom properties for consistent theming
- Multiple gradient combinations
- Dynamic shadow and glow effects
- Easy theme switching capabilities

## 📄 License

This project is part of the Company Explorer application.
