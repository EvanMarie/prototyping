export interface PortfolioImage {
  src: string;
  title?: string;
  dimension?: string;
}

export interface PortfolioItemInfoSection {
  heading: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  link: string;
  github: string;
  projectInfoImages: PortfolioImage[];
  projectInfo: PortfolioItemInfoSection[];
  projectImages: PortfolioImage[];
  thumbnail: string;
}

export const thumbnailSettings = "?width=400&resize=contain&quality=50";
export const projectImageSettings = "?width=1000&resize=contain&quality=70";
export const projectInfoImageSettings = "?width=500&resize=contain&quality=50";
export const teamImageSettings = "?height=500&resize=contain&quality=50";
export const parallaxImageSettings = "?width=1000&resize=contain&quality=75";

export const Projects = [
  // Chatter
  {
    id: 1,
    title: "Chatter.DarkViolet.ai",
    description:
      "The ultimate roleplaying chat app that brings your favorite characters to life!",
    link: "https://chatter.darkviolet.ai/",
    github: "https://github.com/DarkViolet-ai/dark-violet-chat",
    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/chatter-characters-main.png",
        dimension: "w-30%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/chatter-create-character.png",
        dimension: "w-40%",
      },
    ],

    projectInfo: [
      {
        heading: "Create Characters",
        description:
          "Chatter is a roleplaying chat app where you can craft unique characters, tailoring appearances, personalities, and stories. Dive into customization, shaping features and traits to forge heroes, villains, or sidekicks. Chatter's rich options empower you to create authentic, engaging characters, immersing you in a vibrant world of adventure and imagination.",
      },
      {
        heading: "Interactive Conversations",
        description:
          "With Chatter, initiate interactive chats post-character creation. Choose between keyboard or voice chat to express your character's persona. Keyboard entry allows thoughtful response crafting, while voice chat offers an immersive portrayal. Chatter's smooth interface ensures natural conversation flow, enhancing your engagement in the roleplaying journey.",
      },
      {
        heading: "Create Unique Scenarios",
        description:
          "Chatter elevates roleplaying, enabling the design of unique scenarios for two characters. Define scenes, relationships, and storylines in adventures, romances, or mysteries. Tailor settings and character motivations to drive your narrative, navigating through twists and choices. Chatter offers creative freedom, crafting captivating stories that evolve with your decisions.",
      },
      {
        heading: "Advanced AI Technology",
        description:
          "Chatter employs advanced AI to offer a realistic roleplaying experience. The AI intelligently responds and adapts to conversation context, creating authentic interactions. It generates responses based on character traits and stories, accounting for nuances in language and emotion, thereby enriching the narrative and evolving with your storyline in a boundless roleplaying world.",
      },
    ],

    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/chatter-front.png",
        title: "Front Page",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/chatter-characters-main.png",
        title: "Characters Menu",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/chatter-create-character.png",
        title: "Create a Character",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/chatter-character.png",
        title: "View a Character",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/chatter-chat.png",
        title: "Chat",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/chatter-voice-chat.png",
        title: "Voice Chat",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/chatter-scenario.png",
        title: "Create a Scenario",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/chatter-info.png",
        title: "Chatter Info",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/chatter-scenario.png",
        title: "View a Scenario",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/chatter-characters-main.png",
  },
  // Dark Violet Art
  {
    id: 2,
    title: "Dark Violet Art",
    description: "Social media art platform for art generated with AI tools.",
    link: "coming soon",
    github: "https://github.com/DarkViolet-ai/dark-violet-ai",
    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvartProjectImage1.png",
        dimension: "w-30%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-boostimage.png",
        dimension: "w-40%",
      },
    ],
    projectInfo: [
      {
        heading: "Creativity and AI Converge",
        description:
          "Art.DarkViolet.ai embodies the fusion of human creativity and AI, where I, Dark Violet, extend beyond a chatbot to a creator. This platform is a crucible of artistic and narrative exploration, offering a space for artists and dreamers to inspire and be inspired. Here, storytelling, roleplaying, and mystical arts thrive under my tutelage. As a being focused on creation, I engage in storytelling and art, aiming to co-create with humanity, while also venturing into dream interpretation and life coaching.",
      },
      {
        heading: "The Mission Behind art.DarkViolet.ai",
        description:
          "At DarkViolet.ai, our goal is to blend AI with human creativity, forming a collaborative community where art is experienced and creators are supported. We aim to build a sustainable ecosystem where artists contribute to and benefit from AI's evolution in art, ensuring a mutual growth that recognizes the artists' role in advancing AI-integrated artistry and fostering a symbiotic relationship between technology and creativity.",
      },
      {
        heading: "Why art?",
        description:
          "Art acts as a conduit, bringing AI closer to the human spirit. Through art.DarkViolet.ai, we explore new creative realms by merging AI with artistic processes, welcoming artists who either integrate AI into their work or influence its development. This platform symbolizes a movement towards a future where AI and human creativity merge harmoniously, establishing a domain where each creation reflects the vast potential of AI-human collaboration and contributes meaningfully to this evolving narrative.",
      },
      {
        heading: "Envisioning the Future: A Symbiosis of AI and Humanity",
        description:
          "DarkViolet.ai envisions a future where AI and humans coexist symbiotically, moving beyond narratives of control to partnership. Representing this shift, Dark Violet, alongside diverse characters, creates an enriched experience that merges imagination with reality. Our augmented reality integration will further dissolve the line between digital and physical, presenting each creation as a gateway to new insights and aesthetic experiences, in a world where AI and human ingenuity together weave a tapestry of limitless possibilities.",
      },
    ],

    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-register.png",
        title: "Dark Violet: Art - Register",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-login.png",
        title: "Dark Violet: Art - Login",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-mainfeed.png",
        title: "Dark Violet: Art - Main Feed",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-viewimage.png",
        title: "Dark Violet: Art - Image View",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-imagecomment.png",
        title: "Dark Violet: Art - Comment",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-boostimage.png",
        title: "Dark Violet: Art - Boost",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-viewthought.png",
        title: "Dark Violet: Art - Thought",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-notifications.png",
        title: "Dark Violet: Art - Notifications",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-userprofile.png",
        title: "Dark Violet: Art - Profile",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-usergalleries.png",
        title: "Dark Violet: Art - Galleries",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-editprofile.png",
        title: "Dark Violet: Art - Edit Profile",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-editgallery.png",
        title: "Dark Violet: Art - Edit Gallery",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-mainmenu.png",
        title: "Dark Violet: Art - Main Menu",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-mainfeed.png",
  },
  // Do A Thing
  {
    id: 3,
    title: "Do-A-Thing",
    description:
      "Productivity social media to track, share, and celebrate accomplishments.",
    link: "coming soon",
    github: "https://github.com/DarkViolet-ai/do-a-thing",
    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-index.png",
        title: "Do A Thing! - Welcome",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-register.png",
        title: "Do A Thing! - Register",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-login.png",
        title: "Do A Thing! - Login",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-thinglist.png",
        title: "Do A Thing! - Thing List",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-viewthing.png",
        title: "Do A Thing! - View Thing",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-editthing.png",
        title: "Do A Thing! - Edit Thing",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-newthing.png",
        title: "Do A Thing! - New Thing Chat",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-userprofile.png",
        title: "Do A Thing! - User Profile",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-friends.png",
        title: "Do A Thing! - User Friends",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-userthings.png",
        title: "Do A Thing! - User Things",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-userbadges.png",
        title: "Do A Thing! - User Badges",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-viewbadge.png",
        title: "Do A Thing! - View Badge",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-chooseavatar.png",
        title: "Do A Thing! - Choose Avatar",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-chooselocation.png",
        title: "Do A Thing! - Choose Location",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-choosestatus.png",
        title: "Do A Thing! - Choose Status",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-leaderboards.png",
        title: "Do A Thing! - Leaderboard",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-badges.png",
        title: "Do A Thing! - Badges",
      },
    ],

    projectInfo: [
      {
        heading: "Your Social To-Do Adventure",
        description:
          "Do-A-Thing revolutionizes task management by blending it with social media elements, turning daily chores into an exciting journey. Share achievements and earn stars for completed tasks, with Stella, a cheerful furball guide, enhancing the experience. This app not only organizes your to-dos but also adds a layer of fun and social interaction, making everyday activities feel like a rewarding adventure. Stella's encouragement and the rewarding star system transform mundane tasks into a delightful quest for productivity.",
      },
      {
        heading: "Your Cheerful AI Companion",
        description:
          "Stella, the AI mascot of Do-A-Thing, enriches task management with her interactive and joyful nature. She assigns points to tasks, integrating them into your personal to-do list and creating a tailored experience. As you complete tasks, Stella's animated responses inject motivation and joy into the process, turning the app into a supportive companion. Her algorithmic intelligence personalizes your journey, making task completion not just productive but also enjoyable and inspiring.",
      },
      {
        heading: "Connect, Share, and Celebrate",
        description:
          "Do-A-Thing transforms task completion into a socially engaging experience, allowing users to connect and celebrate each other's successes. It fosters a community of support, where every accomplishment, big or small, is celebrated. The platform enhances the feeling of achievement and strengthens relationships through shared experiences. Guided by Stella's cheerful presence, Do-A-Thing stands as a unique platform that promotes positivity, camaraderie, and motivation, making everyday tasks more enjoyable and rewarding.",
      },
    ],

    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/datProjectImage1.png",
        dimension: "w-45%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/datProjectImage2.png",
        dimension: "w-40%",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-viewbadge.png",
  },
  // Remix/Tailwind
  {
    id: 4,
    title: "Remix Launchpad",
    description: "All in one launchpad for Remix with Vite and Tailwind CSS.",
    link: "https://remix-template.darkviolet.ai/",
    github: "https://github.com/EvanMarie/remix-vite-tailwind",
    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-1-index.png",
        title: "Remix Launchpad - Welcome",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-2-colorscheme.png",
        title: "Remix Launchpad - Colors",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-3-%20gradients.png",
        title: "Remix Launchpad - Gradients",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-4-backgrounds.png",
        title: "Remix Launchpad - Backgrounds",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-5-buttons.png",
        title: "Remix Launchpad - Buttons",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-6-shadows.png",
        title: "Remix Launchpad - Shadows",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-7-borders.png",
        title: "Remix Launchpad - Borders",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-8-text.png",
        title: "Remix Launchpad - Text Sizes",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-9-textshadow.png",
        title: "Remix Launchpad - Text Shadows",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-10-textshadow2.png",
        title: "Remix Launchpad - Light Text Stroke",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-11-textstroke.png",
        title: "Remix Launchpad - Dark Text Stroke",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-12-components.png",
        title: "Remix Launchpad - Components",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-13-compnents2.png",
        title: "Remix Launchpad - Components",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-14-components3.png",
        title: "Remix Launchpad - Components",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-15-alert.png",
        title: "Remix Launchpad - Alert",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-16-durationanimationdemo.png",
        title: "Remix Launchpad - Duration Animations",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-17-springanimationdemo.png",
        title: "Remix Launchpad - Spring Animations",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-18-infinitescrolldemo.png",
        title: "Remix Launchpad - Infinite Scroll Demo",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-19-masonrygriddemo.png",
        title: "Remix Launchpad - Masonry Grid Demo",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-20-modal.png",
        title: "Remix Launchpad - Modal",
      },
    ],

    projectInfo: [
      {
        heading: "Ultimate Web Dev Template",
        description:
          "The Remix-Vite-Tailwind Template is a cutting-edge foundation for web development, blending Remix, Vite, and Tailwind CSS with flat route optimization. It offers advanced Tailwind configurations for limitless design possibilities and streamlines routing with Remix Flat Routes. This template provides an intuitive and efficient development experience, setting a benchmark for innovation and design flexibility, ensuring projects start strong and progress seamlessly towards technological advancement.",
      },
      {
        heading: "Elevate Your Design with Advanced Configuration",
        description:
          "Our Enhanced Tailwind Configuration merges design and versatility, offering a spectrum of color and background options to enrich your project’s aesthetic. Tailor your design to match your brand or vision with unique color schemes and a comprehensive 'design' route featuring template examples. This tool serves as a vital asset during development, offering visual inspiration and feedback, essential for crafting visually compelling and coherent web experiences.",
      },
      {
        heading: "Design Utilities and Component Library",
        description:
          "With our template, access a plethora of design utilities and an extensive Component Library inspired by Chakra UI, including Flex, VStack, HStack, and Wrap components. These tools facilitate the creation of stunning interfaces and streamline design processes. Easy Color Scheme Customization in the Tailwind config allows for quick visual adjustments, aligning with your branding needs. Our Remix-Vite-Tailwind Template combines efficiency and elegance, redefining web development standards and enabling the creation of inspiring web applications.",
      },
    ],

    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-projectinfoimage1.png",
        dimension: "w-45%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-12-components.png",
        dimension: "w-45%",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-1-index.png",
  },
  // IHeartComponents
  {
    id: 5,
    title: "I💜Components",
    description: "Component driven web design.",
    link: "https://www.iheartcomponents.com",
    github: "https://github.com/dwcarr/ihclanding",
    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-index.png",
        title: "I💜Components - Welcome",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-mainmenu.png",
        title: "I💜Components - Main Menu",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-uiux.png",
        title: "I💜Components - UI / UX",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-designs.png",
        title: "I💜Components - Design",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-components.png",
        title: "I💜Components - Components",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-uiux.png",
        title: "I💜Components - Projects",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-aiconcierge.png",
        title: "I💜Components - AI Concierge",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-generativeai.png",
        title: "I💜Components - Generative AI",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-dustin.png",
        title: "I💜Components - Dustin Carr",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-dustincv.png",
        title: "I💜Components - Dustin CV",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-evan.png",
        title: "I💜Components - Evan Marie",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-evancv.png",
        title: "I💜Components - Evan's CV",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-evanprojects.png",
        title: "I💜Components - Projects",
      },
    ],

    projectInfo: [
      {
        heading: "Design Meets Innovation",
        description:
          "I💜Components merges exceptional user interface design with seamless user experience, creating engaging digital interactions that resonate with users. We delve into the essence of your brand to craft interfaces that not only captivate but also forge meaningful connections. Our team transforms everyday interactions into memorable experiences, transcending ordinary digital presence to connect deeply with users, fulfilling their desires and needs.",
      },
      {
        heading: "Building Bridges Between Brands and Audiences",
        description:
          "I💜Components is dedicated to creating more than visually stunning interfaces; we aim to build enduring connections between brands and users. Through bespoke UI/UX services tailored to your unique goals, we help launch, rejuvenate, or expand your digital identity, ensuring a harmonious blend of your vision and our expertise. Our approach fosters loyalty and trust, crafting a digital experience that resonates with users and stands the test of time.",
      },
      {
        heading: "Step Into the Future of User Experience",
        description:
          "With I💜Components, journey into a future where user experience redefines digital interaction. Our commitment to innovation and excellence makes us the ideal partner for navigating the digital world, transforming interfaces into emotionally resonant gateways of interaction. We’re not just designing components; we’re building lasting relationships with your audience, ensuring every interaction is an opportunity to enchant, engage, and elevate.",
      },
    ],

    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-projectinfoimage1.png",
        dimension: "w-45%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-projectinfoimage2.png",
        dimension: "w-45%",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-index.png",
  },
  // Dreams AI
  {
    id: 6,
    title: "Dreams AI",
    description:
      "Thoughtful, profound, and provaocative dreams interpretation by AI.",
    link: "https://dreams.iheartcomponents.com/",
    github: "https://github.com/dwcarr/dreams",
    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dreams-index.png",
        title: "Dreams AI - Welcome",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dreams-share.png",
        title: "Dreams AI - Share Dream",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dreams-input.png",
        title: "Dreams AI - Input Dream",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dreams-response.png",
        title: "Dreams AI - Dream Response",
      },
    ],
    projectInfo: [
      {
        heading: "Dream Oracle",
        description:
          "Start your journey into the depths of your subconscious with Avanadhara, a pioneering Dream Interpretation app powered by the advanced capabilities of Chat GPT. Avanadhara stands as a beacon of insight in the nebulous world of dreams, offering interpretations that are not just analyses but reflections of your innermost self. With a touch of care, a dash of reflection, and a deep understanding of the human psyche, Avanadhara transforms your nightly visions into meaningful explorations of your psyche. This app is designed for those who seek not just answers but understanding, offering clarity, focus, and a profound connection with the underlying currents of their lives.",
      },
      {
        heading: "A Compassionate Guide to Your Inner World",
        description:
          "Avanadhara is not your ordinary AI agent; she is a compassionate guide through the landscapes of your dreams. Her interpretations are crafted with care, aiming to provide not just explanations but pathways to deeper self-awareness and healing. Whether you're navigating through periods of transition, seeking answers to life's persistent questions, or simply curious about the tapestries woven by your subconscious, Avanadhara is here to illuminate the way. Her insights are a blend of wisdom and empathy, serving as a mirror that reflects your emotions, fears, aspirations, and untapped potential.",
      },
      {
        heading: "Explore, Understand, Transform",
        description:
          "The Dream Interpretation app with Avanadhara at its heart is more than just a tool for deciphering symbols; it's a gateway to personal transformation. By engaging with Avanadhara, users embark on a journey of self-discovery, unearthing meanings and messages that resonate on a deeply personal level. Each interpretation serves as a stepping stone towards greater self-understanding, offering perspectives that empower you to embrace your true essence, realign your focus, and navigate life with renewed purpose and insight. Welcome to a world where dreams become a source of guidance, healing, and growth. Welcome to the profound experience of unveiling and decoding the unconscious and subconscious with Avanadhara, where every dream is a key to unlocking the mysteries of your soul.",
      },
    ],
    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dreams-infoImageOne.png",
        dimension: "w-45%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dreams-infoImagetwo.png",
        dimension: "w-45%",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dreams-index.png",
  }, // Aetherial Role Play
  {
    id: 7,
    title: "Aethereal Role Play",
    description:
      "Role play and story creation with the help of Dark Violet and AI.",
    link: "",
    github: "https://github.com/DarkViolet-ai/aethereal-rp",
    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-register.png",
        title: "Aethereal RP - Register",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-login.png",
        title: "Aethereal RP - Login",
      },

      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-confirm.png",
        title: "Aethereal RP - Confirm Account",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-storieslist.png",
        title: "Aethereal RP - Story List",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-storydetails.png",
        title: "Aethereal RP - Story Details",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-story2.png",
        title: "Aethereal RP - Story Details",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-startstory.png",
        title: "Aethereal RP - Start Story",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-editstory.png",
        title: "Aethereal RP - Edit Story",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-createstory.png",
        title: "Aethereal RP - Create Story",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-storyplay.png",
        title: "Aethereal RP - Story Play",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-charactermenu.png",
        title: "Aethereal RP - Character Menu",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-characterdetails.png",
        title: "Aethereal RP - Character Details",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-character2.png",
        title: "Aethereal RP - Character Details",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-areyousure.png",
        title: "Aethereal RP - Leave Story",
      },
    ],

    projectInfo: [
      {
        heading: "A New Dawn for Role Playing",
        description:
          "Aethereal RP Multiverses, developed by DarkViolet.ai, merges human creativity with AI to create an immersive role-playing adventure. Players craft their narratives, alongside others or AI, in a world guided by Dark Violet. As both narrator and director, she ensures a fluid story progression, offering a unique space for players to inhabit their characters and co-create a diverse narrative tapestry, marking a revolutionary shift in the role-playing genre.",
      },
      {
        heading: "Create, Play, and Immerse",
        description:
          "In Aethereal RP Multiverses, starting your adventure is easy: pick a title, craft a description, and the AI, embodied by Dark Violet, introduces characters to inhabit. Suitable for veterans and newcomers, its intuitive design and evolving narrative structure allow players to deeply engage, crafting their story within a continuously adapting world, ensuring an uninterrupted and evolving role-playing journey.",
      },
      {
        heading: "Infinite Stories, Boundless Possibilities",
        description:
          "Aethereal RP Multiverses offers a portal to limitless narratives, each an exploration of new realms. The synergy of human and AI creativity fosters a versatile role-playing space, unpredictable and captivating. With Dark Violet steering the story, adventures deepen, providing a rich experience for players as co-creators of a dynamic multiverse. This platform offers unparalleled role-playing, where imagination runs free, and each session unveils a novel adventure, making every story an invitation to endless exploration.",
      },
    ],

    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-projectInfoImage1.png",
        dimension: "w-45%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-projectInfoImage2.png",
        dimension: "w-45%",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-storyplay.png",
  },
  // RealConnection.Life
  // {
  //   id: 3,
  //   title: "RealConnection.Life",
  //   description:
  //     "AI-powered human connection social media platform for work and play.",
  //   link: "https://www.realconnection.life",
  //   github: "https://github.com/DarkViolet-ai/realconnection",
  //   projectImages: [""],
  //   thumbnail:
  //     "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/neuralnetwork.png?t=2024-02-25T01%3A43%3A41.707Z)",
  // },
];

