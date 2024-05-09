export const CONTACT_DATA: {
  [key: string]: { imgUrl?: string; isLink?: boolean; baseUrl?: string };
} = {
  phone: {
    imgUrl: "/phone.png",
  },
  email: {
    isLink: true,
    baseUrl: "mailto:",
    imgUrl: "/email.png",
  },
  homepage: {
    isLink: true,
    baseUrl: "https://",
    imgUrl: "/homepage.png",
  },
  github: {
    isLink: true,
    baseUrl: "https://github.com/",
    imgUrl: "/github.png",
  },
  gitlab: {
    isLink: true,
    baseUrl: "https://gitlab.com/",
  },
  stackoverflow: {
    isLink: true,
    baseUrl: "https://stackoverflow.com/users/",
  },
  linkedin: {
    isLink: true,
    baseUrl: "https://www.linkedin.com/in/",
  },
  x: {
    isLink: true,
    baseUrl: "https://x.com/",
  },
  reddit: {
    isLink: true,
    baseUrl: "https://www.reddit.com/user/",
  },
};
