# Andrea's Pizza Restaurant Website

## Overview

This is a modern full-stack web application for Andrea's Pizza, an authentic Italian pizzeria located in East Village, New York. The application serves as both a marketing website and an online ordering platform, showcasing the restaurant's menu, story, and contact information while providing customers with the ability to place orders.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom pizza-themed color scheme
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions

### Development Environment
- **Development Server**: Vite dev server with Express API proxy
- **Hot Module Replacement**: Full HMR support for React components
- **Type Safety**: Strict TypeScript configuration across all layers

## Key Components

### Database Schema
The application uses three main database tables:
- **users**: Basic user authentication (id, username, password)
- **menu_items**: Pizza menu with categories, pricing, and availability
- **orders**: Customer orders with contact info, items, and status tracking

### API Layer
RESTful API endpoints provide:
- Menu item retrieval (all items and by category)
- Order creation and status tracking
- Type-safe request/response handling with Zod validation

### UI Components
Comprehensive component library including:
- **Navigation**: Responsive navigation with smooth scrolling
- **Hero Section**: Compelling pizza imagery and call-to-action
- **Menu Preview**: Showcasing popular dishes with high-quality images
- **Contact Information**: Location details with Google Maps integration
- **Responsive Design**: Mobile-first approach with tablet and desktop optimizations

### Business Features
- **Local SEO Optimization**: Schema markup for restaurant discovery
- **Brand Identity**: Custom color scheme reflecting Italian heritage
- **User Experience**: Smooth scrolling navigation and interactive elements
- **Performance**: Optimized images and lazy loading

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express routes handle business logic and data validation
3. **Database Operations**: Drizzle ORM provides type-safe database interactions
4. **Response Handling**: Structured JSON responses with proper error handling
5. **State Management**: Client-side caching and synchronization via React Query

The application currently uses in-memory storage for development, with the infrastructure ready for PostgreSQL production deployment.

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, TanStack Query for state management
- **Backend**: Express.js, Drizzle ORM, Neon PostgreSQL driver
- **UI Library**: Radix UI primitives, Lucide React icons, React Icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx for utility classes

### Development Tools
- **Build Tools**: Vite, esbuild for production builds
- **Type Checking**: TypeScript with strict configuration
- **Database Tools**: Drizzle Kit for schema management and migrations

### Third-Party Integrations
- **Database**: Neon serverless PostgreSQL
- **Maps**: Google Maps integration for location services
- **Images**: Unsplash for high-quality food photography
- **Fonts**: Google Fonts (Inter) for typography

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: esbuild bundles Express server with external dependencies
3. **Output Structure**: Static files served from `dist/public`, server from `dist/index.js`

### Environment Configuration
- **Development**: Local development with Vite dev server and hot reloading
- **Production**: Express server serving static files with API routes
- **Database**: Environment-based DATABASE_URL configuration

### Performance Optimizations
- **Code Splitting**: Automatic chunk splitting via Vite
- **Asset Optimization**: Image optimization and lazy loading
- **Caching Strategy**: Browser caching for static assets, server-side caching for API responses

The application is designed for deployment on platforms like Replit, Vercel, or traditional VPS hosting with PostgreSQL database support.

## Changelog

Changelog:
- June 29, 2025. Added multi-page architecture with dedicated pages for menu, about, contact, and pizza wheel functionality
- June 28, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.