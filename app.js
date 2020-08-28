const svgtofont = require("svgtofont");
const path = require("path");
const pkg = require("./package.json");

svgtofont({
  src: path.resolve(process.cwd(), "./svgs"), // svg path
  dist: path.resolve(process.cwd(), "./fonts"), // output path
  fontName: "beefont", // font name
  css: true, // Create CSS files.
  startNumber: 20000, // unicode start number
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
  website: {
    template: path.join(process.cwd(), "template.ejs"),
    title: "Bee Font",
    // Must be a .svg format image.
    logo: path.resolve(process.cwd(), "./svgs", "beehively.svg"),
    version: pkg.version,
    meta: {
      description: "Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.",
      keywords: "svgtofont,TTF,EOT,WOFF,WOFF2,SVG",
    },
    description: ``,
    // Add a Github corner to your website
    // Like: https://github.com/uiwjs/react-github-corners
    corners: {
      url: "https://github.com/jaywcjlove/svgtofont",
      width: 62, // default: 60
      height: 62, // default: 60
      bgColor: "#dc3545", // default: '#151513'
    },
    links: [
      {
        title: "GitHub",
        url: "https://github.com/jaywcjlove/svgtofont",
      },
      {
        title: "Feedback",
        url: "https://github.com/jaywcjlove/svgtofont/issues",
      },
      {
        title: "Font Class",
        url: "index.html",
      },
      {
        title: "Unicode",
        url: "unicode.html",
      },
    ],
    footerInfo: `Licensed under MIT. (Yes it's free and <a href="https://github.com/jaywcjlove/svgtofont">open-sourced</a>`,
  },
}).then(() => {
  console.log("done!");
});
