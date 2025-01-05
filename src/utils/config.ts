import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Rally Hud",
  seo: {
    title: "Download Rally Hud",
    description: "Rally Hud",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/logo.png",
  theme: "corporate",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: true,
  appStoreLink: "https://apps.apple.com/us/app/rally-hud/id6739874068",
  googlePlayLink:
    "https://play.google.com/store/apps/details?id=com.stormfkrs.rally_hud",
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
    title: "Download Rally Hud Today!",
    subtitle:
      "Use it for your nocturnal driving with your project car",
    screenshots: [
      "/screenshots/1.png",
      "/screenshots/2.png",
      "/screenshots/3.png",
    ],
  },
  home: {
    seo: {
      title: "Download Rally Hud Mobile App",
      description: "Download Rally Hud Mobile App",
    },
    testimonials: {
      id: "testimonials",
      title: "Testimonials",
      subtitle: "Check out a few of our customer stories",
      cards: [
        {
          name: "Marta G.",
          comment:
            "Esta app es exactamente lo que necesitaba. El diseño es elegante y las funcionalidades son perfectas para los que nos gusta estar al tanto de todos los detalles mientras conducimos. ¡Un 10!",
        },
        {
          name: "Carlos H.",
          comment:
            "Una app muy innovadora. Es perfecta para viajes largos y para los que nos gusta tener todo bajo control en el coche. Solo echo en falta la integración con más dispositivos externos.",
        },
        {
          name: "Juan P.",
          comment:
            "Como piloto de rally, necesito una herramienta confiable y precisa para monitorizar mi rendimiento en tiempo real. Esta app de HUD ha superado todas mis expectativas. La visualización de la velocidad y las fuerzas G es esencial durante las carreras, y me permite ajustar mi conducción al instante. La interfaz es intuitiva y no distrae durante la conducción, lo cual es crucial en los tramos más complicados. ¡Altamente recomendada para cualquier apasionado del rally!",
        },
//         {
//           name: "Jose R.",
//           comment:
// "Esta app es perfecta para mantener entretenidos a mis hijos durante las salidas. Les encanta buscar los ítems que agregamos en el juego. La nueva función de Bingo añade una competencia sana y mucha diversión.",
//  },
//         {
//           name: "Laura M.",
//           comment:
// "La simplicidad y el ingenio de ‘Like This’ me han sorprendido gratamente. Crear mis propias tarjetas de Bingo con ítems originales ha sido una experiencia única. ¡Gran trabajo con esta app!",
// },
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
          title: "Give location permission",
          subtitle:
            "Give Rally Hud location permissions in order to get the velocity more precise",
          image: "/stock/02.webp",
        },
        {
          title: "Start driving",
          subtitle:
            "You can start driving and checking all the information of the journey",
          image: "/stock/03.webp",
        },
//         {
//           title: "Have fun",
//           subtitle:
//             "Play with your friends in a single game and beat them all",
//           image: "/stock/04.webp",
//         },
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
      title: "All the information you need",
      subtitle:
        "Elevate your lifestyle with our innovative mobile app, designed for seamless living",
      cards: [
        {
          title: "Speed 🎨",
          subtitle:
            "Current speed of the vehicle projected onto the windshield, allowing drivers to monitor their speed without taking their eyes off the road.",
          icon: "/3D/rocket-front-color.webp",
        },
        {
          title: "G Forces 🎲",
          subtitle:
            "real-time data on the G-forces experienced during driving, helping drivers better understand their vehicle's dynamics and performance.",
          icon: "/3D/trophy-front-color.webp",
        },
//         {
//           title: "Play and Discover 🔍",
//           subtitle:
//             "We encourage to explore your surroundings in a fun and exciting way. Every game is a unique adventure that turns everyday activities into thrilling treasure hunts.",
//           icon: "/3D/notify-heart-front-color.webp",
//         },
//         {
//           title: "Festive Experience ❄️🎄",
//           subtitle:
//             "Check the seasonal animations and themes, like the new falling snow animation, which add a magical and festive touch to the gaming experience, making every session special.",
//           icon: "/3D/gift-front-color.webp",
//         },
      ],
    },
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "What is the HUD app and how does it work?",
          answer:
            "Our HUD (Heads-Up Display) app projects crucial information such as speed and G-forces onto your car’s windshield, allowing for safer, distraction-free driving.",
            },
        {
          question: "Is the app difficult to install and set up?",
          answer:
            "No, our app is very easy to install and set up. You just need to download it from the app store and accept location permissions.",
        },
        {
          question: "What devices are compatible with the app?",
          answer:
            "The app is compatible with most smartphones running iOS and Android operating systems. Make sure you have the latest version of the OS for optimal performance.",
        },
        {
          question: "Does the app affect my smartphone's performance?",
          answer:
            "No, our app is designed to be efficient and does not significantly impact your smartphone's performance.",
        },
         {
           question: "Do I need a special windshield to use the app?",
           answer:
             "No, you can use any standard windshield. Just make sure to position your smartphone properly for a clear view.",
         },
         {
           question: "How can I report a problem or give feedback?",
           answer:
             "You can contact our technical support team through the contact form on our website or by emailing info@yapplic.com. We’re happy to help.",
         },
          {
            question: "Does the app consume a lot of mobile data?",
            answer:
              "he app uses minimal mobile data for certain functions. We recommend using a Wi-Fi connection for updates and initial setup.",
          },
      ],
    },
    header: {
      headline: "Enhance Your Driving Experience with Rally Hud",
      subtitle:
        "Real-Time Speed and G-Force Monitoring for Safer, More Informed Driving",
      screenshots: [
        "/screenshots/3.png",
        "/screenshots/2.png",
        "/screenshots/1.png",
      ],
//       rewards: ["App of the year \n 1st", "Product of the day"],
      usersDescription: "100+ people already using the app",
      headlineMark: [0, 2],
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
          rows: ["Access all gauges"],
        },
