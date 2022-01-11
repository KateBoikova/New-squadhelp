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
  PHONE_NUMBER: `(877) 355-3585`,
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
        { title: 'BEAUTY', link: '*' },
        { title: 'CONSULTING', link: '*' },
        { title: 'E-COMMERCE', link: '*' },
        { title: 'FASHION & CLOTHING', link: '*' },
        { title: 'FINANCE', link: '*' },
        { title: 'ESTATE', link: '*' },
        { title: 'TECH', link: '*' },
        { title: 'MORE CATEGORIES', link: '*' },
      ],
    },
    {
      title: 'CONSTESTS',
      items: [
        { title: 'HOW IT WORKS', link: '/howitworks' },
        { title: 'PRICING', link: '*' },
        { title: 'AGENCY SERVICE', link: '*' },
        { title: 'ACTIVE CONTESTS', link: '*' },
        { title: 'WINNERS', link: '*' },
        { title: 'LEADERBOARD', link: '*' },
        { title: 'BECOME A CREATIVE', link: '*' },
      ],
    },
    {
      title: 'OUR WORK',
      items: [
        { title: 'NAMES', link: '*' },
        { title: 'TAGLINES', link: '*' },
        { title: 'LOGOS', link: '*' },
        { title: 'TESTIMONIALS', link: '*' },
      ],
    },
    {
      title: 'NAMES FOR SALE',
      items: [
        { title: 'POPULAR NAMES', link: '*' },
        { title: 'SHORT NAMES', link: '*' },
        { title: 'INTRIGUING NAMES', link: '*' },
        { title: 'NAMES BY CATEGORY', link: '*' },
        { title: 'VISUAL NAME SEARCH', link: '*' },
        { title: 'SELL YOUR DOMAINS', link: '*' },
      ],
    },
    {
      title: 'BLOG',
      items: [
        { title: 'ULTIMATE NAMING GUIDE', link: '*' },
        { title: 'POETIC DEVICES IN BUISINESS NAMING', link: '*' },
        { title: 'CROWDED BAR THEORY', link: '*' },
        { title: 'ALL ARTICLES', link: '*' },
      ],
    },
  ],
  FooterItems: [
    {
      title: 'SQUADHELP',
      items: [
        { title: 'About', link: '*' },
        { title: 'Contact', link: '*' },
        { title: 'How It Works?', link: '/howitworks' },
        { title: 'Testimonials', link: '*' },
        { title: 'Our Work', link: '*' },
      ],
    },
    {
      title: 'RESOURCES',
      items: [
        { title: 'How It Works', link: '/howitworks' },
        { title: 'Become a Creative', link: '*' },
        { title: 'Business Name Generator', link: '*' },
        { title: 'Discussion Forum', link: '*' },
        { title: 'Blog', link: '*' },
        { title: 'Download eBook', link: '*' },
        { title: 'Pricing', link: '*' },
        { title: 'Help & FAQs', link: '*' },
      ],
    },
    {
      title: 'OUR SERVICES',
      items: [
        { title: 'Naming', link: '*' },
        { title: 'Logo Design', link: '*' },
        { title: 'Taglines', link: '*' },
        { title: 'Premium Names For Sale', link: '*' },
        { title: 'Creative Owned Names For Sale', link: '*' },
        { title: 'Audience Testing', link: '*' },
        { title: 'Trademark Research & Filling', link: '*' },
        { title: 'Managed Agency Service', link: '*' },
      ],
    },
    {
      title: 'LEGAL',
      items: [
        { title: 'Terms of Service', link: '*' },
        { title: 'Privacy Policy', link: '*' },
        { title: 'Cookie Policy', link: '*' },
      ],
    },
  ],
};
export default CONSTANTS;
