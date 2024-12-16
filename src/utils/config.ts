import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Like This",
  seo: {
    title: "Download Like This",
    description: "Like This",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/logo.svg",
  theme: "corporate",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: true,
//   appStoreLink: "https://apps.apple.com/us/app/google/id284815942",
  googlePlayLink:
    "https://play.google.com/store/apps/details?id=com.stormfkrs.like_this",
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {
//       instagram: "https://instagram.com/google",
//       facebook: "https://facebook.com/google",
//       twitter: "https://x.com/google",
    },
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Get the app",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Download Like This Today!",
    subtitle:
      "Discover the most amazing items in the world. Stay connected, informed, and in control wherever you are.",
    screenshots: [
      "/screenshots/1.webp",
      "/screenshots/2.webp",
      "/screenshots/3.webp",
    ],
  },
  home: {
    seo: {
      title: "Download Like This Mobile App",
      description: "Download Like This Mobile App",
    },
    testimonials: {
      id: "testimonials",
      title: "Testimonials",
      subtitle: "Check out a few of our customer stories",
      cards: [
        {
          name: "Marta G.",
          comment:
            "Una app súper divertida y original. Me encanta cómo puedo agregar cualquier cosa que se me ocurra para encontrar en el juego. La nueva función de Bingo es un toque genial, ¡mis amigos y yo no podemos dejar de jugar!",
        },
        {
          name: "Carlos H.",
          comment:
            "‘Like This’ ha llevado nuestras reuniones familiares al siguiente nivel. El modo Bingo es nuestro favorito, especialmente cuando añadimos cosas graciosas y raras a nuestras tarjetas. ¡Muy recomendable!",
        },
        {
          name: "Ana P.",
          comment:
            "Soy un gran fan de las apps que combinan creatividad y diversión, y ‘Like This’ lo hace perfectamente. La animación de nieve navideña me ha encantado, ¡realmente le da un toque especial a la temporada!",        },
        {
          name: "Jose R.",
          comment:
"Esta app es perfecta para mantener entretenidos a mis hijos durante las salidas. Les encanta buscar los ítems que agregamos en el juego. La nueva función de Bingo añade una competencia sana y mucha diversión.",        },
        {
          name: "Laura M.",
          comment:
"La simplicidad y el ingenio de ‘Like This’ me han sorprendido gratamente. Crear mis propias tarjetas de Bingo con ítems originales ha sido una experiencia única. ¡Gran trabajo con esta app!",        },
      ],
    },
//     partners: {
//       title: "As seen on",
//       logos: [
//         "/misc/companies/apple.svg",
//         "/misc/companies/aws.svg",
//         "/misc/companies/google.svg",
//         "/misc/companies/tumblr.svg",
//       ],
//     },
    howItWorks: {
      id: "how-it-works",
      title: "How it works",
      subtitle:
        "Explore our comprehensive step-by-step guide to understand how our process ensures seamless and effective results",
      steps: [
        {
          title: "Install the App",
          subtitle:
            "Download and install the app on your device to get started quickly and easily.",
          image: "/stock/01.webp",
        },
        {
          title: "Create an Account",
          subtitle:
            "Sign up by entering your personal details and verifying your email to create a new account in just a few minutes.",
          image: "/stock/02.webp",
        },
        {
          title: "Create a new Game",
          subtitle:
            "Create a new fully customized game to play with your friends",
          image: "/stock/03.webp",
        },
        {
          title: "Have fun",
          subtitle:
            "Play with your friends in a single game and beat them all",
          image: "/stock/04.webp",
        },
//         {
//           title: "Connect with Others",
//           subtitle:
//             "Start connecting with friends, colleagues, and like-minded individuals to expand your network and collaborate efficiently.",
//           image: "/stock/05.webp",
//         },
      ],
    },
    features: {
      id: "features",
      title: "Transform The Way You See The World",
      subtitle:
        "Elevate your lifestyle with our innovative mobile app, designed for seamless living",
      cards: [
        {
          title: "Limitless Creativity 🎨",
          subtitle:
            "Invite your friends to a world full of creativity where you can add anything you can think of. From common objects to imaginative items, the only limit is your imagination.",
          icon: "/3D/paint-kit-front-color.webp",
        },
        {
          title: "Interactive Bingo Mode 🎲",
          subtitle:
            "The new Bingo feature, where you and your friends receive personalized cards and compete to complete a line or full Bingo. It adds an extra layer of fun and healthy competition.",
          icon: "/3D/clock-front-color.webp",
        },
        {
          title: "Play and Discover 🔍",
          subtitle:
            "We encourage to explore your surroundings in a fun and exciting way. Every game is a unique adventure that turns everyday activities into thrilling treasure hunts.",
          icon: "/3D/notify-heart-front-color.webp",
        },
        {
          title: "Festive Experience ❄️🎄",
          subtitle:
            "Check the seasonal animations and themes, like the new falling snow animation, which add a magical and festive touch to the gaming experience, making every session special.",
          icon: "/3D/gift-front-color.webp",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "What is 'Like This'?",
          answer:
            "'Like This' is an interactive game where players create lists of fun and curious items they'd like to see or find. Each game is a unique adventure that turns everyday activities into exciting treasure hunts.",        },
        {
          question: "How does the Bingo mode work?",
          answer:
            "In Bingo mode, each player receives a personalized card with the items they've added. During the game, players search for and mark the items on their cards. The first to complete a line (horizontal) partially wins and th first to achieve a full Bingo wins.",
        },
        {
          question: "Can I play 'Like This' with friends and family?",
          answer:
            "Yes! 'Like This' is designed to be enjoyed both solo and with others. You can compete with friends and family to see who can complete the game first.",
        },
        {
          question: "What kind of items can I add in the game?",
          answer:
            "We offer a 30-day return policy for unused and unopened items. If you are not satisfied with your purchase, please contact our customer support team to initiate a return. Refunds will be processed within 7-10 business days after we receive the returned item.",
        },
         {
           question: "Is the app free?",
           answer:
             "'Like This' is free to use, with in-app purchase options for additional features and exclusive content.",
         },
           {
             question: "How can I report a problem or give feedback?",
             answer:
               "To report problems or give feedback, you can use the support section within the app or email us at info@yapplic. We love hearing your suggestions and working to improve the 'Like This' experience.",
           },
      ],
    },
    header: {
      headline: "Like This: Where Creativity Meets Adventure!",
      subtitle:
        "Turning Everyday Moments into Exciting Challenges. Unleash Your Imagination and Have Fun!",
      screenshots: [
        "/screenshots/3.webp",
        "/screenshots/2.webp",
        "/screenshots/1.webp",
      ],
//       rewards: ["App of the year \n 1st", "Product of the day"],
      usersDescription: "100+ people already using the app",
      headlineMark: [1, 3],
    },
    pricing: {
      id: "pricing",
      title: "Pricing",
      subtitle: "Free to use",
      actionText: "Download the app",
      plans: [
        {
          title: "Free Plan",
          price: "Free",
          rows: ["Access all types of games"],
        },
        {
          title: "Pro",
          price: "5.99€/month",
          featured: true,
          rows: [
            "Limitless games",
            "Extra functionalities",
            "Remove Ads",
          ],
        },
        {
          title: "Premium Plan",
          price: "22.99€/month",
          rows: [
            "Customized UI Games",
            "Public Games",
            "Personalized App",
            "Exclusive content",
          ],
        },
      ],
    },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Like This",
      description: "Privacy Policy",
    },
    content: `# Privacy Policy

**Effective Date:** 17/12/2024

## Introduction

This privacy policy applies to the Someone Like You app (hereby referred to as "Application") for mobile devices that was created by Jordi (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".


Information Collection and Use

The Application collects information when you download and use it. This information may include information such as

Your device's Internet Protocol address (e.g. IP address)
The pages of the Application that you visit, the time and date of your visit, the time spent on those pages
The time spent on the Application
The operating system you use on your mobile device






The Application does not gather precise information about the location of your mobile device.

The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:

Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.
Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.
Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.




The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.




For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.


Third Party Access

Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.




Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:

Google Play Services
AdMob
Google Analytics for Firebase
Firebase Crashlytics




The Service Provider may disclose User Provided and Automatically Collected Information:

as required by law, such as to comply with a subpoena, or similar legal process;
when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;
with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.




Opt-Out Rights

You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.


Data Retention Policy

The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at info@yapplic.com and they will respond in a reasonable time.


Children

The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.




The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (info@yapplic.com) so that they will be able to take the necessary actions.


Security

The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.


Changes

This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.




This privacy policy is effective as of 2024-09-25


Your Consent

By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.


Contact Us

If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at info@yapplic.com.

This privacy policy page was generated by App Privacy Policy Generator

`,
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Mobile App Landing Template",
      description: "Cookies Policy",
    },
    content: `# Cookies Policy

**Effective Date:** 17/12/2024

## Introduction

This Cookies Policy explains how Yapplic ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our app, Like This (the "App"). It explains what these technologies are and why we use them, as well as your rights to control their use.

## What Are Cookies?

Cookies are small data files that are placed on your device when you visit a website or use an app. Cookies are widely used by online service providers to facilitate and help to make the interaction between users and websites/apps faster and easier, as well as to provide reporting information.

### Types of Cookies We Use

We use the following types of cookies in our App:

1. **Strictly Necessary Cookies:**  
   These cookies are essential for you to use some of the features of our App. Without these cookies, some services cannot be provided.

2. **Performance and Analytics Cookies:**  
   These cookies collect information about how users interact with our App, including which pages are visited most often. We use this information to improve how our App works.

3. **Functionality Cookies:**  
   These cookies allow our App to remember choices you make when you use the App, such as remembering your login details or language preference.

4. **Targeting and Advertising Cookies:**  
   These cookies are used to deliver advertisements that are relevant to you. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.

### Cookies From Third Parties

In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the App and to deliver advertisements on and through the App.

## How We Use Cookies

We use cookies to:

- **Remember your login details and preferences.**
- **Analyze usage patterns and improve the functionality of our App.**
- **Deliver relevant content and advertisements.**
- **Understand your preferences based on previous or current App activity.**

## Your Choices Regarding Cookies

You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your browser. Most browsers allow you to:

- **View what cookies are stored on your device and delete them individually.**
- **Block third-party cookies.**
- **Block cookies from particular websites.**
- **Block all cookies from being set.**
- **Delete all cookies when you close your browser.**

Please note that if you block or delete cookies, some features of the App may not function properly.

## Changes to This Cookies Policy

We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Cookies Policy.

## Contact Us

If you have any questions or concerns about our use of cookies, please contact us at:

Yapplic
Jordi Toda
info@yapplic.com
`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and conditions - Mobile App Landing Template",
      description: "Terms and conditions",
    },
    content: `# Terms and Conditions

**Effective Date:** 17/12/2024

## Introduction

Welcome to Like This (the "App"). These Terms and Conditions ("Terms") govern your use of the App provided by Yapplic ("we," "our," or "us"). By accessing or using our App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.

## Use of the App

### 1. Eligibility
To use our App, you must be at least [Insert Age] years old and capable of entering into a legally binding agreement. By using the App, you represent and warrant that you meet these eligibility requirements.

### 2. User Accounts
- **Registration:** You may be required to create an account to access certain features of the App. You must provide accurate and complete information when creating your account.
- **Account Security:** You are responsible for maintaining the confidentiality of your account login details and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
- **Account Termination:** We reserve the right to terminate or suspend your account at any time, without notice, for any reason, including if we believe you have violated these Terms.

### 3. Prohibited Conduct
You agree not to:
- Use the App for any illegal or unauthorized purpose.
- Interfere with or disrupt the operation of the App or the servers or networks used to make the App available.
- Upload or transmit any viruses, malware, or other harmful code.
- Attempt to gain unauthorized access to any part of the App or to other accounts, systems, or networks connected to the App.

## Intellectual Property

### 1. Ownership
All content and materials available on the App, including but not limited to text, graphics, logos, and software, are the property of [Your Company Name] or its licensors and are protected by intellectual property laws.

### 2. License
We grant you a limited, non-exclusive, non-transferable license to access and use the App for your personal, non-commercial use. This license is subject to your compliance with these Terms.

### 3. Restrictions
You may not:
- Reproduce, distribute, modify, or create derivative works of any content or materials on the App without our prior written consent.
- Use any data mining, robots, or similar data gathering or extraction methods on the App.

## Disclaimers and Limitation of Liability

### 1. Disclaimers
The App is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the content available on or through the App. We disclaim all warranties, whether express or implied, including any warranties of merchantability, fitness for a particular purpose, and non-infringement.

### 2. Limitation of Liability
To the fullest extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
- Your use or inability to use the App;
- Any unauthorized access to or use of our servers and/or any personal information stored therein;
- Any bugs, viruses, or other harmful code that may be transmitted to or through the App;
- Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the App.

## Indemnification

You agree to indemnify, defend, and hold harmless [Your Company Name], its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the App or your violation of these Terms.

## Governing Law

These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in [Your Jurisdiction] to resolve any legal matter arising from these Terms.

## Changes to These Terms

We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Terms.

## Contact Us

If you have any questions or concerns about these Terms, please contact us at:

Yapplic
Jordi Toda
info@yapplic.com
`,
  },
};

export default templateConfig;
