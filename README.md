# React.js Boilerplate (w/ localstorage, Hooks, Redux, SCSS, Webpack Configuration, README.md template, React-Modal)
#### by Manuel Santiago

The following repository contains a start-up point for my React.js projects

## Included Third-Party Software

[The `package.json` Guide](https://nodejs.dev/learn/the-package-json-guide)

|Production Dependencies|Version|
|:---|:---|
|react|17.0.1|  
|react-dom|17.0.1|
|react-modal|3.12.1|
|react-router|5.2.0|
|react-router-dom|5.2.0|
|web-vitals|1.1.2|
|validator|13.5.2|
|node-sass|5.0.0|
|express|4.17.1|

|Development Dependencies|Version|
|:---|:---|
|webpack|5.27.0|
|webpack-cli|4.5.0|
|webpack-merge|5.7.3|
|webpack-dev-server|3.11.2|
|@babel/core|7.13.10|
|@babel/plugin-proposal-object-rest-spread|7.13.8|
|@babel/plugin-syntax-dynamic-import|7.8.3|
|@babel/plugin-transform-runtime|7.13.10|
|@babel/preset-typescript|7.13.0|
|@babel/preset-env|7.13.12|
|@babel/preset-react|7.12.13|
|babel-loader|8.2.2|
|sass-loader|11.0.1|  
|style-loader|2.0.0|  
|file-loader|6.2.0|  
|html-loader|2.1.2|  
|css-loader|5.1.3|  
|resolve-url-loader|3.1.3|  
|mini-css-extract-plugin|1.6.0|  
|optimize-css-assets-webpack-plugin|5.0.4|  
|html-webpack-plugin|5.3.1|  

## Environment Setup (Ubuntu)

### Node Installation
1. Start by updating the package repository <br>
   ``` sudo apt update -y```
2. Download the following dependencies <br>
   ``` sudo apt install build-essential checkinstall libssl-dev -y ```
3. Install NVM <br>
   ``` curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash ``` <br>
   More nvm information or check latest releases here: [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md)
4. Verify if you have successfully installed NVM <br>
   ``` nvm --version ```
5. Check which version you have running on the system (You might no see anything if it is the first time installing nvm)<br>
   ``` nvm ls ```
6. Check for newly available releases with <br>
   ``` nvm ls-remote ```
7. Install the desired version <br>
   ``` nvm install [version.number] ```
8. Verify node is installed <br>
   ``` node -v ```

### Yarn Installation
1. Verify npm is installed <br>
   ``` npm -v ```
2. Install yarn <br>
   ``` npm install -g yarn ```

### live-server Installation (Not needed with scripts)
1. Install live-server globally <br>
   ``` yarn global add live-server ```
2. Verify live-server is installed  <br>
   ``` live-server -v ```
3. To use live-server <br>
   ``` live-server <directory-to-serve>```

### Babel Installation (Not needed with scripts)
1. Install Babel and Babel CLI globally <br>
   ``` yarn global add babel-cli ```
2. Verify babel is installed  <br>
   ``` babel --version ```
3. To use babel to convert JSX into ES5<br>
   ```  babel src/index.js --out-file=public/scripts/index.js --presets=env,react --watch ```

### Changes in .gitignore (Only Needed if there are changes in .gitignore)
1. Remove cached data
   ``` git rm -r --cached . ```

## Application Setup (Ubuntu)
1. N/A

## Available Scripts

### `yarn serve`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Uses [Webpack](https://webpack.js.org/) to build the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. <br>

### `yarn start`

Serves the built app in the node server.<br>
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration
