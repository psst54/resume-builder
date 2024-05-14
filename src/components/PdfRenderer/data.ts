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
  GitHub: {
    isLink: true,
    baseUrl: "https://github.com/",
    imgUrl: "/github.png",
  },
  GitLab: {
    isLink: true,
    baseUrl: "https://gitlab.com/",
  },
  "Stack Overflow": {
    isLink: true,
    baseUrl: "https://stackoverflow.com/users/",
  },
  LinkedIn: {
    isLink: true,
    baseUrl: "https://www.linkedin.com/in/",
  },
  X: {
    isLink: true,
    baseUrl: "https://x.com/",
  },
  Reddit: {
    isLink: true,
    baseUrl: "https://www.reddit.com/user/",
  },
};
