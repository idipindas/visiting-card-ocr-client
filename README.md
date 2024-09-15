# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
The frontend of this application is built using React and provides a user-friendly interface for interacting with visiting card data. Below is an overview of the key components and functionality of the frontend:

Features
Image Upload and OCR Processing

Upload Interface: Users can upload images of visiting cards using a drag-and-drop area or traditional file input method.
OCR Integration: The application utilizes Tesseract.js to perform Optical Character Recognition (OCR) on the uploaded images, extracting relevant text data such as name, job title, company, email, phone number, and address.
Image Preview: Once an image is uploaded, a preview of the image is displayed before processing begins.
Form for Card Details

Automatic Population: Extracted text data from the OCR process is automatically populated into predefined text fields for user review and editing.
Manual Input: Users can manually enter or correct the extracted information if any fields are missing or incorrect.
Save Functionality

Save Button: After reviewing and editing the card details, users can save the data to the backend server.
API Integration: The frontend communicates with the backend API to save the card data, and provides feedback to the user upon successful or failed save attempts.
List of Saved Cards

Card List Page: Users can view a list of previously saved visiting cards, including details such as name, job title, company, email, phone number, and address.
Navigation: Users can navigate between different pages, including a page for uploading new cards and a page for viewing the list of saved cards.
Technologies Used
React: For building the user interface and managing application state.
Tesseract.js: For performing Optical Character Recognition on the uploaded images.
Axios: For making HTTP requests to the backend API.
React Router: For handling navigation between different pages within the application.
CSS: For styling the components and ensuring a responsive design.

Running the Frontend
Install Dependencies: Run npm install to install all the necessary dependencies.
Start the Development Server: Run npm start to start the development server and open the application in your default web browser.
