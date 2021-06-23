# react-share

[![NPM version][npm-image]][npm-url]
[![Actions Status][ci-image]][ci-url]
[![PR Welcome][npm-downloads-image]][npm-downloads-url]

A all-in-one React library to implement custom Page Sharing Meta and Social Media Sharing Buttons.

## Introduction

Designed to use and extend [OpenGraph](https://ogp.me/) standards. Alongside, full sharing support to the following social media platforms; ... .

## Installation

Install this package with `npm`.

```bash
npm i @phntms/react-share
```

## Usage

### &lt;SharingHeadEmbed />

| Property           | Type                 | Notes                                                                                                                                                                                   |
| ------------------ | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **title**          | string               | App title. This will be shown whenever someone links your website, so make it quick, snappy and able to draw attention.                                                                 |
| **description**    | string               | A one to two sentence description of your webpage.description.                                                                                                                          |
| **keywords**       | string&#124;string[] | List of SEO keywords describing what your webpage does. For example, `"your, tags"` or `["your", "tags"]`.                                                                              |
| **canonicalUrl**   | string               | The canonical URL of your webpage that will be used as its default app URL. app.                                                                                                        |
| **imageUrl**       | string               | URL for app image. Recommended aspect ratio for landscape is 1.9:1 (1200x630) or for squares 1:1 (1200x1200). For more info, visit [here](https://iamturns.com/open-graph-image-size/). |
| **excludeTwitter** | boolean              | If Twitter meta properties will be excluded, defaults to `false` and includes them if left unchanged.                                                                                   |

To add all page meta properties, add `SharingHeadEmbed` to the `head` of the page.

Example usage in Next.js:

```JSX
import { SharingHeadEmbed } from "@phntms/react-share";
import type { AppProps } from "next/app";

const App = ({ Component }: AppProps) => (
  <>
    <Head>
      <SharingHeadEmbed
        url="@phntms/react-share"
        description="all-in-one"
        keywords={["metadata", "share", "social-media", "sharing", "opengraph"]}
        canonicalUrl="https://www.npmjs.com/package/@phntms/react-share"
        imageUrl="?"
        />
    </Head>
    <Component />
  </>
);

export default App;
```

**Note**: `imageUrl` and `canonicalUrl` must start with `https://`, else they won't work.

### getShareUrl()

Includes props from every social platform.

```jsx
import { getShareUrl } from "@phntms/react-share";

const Share = () => (
  <a
    href={getShareUrl(SocialPlatforms.Twitter, {
      url: "https://www.npmjs.com/package/@phntms/react-share",
    })}
  >
    Share to Twitter
  </a>
  <a
    href={getShareUrl(SocialPlatforms.Facebook, {
      url: "https://www.npmjs.com/package/@phntms/react-share",
    })}
  >
    Share to Facebook
  </a>
);

export default Share;
```

### getTwitterUrl()

| Parameter | Type   | Required | Notes                            |
| --------- | ------ | -------- | -------------------------------- |
| url       | string | **Yes**  | URL of shared webpage.           |
| text      | string | **No**   | Text to show in Twitter card.    |
| hashtags  | string | **No**   | Hashtags to show in Twitter card |
| related   | string | **No**   | Accounts to recommend following. |

Basic component example usage:

```jsx
import { getTwitterUrl } from "@phntms/react-share";

const ShareToTwitter = () => (
  <a
    href={getTwitterUrl({
      url: "https://www.npmjs.com/package/@phntms/react-share",
    })}
  >
    Share to Twitter
  </a>
);

export default ShareToTwitter;
```

## Further Resources

Useful resources for testing meta properties:

- [Meta Tags](https://metatags.io/) - With Meta Tags you can preview how your webpage will look on Google, Facebook, Twitter and more.
- [Social Share Preview](https://chrome.google.com/webstore/detail/social-share-preview/ggnikicjfklimmffbkhknndafpdlabib?hl=en) - Chrome browser extension to live preview how the webpage will look when shared. Especially useful for testing when app is auth protected.

## 🍰 Requests and Contributing

If a social media platform you want to use isn't already supported, or found an issue? Get involved! Please contribute using the GitHub Flow. Create a branch, add commits, and open a Pull Request or submit a new issue.

Please read `CONTRIBUTING` for details on our `CODE_OF_CONDUCT`, and the process for submitting pull requests to us!

[npm-image]: https://img.shields.io/npm/v/@phntms/react-share.svg?style=flat-square&logo=react
[npm-url]: https://npmjs.org/package/@phntms/react-share
[npm-downloads-image]: https://img.shields.io/npm/dm/@phntms/react-share.svg
[npm-downloads-url]: https://npmcharts.com/compare/@phntms/react-share?minimal=true
[ci-image]: https://github.com/phantomstudios/react-share/workflows/test/badge.svg
[ci-url]: https://github.com/phantomstudios/react-share/actions