//         {
//           title: "Pro",
//           price: "5.99€/month",
//           featured: true,
//           rows: [
//             "Limitless games",
//             "Extra functionalities",
//             "Remove Ads",
//           ],
//         },
//         {
//           title: "Premium Plan",
//           price: "22.99€/month",
//           rows: [
//             "Customized UI Games",
//             "Public Games",
//             "Personalized App",
//             "Exclusive content",
//           ],
//         },
      ],
    },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Rally Hud",
      description: "Privacy Policy",
    },
    content: `**Privacy Policy**

This privacy policy applies to the Rally Hud app (hereby referred to as "Application") for mobile devices that was created by Jordi Toda (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".

**Information Collection and Use**

The Application collects information when you download and use it. This information may include information such as

*   Your device's Internet Protocol address (e.g. IP address)
*   The pages of the Application that you visit, the time and date of your visit, the time spent on those pages
*   The time spent on the Application
*   The operating system you use on your mobile device

The Application does not gather precise information about the location of your mobile device.

The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:

*   Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.
*   Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.
*   Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.

The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.

For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.

**Third Party Access**

Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.

Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:

*   [Google Play Services](https://www.google.com/policies/privacy/)
*   [Google Analytics for Firebase](https://firebase.google.com/support/privacy)
*   [Firebase Crashlytics](https://firebase.google.com/support/privacy/)

The Service Provider may disclose User Provided and Automatically Collected Information:

*   as required by law, such as to comply with a subpoena, or similar legal process;
*   when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;
*   with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.

**Opt-Out Rights**

You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.

**Data Retention Policy**

The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at info@yapplic.com and they will respond in a reasonable time.

**Children**

The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.

The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (info@yapplic.com) so that they will be able to take the necessary actions.

**Security**

The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.

**Changes**

This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.

This privacy policy is effective as of 2025-01-02

**Your Consent**

By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.

**Contact Us**

If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at info@yapplic.com.

* * *

This privacy policy page was generated by [App Privacy Policy Generator](https://app-privacy-policy-generator.nisrulz.com/)
`,
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Rally Hud",
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
      title: "Terms and conditions - Rally Hud",
      description: "Terms and conditions",
    },
    content: `**Terms & Conditions**  

These terms and conditions apply to the Rally Hud app (hereby referred to as "Application") for mobile devices that was created by Jordi Toda (hereby referred to as "Service Provider") as a Free service.

Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application. Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.

The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.

The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in the Application not functioning correctly or at all.

Please note that the Application utilizes third-party services that have their own Terms and Conditions. Below are the links to the Terms and Conditions of the third-party service providers used by the Application:

*   [Google Play Services](https://policies.google.com/terms)
*   [Google Analytics for Firebase](https://www.google.com/analytics/terms/)
*   [Firebase Crashlytics](https://firebase.google.com/terms/crashlytics)

Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.

If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.

Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.

In terms of the Service Provider's responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.

The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the application, and (if necessary) delete it from your device.

**Changes to These Terms and Conditions**

The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.

These terms and conditions are effective as of 2025-01-02

**Contact Us**

If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at info@yapplic.com.

* * *

This Terms and Conditions page was generated by [App Privacy Policy Generator](https://app-privacy-policy-generator.nisrulz.com/)
`,
  },
};

export default templateConfig;
