# Foundr Frontend Setup Guide

## Environment Configuration

Create a `.env.local` file in the root directory with the following variables:

### Firebase Configuration (Optional)
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### OpenAI Configuration (Required for AI Chat)
```env
OPENAI_API_KEY=your_openai_api_key_here
```

## Firebase Setup (Optional)

To use the Firebase login functionality:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Authentication and Email/Password sign-in method
4. Get your Firebase configuration from Project Settings > General > Your apps
5. Add the configuration to your `.env.local` file

## OpenAI Setup (Required for AI Chat)

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create an account or sign in
3. Navigate to API Keys section
4. Create a new API key
5. Add the API key to your `.env.local` file as `OPENAI_API_KEY`

## Components Overview

### 1. SearchBar Component
- **Location**: `app/components/SearchBar.js`
- **Features**: Text input with submit button, form validation
- **Props**: `onSearch` (callback function), `placeholder` (optional)

### 2. LoginPage Component
- **Location**: `app/components/LoginPage.js`
- **Features**: Firebase email/password authentication, sign up/sign in toggle
- **Dependencies**: Firebase configuration (optional)

### 3. CostCalculator Component
- **Location**: `app/components/CostCalculator.js`
- **Features**: 3 input fields (Material, Labor, Overhead), total calculation
- **Currency**: Indian Rupees (₹)

### 4. VendorCard Component
- **Location**: `app/components/VendorCard.js`
- **Features**: IndiaMART-style vendor information display
- **Props**: `vendor` (optional, uses default data if not provided)

### 5. AIChat Component
- **Location**: `app/components/AIChat.js`
- **Features**: Interactive chat with OpenAI GPT-4
- **Dependencies**: OpenAI API key required

## API Endpoints

### `/api/chat`
- **Method**: POST
- **Body**: `{ prompt: string }`
- **Response**: `{ result: string, timestamp: string }`
- **Features**: OpenAI GPT-4 integration with error handling

## Usage

The main page (`app/page.js`) includes a tabbed interface to showcase all components:

- **Search Bar**: Basic search functionality demo
- **Firebase Login**: Email/password authentication (optional)
- **Cost Calculator**: Project cost calculation tool
- **Vendor Card**: IndiaMART vendor information display
- **AI Chat**: Interactive chat with OpenAI GPT-4

## Running the Application

```bash
npm run dev
```

Visit `http://localhost:3000` to see all components in action.

## Customization

Each component can be customized by:
- Modifying the Tailwind CSS classes for styling
- Updating the default data in VendorCard
- Adding more fields to CostCalculator
- Extending the search functionality in SearchBar
- Adding more authentication methods to LoginPage
- Customizing the AI prompt handling in the chat API

## Error Handling

The application includes comprehensive error handling:
- Firebase configuration errors (graceful fallback)
- OpenAI API errors (quota exceeded, invalid key, etc.)
- Network errors and timeouts
- Form validation errors 