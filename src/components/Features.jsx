import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Bell,
  BarChart3,
  FileText,
  MessageSquare,
  Stethoscope,
} from "lucide-react";

const features = [
  {
    title: "Easy Therapy Booking",
    desc: "Book therapies effortlessly with our smart scheduling system.",
    icon: <Calendar className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Reminders & Notifications",
    desc: "Never miss a session with automated pre & post therapy alerts.",
    icon: <Bell className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Progress Tracking",
    desc: "Visual dashboards to track recovery milestones & improvements.",
    icon: <BarChart3 className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Real-Time Session Logs",
    desc: "Digital records of every therapy session for easy reference.",
    icon: <FileText className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Patient Feedback",
    desc: "Rate therapies and share your healing experience.",
    icon: <MessageSquare className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Practitioner Dashboard",
    desc: "Tools for doctors to manage therapies and patient progress.",
    icon: <Stethoscope className="w-8 h-8 text-green-700" />,
  },
];

const FeaturesCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getFeature = (offset) => {
    const newIndex = (index + offset + features.length) % features.length;
    return features[newIndex];
  };

  return (
    <div className="flex items-center justify-center min-h-[28rem] bg-gradient-to-br from-[#fdf6e3] via-[#f0ead2] to-[#e9edc9] px-4">
      <div className="flex items-center gap-4 sm:gap-6 relative w-full max-w-7xl justify-center">
        {/* Far left card - hidden on small & medium */}
        <motion.div className="hidden lg:flex w-48 h-56 bg-[#fefae0] rounded-lg shadow p-4 flex-col items-center text-center scale-75 opacity-50">
          <div className="mb-2">{getFeature(-2).icon}</div>
          <h3 className="text-sm font-bold text-green-800">
            {getFeature(-2).title}
          </h3>
          <p className="text-gray-600 text-xs mt-1">{getFeature(-2).desc}</p>
        </motion.div>

        {/* Left card - visible from md */}
        <motion.div className="hidden md:flex w-56 h-64 bg-[#e9edc9] rounded-xl shadow-md p-5 flex-col items-center text-center scale-90 opacity-70">
          <div className="mb-3">{getFeature(-1).icon}</div>
          <h3 className="text-md font-bold text-green-800">
            {getFeature(-1).title}
          </h3>
          <p className="text-gray-700 text-sm mt-2">{getFeature(-1).desc}</p>
        </motion.div>

        {/* Center card - always visible */}
        <motion.div
          key={index}
          className="w-72 h-80 bg-[#d8e2dc] rounded-2xl shadow-xl p-6 flex flex-col items-center text-center z-10"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-3">{getFeature(0).icon}</div>
          <h3 className="text-lg font-bold text-green-900">
            {getFeature(0).title}
          </h3>
          <p className="text-gray-800 mt-2">{getFeature(0).desc}</p>
        </motion.div>

        {/* Right card - visible from md */}
        <motion.div className="hidden md:flex w-56 h-64 bg-[#e9edc9] rounded-xl shadow-md p-5 flex-col items-center text-center scale-90 opacity-70">
          <div className="mb-3">{getFeature(1).icon}</div>
          <h3 className="text-md font-bold text-green-800">
            {getFeature(1).title}
          </h3>
          <p className="text-gray-700 text-sm mt-2">{getFeature(1).desc}</p>
        </motion.div>

        {/* Far right card - hidden on small & medium */}
        <motion.div className="hidden lg:flex w-48 h-56 bg-[#fefae0] rounded-lg shadow p-4 flex-col items-center text-center scale-75 opacity-50">
          <div className="mb-2">{getFeature(2).icon}</div>
          <h3 className="text-sm font-bold text-green-800">
            {getFeature(2).title}
          </h3>
          <p className="text-gray-600 text-xs mt-1">{getFeature(2).desc}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesCarousel;

/**# Features Carousel Component - Revision Notes for me

## Overview
A React component that displays therapy app features in an auto-rotating carousel format with 5 visible cards at different scales and opacity levels.

## Dependencies
- **React**: useState, useEffect hooks
- **Framer Motion**: For animations and transitions
- **Lucide React**: Icon library (Calendar, Bell, BarChart3, FileText, MessageSquare, Stethoscope)

## Component Structure

### Features Data Array
6 feature objects, each containing:
- `title`: Feature name
- `desc`: Short description
- `icon`: Lucide React icon component with green-700 color and w-8 h-8 sizing

**Features List:**
1. Easy Therapy Booking (Calendar icon)
2. Reminders & Notifications (Bell icon)
3. Progress Tracking (BarChart3 icon)
4. Real-Time Session Logs (FileText icon)
5. Patient Feedback (MessageSquare icon)
6. Practitioner Dashboard (Stethoscope icon)

### State Management
- `index`: Current center card index (useState)
- Auto-increment every 3 seconds using useInterval
- Cycles through all 6 features infinitely

### Layout Structure
**5-card horizontal layout:**
1. **Far Left** (-2 offset): Smallest, most transparent
2. **Left** (-1 offset): Medium size, semi-transparent
3. **Center** (0 offset): Largest, fully opaque, animated
4. **Right** (+1 offset): Medium size, semi-transparent
5. **Far Right** (+2 offset): Smallest, most transparent

## Styling Details

### Background
- Gradient from light cream to sage green tones
- `bg-gradient-to-br from-[#fdf6e3] via-[#f0ead2] to-[#e9edc9]`

### Card Styling Progression
- **Far cards**: 48x56, scale-75, opacity-50, `bg-[#fefae0]`
- **Side cards**: 56x64, scale-90, opacity-70, `bg-[#e9edc9]`
- **Center card**: 72x80, scale-100, opacity-100, `bg-[#d8e2dc]`

### Color Scheme
- Icons: `text-green-700`
- Titles: `text-green-800` (sides), `text-green-900` (center)
- Descriptions: `text-gray-600/700/800` (increasing darkness toward center)

## Animation Details
- **Center card**: Scale and opacity animation on change
- **Duration**: 0.6s transition
- **Pattern**: scale 0.85→1, opacity 0→1
- **Auto-rotation**: 3-second intervals

## Key Functions
- `getFeature(offset)`: Calculates which feature to show at each position
- Uses modulo arithmetic for infinite cycling

## Potential Improvements to Consider
1. **Responsiveness**: Currently fixed widths, could benefit from responsive design
2. **Accessibility**: Missing ARIA labels, keyboard navigation
3. **Performance**: Could memoize feature calculations
4. **User Control**: No pause on hover or manual navigation
5. **Animation**: Could add slide transitions between cards
6. **Loading States**: No loading or error states
7. **Customization**: Hard-coded timing and colors

## File Dependencies Needed
- framer-motion package
- lucide-react package
- Tailwind CSS for styling

## Usage Context
Designed for a therapy/healthcare app landing page or dashboard to showcase key features in an engaging, automated presentation format. */
