# Next.js Authentication App

This project is a Next.js application that implements a complete authentication system with various screens for user management. It utilizes ShadCN for styling and provides a seamless user experience.

## Features

- **Authentication Screens**:

  - Signup
  - Login
  - Forgot Password
  - Reset Password
  - Code Verification

- **Responsive Design**:

  - Black background with a six-column layout for taking pictures.

- **Components**:
  - `AuthLayout`: Provides a consistent layout for all authentication screens.
  - `AuthForm`: Handles rendering and validation of authentication forms.
  - `Toast`: Displays notifications for success or error messages.

## Project Structure

```
noair-lab-web
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── AuthLayout.tsx
│   │   ├── AuthForm.tsx
│   │   └── common
│   │       └── Toast.tsx
│   ├── pages
│   │   ├── api
│   │   │   └── auth
│   │   │       ├── login.ts
│   │   │       ├── signup.ts
│   │   │       ├── forgot-password.ts
│   │   │       ├── reset-password.ts
│   │   │       └── verify-code.ts
│   │   ├── auth
│   │   │   ├── login.tsx
│   │   │   ├── signup.tsx
│   │   │   ├── forgot-password.tsx
│   │   │   ├── reset-password.tsx
│   │   │   └── verify-code.tsx
│   │   ├── _app.tsx
│   │   └── index.tsx
│   ├── styles
│   │   └── globals.css
│   ├── utils
│   │   └── api.ts
│   └── types
│       └── index.ts
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Clone the repository**:

   ```
   git clone <repository-url>
   cd noair-lab-web
   ```

2. **Install dependencies**:

   ```
   npm install
   ```

3. **Run the development server**:

   ```
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Navigate to the authentication screens via the links provided on the main page.
- Follow the prompts to sign up, log in, or recover your password.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
