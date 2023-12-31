# Jest and testing-library usage examples

This project is a cheat sheet for jest and testing-library. It covers examples of the most common features and use cases. Feel free to use it.

## Examples of "jest"

### [Basic unit test](/src/jestExamples/01basicUnit/basicUnit.test.ts)

- "./src/jestExamples/01basicUnit/basicUnit.test.ts"

### [Async testing Api](/src/jestExamples/02asyncTestingApi/asyncTestingApi.test.ts)

- "./src/jestExamples/02asyncTestingApi"

### [Mocking return value for sync func and resolved value for async function](/src/jestExamples/03MockReturnAndResolveValue)

- "./src/jestExamples/03mockReturnAndResolveValue"
- "./src/jestExamples/03mockReturnAndResolveValue"

### [Snapshot testing](/src/jestExamples/04snapShotTesting/Button.test.ts)

- "./src/jestExamples/04snapShotTesting"

### [Setup/cleanup before/after each/all test](</src/jestExamples/05before(Each,All)Afler(Each,All)/SetupAndCleanup.test.ts>)

- "./src/jestExamples/05before(Each,All)Afler(Each,All)"

### [Custom matchers](/src/jestExamples/06customMatchers/testWithCustomMatcher.test.ts)

- "./src/jestExamples/06customMatchers"

### [Asymmetric matchers](/src/jestExamples/07asymmetricMatchers/asymetricMatchers.test.ts)

- "./src/jestExamples/07asymmetricMatchers"

### [Timer mocks - testing functions that involve timeouts or intervals](/src/jestExamples/08timerMocks/timerMocks.test.ts)

- "./src/jestExamples/08timerMocks"

## Examples of "react-testing-library"

### [Basic render test](/src/testingLibraryExamples/01RenderBasics/renderBasics.test.tsx)

- "./src/testingLibraryExamples/01renderBasics"

### [Fire Events](/src/testingLibraryExamples/02FireEvents/fireEvents.test.tsx)

- "./src/testingLibraryExamples/02fireEvents"

### [Snapshot testing](/src/testingLibraryExamples/03snapshotTesting/snapshotTest.test.tsx)

- './src/testingLibraryExamples/03snapshotTesting'

### [Form testing](/src/testingLibraryExamples/04FormTesting/formtesting.test.tsx)

- './src/testingLibraryExamples/04formTesting'

### [Async behavior](/src/testingLibraryExamples/05asyncBehavior/testingAsyncBehavior.test.tsx)

- './src/testingLibraryExamples/05asyncBehavior'

## Available Scripts

In the project directory, you can run:

### `npm start`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
