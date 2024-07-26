Just change src/portfolio.js to get your personal portfolio. Customize the portfolio theme by using your own color scheme globally in the src/_globalColor.scss file. Feel free to use it as-is or personalize it as much as you want.

If you'd like to contribute and make this much better for other users, have a look at Issues.

Created something awesome for your fork of the portfolio and want to share it? Feel free to open a pull request.

Table of Contents
Sections
Getting Started
How to Use
Linking Portfolio to GitHub
Linking Blogs Section to Medium
Change and Customize
Deployment
Technologies Used
Illustrations
For the Future
Contributors
Portfolio Sections
✔️ Summary and About Me
✔️ Skills
✔️ Education
✔️ Work Experience
✔️ Open Source Projects Connected with GitHub
✔️ Big Projects
✔️ Achievements And Certifications 🏆
✔️ Blogs
✔️ Talks
✔️ Podcast
✔️ Contact Me
✔️ Twitter Timeline
✔️ GitHub Profile

To view a live example, click here.

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need Git and Node.js (which comes with npm) installed on your computer or use Docker.

graphql
Copy code
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
Docker Commands
yaml
Copy code
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -t -p 3000:3000 developerfolio:latest
How To Use
From your command line, clone and run developerFolio:

bash
Copy code
# Clone this repository
git clone https://github.com/saadpasta/developerFolio.git

# Go into the repository
cd developerFolio

# Setup default environment variables

# For Linux
cp env.example .env
# For Windows
copy env.example .env

# Install dependencies
npm install

# Start a local dev server
npm start
Linking Portfolio to GitHub
Generate a classic GitHub personal access token following these instructions (make sure you don't select any scope just generate a simple token). If you are using GitHub Actions to deploy your portfolio you can skip this section.

Create a file called .env in the root directory of your project (if not done already in section: How To Use)

Inside the .env file, add key REACT_APP_GITHUB_TOKEN and assign your GitHub token like this, also add your username as GITHUB_USERNAME

env
Copy code
// .env
REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"
GITHUB_USERNAME = "YOUR GITHUB USERNAME"
USE_GITHUB_DATA = "true"
Set showGithubProfile to true or false to show Contact Profile using GitHub, defaults to false.

Warning: Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.

Linking Blogs Section to Medium
Optionally, you can link the blogs section to your Medium user account:

Inside the .env file, add key MEDIUM_USERNAME and assign your Medium username
env
Copy code
// .env
MEDIUM_USERNAME = "YOUR MEDIUM USERNAME"
For GitHub Action, change the environment variable MEDIUM_USERNAME in .github/workflows/deploy.yml
Set displayMediumBlogs to true or false in portfolio.js to display fetched Medium blogs, defaults to true.