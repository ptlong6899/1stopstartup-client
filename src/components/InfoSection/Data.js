import image1 from "../../images/info.svg";
import image2 from "../../images/account.svg";
import image3 from "../../images/create-account.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Communicate",
  headline: "A free website to communicate with your college",
  description:
    "Get access to our exclusive app that allows you to send unlimited message and video call without getting charge any fees.",
  buttonLabel: "Get started",
  imgStart: false,
  img: image1,
  alt: "Mess",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Login to your account at any time",
  description:
    "We have you coverd no matter where you are located. All you need is an internet connection and a phone or computer",
  buttonLabel: "Learn More",
  imgStart: true,
  img: image2,
  alt: "sendcond img",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join us",
  headline: "Creating an account is extremely easy",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your infomation and you're ready to go",
  buttonLabel: "Start Now",
  imgStart: true,
  img: image3,
  alt: "Mess",
  dark: false,
  primary: false,
  darkText: true,
};