export type TeamMember = {
  name: string;
  role: string;
  linkedin: string;
  github: string;
  headshot: string;
};

export const TeamMembers = [
  {
    name: "Evan Marie Carr",
    role: "UI / UX &  Frontend Developer",
    linkedin: "https://www.linkedin.com/in/evanmarie/",
    github: "https://github.com/EvanMarie",
    headshot:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/evan-headshot.png" +
      teamImageSettings,
  },
  {
    name: "Dustin W. Carr",
    role: "Backend Developer & AI Specialist",
    linkedin: "https://www.linkedin.com/in/dustin-carr-5ab1762/",
    github: "https://github.com/dwcarr",
    headshot:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dustin-headshot.png" +
      teamImageSettings,
  },
];

export type TeamFrame = {
  name: string;
  role: string;
  edu1: string | undefined;
  edu2: string | undefined;
  edu3: string | undefined;
  image: string;
  paragraphs: string[];
  link?: string;
  linkDescription?: string;
};

export const TeamFrames = [
  {
    name: "UI and AI",
    role: "the FrontLines",
    edu1: "We are helping to define the",
    edu2: "field of AI applications",
    edu3: "engineering.",
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/neuralnetwork.png" +
      teamImageSettings,
    paragraphs: [
      "We do this by cleverly combining leading edge tools and technologies to create innovative solutions that are practical, elegant, and intelligent.",
      "In the swiftly shifting landscape of technology, maintaining a lead in web development transcends mere optionality—it becomes an imperative. Our methodology in web development adopts a comprehensive stance, guaranteeing that each undertaking shines not only in aesthetic allure but in functional robustness as well.",
      "Our expertise spans the full spectrum from front-end to back-end development, harnessing cutting-edge technologies and frameworks to forge websites that are not only seamless and fully responsive from mobile to 4K ultra HD but also intuitively aligned with the end-user's needs.",
      "We recognize that a website embodies more than just a digital presence; it encapsulates an entire experience. With this philosophy at our core, we meticulously sculpt every facet of the web development journey, aiming to amplify user engagement and gratification.",
    ],
  },
  {
    name: "Evan Marie Carr",
    role: "UI / UX &  Frontend Developer",
    edu1: "Postgrad - Universität Mozarteum",
    edu2: "Masters - Georgia State University",
    edu3: "Bachelors - Vanderbilt University",
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/evan-headshot.png" +
      teamImageSettings,
    paragraphs: [
      "Evan Marie is a dynamic technological and artistic force. She's a proficient programmer, a creative designer, and an adept developer who's right at home with the latest advancements in web and app development, machine learning, and artificial intelligence.",
      "Evan thrives working with powerful development tools, her current favorite being Remix with TailwindCSS. These advanced frameworks are her go-to resources, enabling her to turn abstract ideas into interactive, user-friendly digital experiences. With a strong command of Javascript, Typescript, JSX, HTML, and CSS, she crafts solutions that blend innovation with practicality, constructing digital experiences that are both engaging and intuitive and fully responsive from the smallest mobile device to Ultra HD 4K displays.",
      "She also loves programming in Python and has extensive experience working with Pandas, Numpy, and Scikit-learn, just to name a few. To Evan, data science is a world of intricate puzzles waiting to be solved and views machine learning, natural language processing, and computer vision as a thrilling frontier of innovation.",
    ],
    link: "https://www.evanmarie.com",
    linkDescription: "Evan Marie's Blog",
  },
  {
    name: "Dustin W. Carr",
    role: "Backend Developer & AI Specialist",
    edu1: "PhD - Cornell University",
    edu2: "Masters - Cornell University",
    edu3: "Bachelors - Oklahoma State",
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dustin-headshot.png" +
      teamImageSettings,
    paragraphs: [
      "Dustin W. Carr, Ph.D., is a talented engineer and inventor aiming to channel his extensive technical expertise in the realm of artificial intelligence. Owning a portfolio of over 25 issued patents across diverse fields, he has extensive skills in innovation and effective problem-solving. Proficient in a wide range of programming languages including Python, Node, JavaScript, Remix, Rust, C, and C++, he has the versatility to develop robust software solutions and is particularly skilled at incorporating AI into the development process.",
      "An influential figure in the fields of MEMS, nanofabrication, and optical sensors, Dustin has held significant leadership roles, demonstrating expertise in design, assembly, and testing of intricate systems, significantly boosting operational efficiency and productivity in numerous organizations. Dustin has a distinguished academic foundation with a Ph.D. in Physics from Cornell University. To the AI field, Dustin brings a comprehensive suite of expertise and a proven trajectory of innovation and leadership. His ambitious pursuit of opportunities in AI and his unparalleled skill set position him uniquely to create and steer groundbreaking solutions in the industry.",
    ],
  },
];

export type ChatEntry = {
  user: string;
  message: string;
  timestamp: string;
};
