module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://flushprob.github.io`,
    // Your Name
    name: '정인식 | Inshik Chung',
    // Main Site Title
    title: `Inshik Chung | Newbie Developer`,
    // Description that goes under your name in main bio
    description: `Trying it`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/flushprob`,
    // Optional: LinkedIn account URL
    // linkedin: `https://www.linkedin.com/in/ryanafitzgerald/`,
    // Content of the About Me section
    about: `Currently studying Computer Engineering at Hanbat National University.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'face blurring webApp',
        description:
          'Capstone Design 2021, Using caffe and mediapipe to blurring faces',
        link: 'https://github.com/flushprob/faceblur_web',
      },
      {
        name: 'zikgucal',
        description:
          'Simple Project 2020, Using Java to make simple caculator for expense of oversea shopping',
        link: 'https://github.com/flushprob/zikgucal',
      },
      {
        name: 'Showerbooth for socially underprivileged',
        description:
          'PROBONO ICT Project 2019, Keep safe while taking shower, if had accident, contact to guardian immediately',
        link: 'https://github.com/flushprob/showerbooth_2019',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Hanbat National University - Computer Engineering',
        description: 'Student, March 2020 - February 2022',
      },
      {
        name: 'Korea Polytechnic Daejeon - Information & Communication System',
        description: 'Student, March 2016 - February 2020',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C, Java, Python',
      },
      {
        name: 'Other',
        description:
          'Git, English, Friendly, Hard working, Postive mind',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
