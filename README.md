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

| Property           | Type                 | Required | Notes                                                                                                                                                                                                      |
| ------------------ | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **pageTitle**      | string               | **Yes**  | Title of page user is currently on, such as 'Home', 'Contact Us'.                                                                                                                                          |
| **siteTitle**      | string               | **Yes**  | Site wide title. This will be shown whenever someone links your website, so make it quick, snappy and able to draw attention.                                                                              |
| **titleTemplate**  | string               | **No**   | Title template used to display `pageTitle` and `siteTitle` in a template, displays the values using corresponding `[PAGE_TITLE]` and `[SITE_TITLE]`. Example template: "[PAGE_TITLE] &#124; [SITE_TITLE]". |
| **description**    | string               | **Yes**  | A one to two sentence description of your webpage.description.                                                                                                                                             |
| **keywords**       | string&#124;string[] | **Yes**  | List of SEO keywords describing what your webpage does. For example, `"your, tags"` or `["your", "tags"]`.                                                                                                 |
| **canonicalUrl**   | string               | **Yes**  | The canonical URL of your webpage that will be used as its default app URL. app.                                                                                                                           |
| **imageUrl**       | string               | **Yes**  | URL for app image. Recommended aspect ratio for landscape is 1.9:1 (1200x630) or for squares 1:1 (1200x1200). For more info, visit [here](https://iamturns.com/open-graph-image-size/).                    |
| **excludeTwitter** | boolean              | **No**   | If Twitter meta properties will be excluded, defaults to `false`, but includes if left unchanged.                                                                                                          |

To add all page meta properties, add `SharingHeadEmbed` to the `head` of the page.

Example usage in Next.js:

```JSX
import { SharingHeadEmbed } from "@phntms/react-share";
import type { AppProps } from "next/app";

const App = ({ Component }: AppProps) => (
  <>
    <Head>
      <SharingHeadEmbed
        pageTitle="Example"
        siteTitle="@phntms/react-share"
        titleTemplate="[PAGE_TITLE] | [SITE_TITLE]"
        description="all-in-one"
        keywords={["react", "metadata", "share", "social-media", "opengraph"]}
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

### getFacebookUrl()

| Parameter | Type   | Required | Notes                            |
| --------- | ------ | -------- | -------------------------------- |
| url       | string | **Yes**  | URL of shared webpage.           |
| quote     | string | **No**   | Quote to show in Facebook card.  |
| hashtag   | string | **No**   | Hashtag to show in Facebook card |

Basic component example usage:

```jsx
import { getFacebookUrl } from "@phntms/react-share";

const ShareToFacebook = () => (
  <a
    href={getFacebookUrl({
      url: "https://www.npmjs.com/package/@phntms/react-share",
    })}
  >
    Share to Facebook
  </a>
);

export default ShareToFacebook;
```

### getLinkedinUrl()

| Parameter | Type   | Required | Notes                                                                    |
| --------- | ------ | -------- | ------------------------------------------------------------------------ |
| url       | string | **Yes**  | URL of shared webpage.                                                   |
| title     | string | **No**   | Title to show in card.                                                   |
| summary   | string | **No**   | Description to show in card                                              |
| source    | string | **No**   | Source of the content (for example... your website or application name). |

Basic component example usage:

```jsx
import { getLinkedinUrl } from "@phntms/react-share";

const ShareToLinkedin = () => (
  <a
    href={getLinkedinUrl({
      url: "https://www.npmjs.com/package/@phntms/react-share",
    })}
  >
    Share to Linkedin
  </a>
);

export default ShareToLinkedin;
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

### getShareUrl()

If you would rather have all share urls in one place, `getShareUrl()` can be used! It includes props from every social platform listed above, so simply pass in a `SocialPlatform`, and the platforms corresponding props.

Example usage:

```jsx
import { getShareUrl } from "@phntms/react-share";

const Share = () => (
  <a
    href={getShareUrl(SocialPlatforms.Facebook, {
      url: "https://www.npmjs.com/package/@phntms/react-share",
    })}
  >
    Share to Facebook
  </a>
  <a
    href={getShareUrl(SocialPlatforms.Linkedin, {
      url: "https://www.npmjs.com/package/@phntms/react-share",
    })}
  >
    Share to Linkedin
  </a>
  <a
    href={getShareUrl(SocialPlatforms.Twitter, {
      url: "https://www.npmjs.com/package/@phntms/react-share",
    })}
  >
    Share to Twitter
  </a>
);

export default Share;
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
