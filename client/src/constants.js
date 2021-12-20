const env = process.env.NODE_ENV || 'development';
const serverIP = 'localhost';
const serverPort = 5000;
const CONSTANTS = {
  CUSTOMER: 'customer',
  CREATOR: 'creator',
  CONTEST_STATUS_ACTIVE: 'active',
  CONTEST_STATUS_FINISHED: 'finished',
  CONTEST_STATUS_PENDING: 'pending',
  NAME_CONTEST: 'name',
  LOGO_CONTEST: 'logo',
  TAGLINE_CONTEST: 'tagline',
  OFFER_STATUS_REJECTED: 'rejected',
  OFFER_STATUS_WON: 'won',
  OFFER_STATUS_PENDING: 'pending',
  STATIC_IMAGES_PATH: '/staticImages/',
  ANONYM_IMAGE_PATH: '/staticImages/anonym.png',
  BASE_URL: `http://${serverIP}:${serverPort}/`,
  MOCK_HREF: 'http://www.google.com',
  ACCESS_TOKEN: 'accessToken',
  publicURL:
    env === 'production'
      ? `http://${serverIP}:80/images/`
      : `http://${serverIP}:${serverPort}/public/images/`,
  NORMAL_PREVIEW_CHAT_MODE: 'NORMAL_PREVIEW_CHAT_MODE',
  FAVORITE_PREVIEW_CHAT_MODE: 'FAVORITE_PREVIEW_CHAT_MODE',
  BLOCKED_PREVIEW_CHAT_MODE: 'BLOCKED_PREVIEW_CHAT_MODE',
  CATALOG_PREVIEW_CHAT_MODE: 'CATALOG_PREVIEW_CHAT_MODE',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
  ADD_CHAT_TO_OLD_CATALOG: 'ADD_CHAT_TO_OLD_CATALOG',
  CREATE_NEW_CATALOG_AND_ADD_CHAT: 'CREATE_NEW_CATALOG_AND_ADD_CHAT',
  USER_INFO_MODE: 'USER_INFO_MODE',
  CASHOUT_MODE: 'CASHOUT_MODE',
  HEADER_ANIMATION_TEXT: [
    'a Company',
    'a Brand',
    'a Website',
    'a Service',
    'a Book',
    'a Business',
    'an App',
    'a Product',
    'a Startup',
  ],
  NAVIGATION_ITEMS: [
    {
      title: 'NAME IDEAS',
      items: [
        'BEAUTY',
        'CONSULTING',
        'E-COMMERCE',
        'FASHION & CLOTHING',
        'FINANCE',
        'ESTATE',
        'TECH',
        'MORE CATEGORIES',
      ],
    },
    {
      title: 'CONSTESTS',
      items: [
        'HOW IT WORKS',
        'PRICING',
        'AGENCY SERVICE',
        'ACTIVE CONTESTS',
        'WINNERS',
        'LEADERBOARD',
        'BECOME A CREATIVE',
      ],
    },
    {
      title: 'OUR WORK',
      items: ['NAMES', 'TAGLINES', 'LOGOS', 'TESTIMONIALS'],
    },
    {
      title: 'NAMES FOR SALE',
      items: [
        'POPULAR NAMES',
        'SHORT NAMES',
        'INTRIGUING NAMES',
        'NAMES BY CATEGORY',
        'VISUAL NAME SEARCH',
        'SELL YOUR DOMAINS',
      ],
    },
    {
      title: 'BLOG',
      items: [
        'ULTIMATE NAMING GUIDE',
        'POETIC DEVICES IN BUISINESS NAMING',
        'CROWDED BAR THEORY',
        'ALL ARTICLES',
      ],
    },
  ],
  FooterItems: [
    {
      title: 'SQUADHELP',
      items: ['About', 'Contact', 'How It Works?', 'Testimonials', 'Our Work'],
    },
    {
      title: 'RESOURCES',
      items: [
        'How It Works',
        'Become a Creative',
        'Business Name Generator',
        'Discussion Forum',
        'Blog',
        'Download eBook',
        'Pricing',
        'Help & FAQs',
      ],
    },
    {
      title: 'OUR SERVICES',
      items: [
        'Naming',
        'Logo Design',
        'Taglines',
        'Premium Names For Sale',
        'Creative Owned Names For Sale',
        'Audience Testing',
        'Trademark Research & Filling',
        'Managed Agency Service',
      ],
    },
    {
      title: 'LEGAL',
      items: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'],
    },
  ],
};
export default CONSTANTS;
