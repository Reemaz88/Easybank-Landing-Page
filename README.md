# Easybank Landing Page

## Project Overview

This project is based on the **Easybank Landing Page** coding challenge from [Frontend Mentor](https://www.frontendmentor.io). The goal of this challenge was to build a responsive landing page that closely matches the provided design, showcasing Easybank's digital banking services.

The landing page features sections like a hero banner, features, a blog, and a footer, with mockups and custom styles to give a polished, professional appearance.

## Technologies Used

- **React**: The app is built using React to efficiently manage the component-based UI.
- **Tailwind CSS**: Used for styling the components and layout, providing a clean and responsive design.
- **CSS3**: Inline styles are used for certain adjustments that apply only to small screens.

## Key Features

- **Responsive Design**: The page is optimized for both mobile and desktop views, with background images and mockups that adapt based on the screen size.
- **Hero Section**: The hero section includes a headline, a description, and a call-to-action button, all styled for both small and large screens.
- **Mockup Images**: Unique styles are applied to mockup images for different screen sizes, ensuring they look great on all devices.
- **Feature Highlights**: The features section displays key benefits of using Easybank with appealing visuals.
- **Blog Section**: A blog section that showcases articles related to digital banking.

## Project Structure

```plaintext
src/
│
├── components/
│   ├── Navbar.js          # Navigation bar for easy access to different sections
│   ├── Hero.js            # Hero section with a headline and call-to-action
│   ├── Features.js        # Features section highlighting Easybank services
│   ├── Blog.js            # Blog section for showcasing articles
│   ├── Footer.js          # Footer with links and contact information
│
├── styles/
│   ├── tailwind.css       # Custom Tailwind CSS configuration for the project
│
├── App.js                 # Main component rendering all sections
├── index.js               # Entry point for the React application
└── ...
```

## How to Run the Project

1. **Clone the repository:**
  ```bash
  git clone https://github.com/Reemaz88/multi-step-form-main
  ```

2. **Navigate to the project directory:**
  ```bash
  cd multi-step-form-main
  ```

3. **Install the dependencies:**
  ```bash
  npm install
  ```

4. **Start the development server:**
  ```bash
  npm start
  ```

The app will be running at http://localhost:3000.


## Deployment

To deploy the project for production:

1. **Build the project:**
    ```bash
    npm run build
    ```

2. Deploy the `build/` folder to your hosting service of choice (e.g., Vercel, Netlify, or GitHub Pages).

## Learnings and Improvements

This project enhanced my skills in using React for building responsive UIs and utilizing Tailwind CSS for styling. It provided valuable experience in creating visually appealing components that adapt to different screen sizes.

### Future Improvements

- Enhancing animations and transitions for a better user experience.
- Adding more interactive features or a contact form for user engagement.

## Credits

The design and assets were provided by Frontend Mentor.