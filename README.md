# react-share

[![NPM version][npm-image]][npm-url]
[![Actions Status][ci-image]][ci-url]
[![PR Welcome][npm-downloads-image]][npm-downloads-url]

An all-in-one React library to implement custom Page Sharing Meta and Social Media Sharing Buttons.

## Introduction

Designed to use and extend [OpenGraph](https://ogp.me/) standards. Alongside, full sharing support to the following social media platforms; Facebook, Linkedin and Twitter.

## Installation

Install this package with `npm`.

```bash
npm i @phntms/react-share
```

## Usage

Example usage in Next.js:

```JSX
import Head from 'next/head';
import { MetaHeadEmbed } from "@phntms/react-share";

const PageLayout: React.FC = ({children}) => {
  <>
    <MetaHeadEmbed
      render={(meta: React.ReactNode) => <Head>{meta}</Head>}
      siteTitle="PHANTOM"
      pageTitle="Our Work"
      titleTemplate="[siteTitle] | [pageTitle]"
      description="Transforming challenges of all shapes and sizes into inventive, engaging and performance driven solutions that change the game."
      baseSiteUrl="https://phantom.land"
      pagePath="work"
      keywords={["creative-agency", "phantom", "work"]}
      imageUrl="https://bit.ly/3wiUOuk"
      imageAlt="PHANTOM logo."
      twitter={{
        cardSize: "large",
        siteUsername: "@phntmLDN",
        creatorUsername: "@phntmLDN",
      }}
    />
    {children}
  </>
);

export default PageLayout;
```

### &lt;MetaHeadEmbed />

| Property          | Type                 | Required | Notes                                                                                                                                                                                                                             |
| ----------------- | -------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **render**        | React.ReactNode      | **Yes**  | Unfortunately `react-helmet` and `next/head` are strict with how they accept meta tags. `react-helmet` doesn't support nesting. Whereas Next.JS only supports some children and not all, therefore a render function is required. |
| **pageTitle**     | string               | **Yes**  | Every page should have a unique title that describes the page, such as 'Home', 'About' etc.                                                                                                                                       |
| **siteTitle**     | string               | **Yes**  | Title of the site, usually the organization / brand name.                                                                                                                                                                         |
| **titleTemplate** | string               | **No**   | Title template used to display `pageTitle` and `siteTitle` in a template, displays the values using corresponding `[pageTitle]` and `[siteTitle]`. Example template: "[pageTitle] &#124; [siteTitle]".                            |
| **description**   | string               | **Yes**  | A one to two sentence description of your webpage. Keep it within 160 characters, and write it to catch the user's attention.                                                                                                     |
| **baseSiteUrl**   | string               | **Yes**  | Base site URL, excluding trailing slash.                                                                                                                                                                                          |
| **pagePath**      | string               | **No**   | The path of the current page, excluding leading slash.                                                                                                                                                                            |
| **canonicalUrl**  | string               | **No**   | The canonical URL, if your page is a duplicate.                                                                                                                                                                                   |
| **keywords**      | string&#124;string[] | **No**   | List of SEO keywords describing what your webpage does. Example, `"your, tags"` or `["your", "tags"]`.                                                                                                                            |
| **imageUrl**      | string               | **Yes**  | Image url of asset to share. Recommended aspect ratio for landscape is 1.9:1 (1200x630) or for squares 1:1 (1200x1200). For more info, visit [here](https://iamturns.com/open-graph-image-size/).                                 |
| **imageAlt**      | string               | **Yes**  | Image alt for users who are visually impaired.                                                                                                                                                                                    |
| **locale**        | string               | **No**   | The locale these tags are marked up in, such as; `en_GB`, `fr_FR` and `es_ES`. Defaults to `en_US`.                                                                                                                               |
| **twitter**       | TwitterEmbedProps    | **No**   | Optional twitter embed properties to include.                                                                                                                                                                                     |

To use simply add `MetaHeadEmbed` to a shared layout to get the best out of page specific properties such as `pagePath`.

**Note**: `baseSiteUrl` and `imageUrl` must start with `https://`, else they won't work when sharing.

### TwitterEmbedProps

| Property            | Type                 | Required | Notes                                                                                                                                                                                                      |
| ------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **cardSize**        | 'small'&#124;'large' | **Yes**  | Summary card size.                                                                                                                                                                                         |
| **title**           | string               | **No**   | A concise title for the related content. If left blank, page title will be inherited instead.                                                                                                              |
| **description**     | string               | **No**   | A description that concisely summarizes the content as appropriate for presentation within a Tweet. Should not be the same as title. If left blank, `MetaHeadEmbed` description will be inherited instead. |
| **siteUsername**    | string               | **No**   | The Twitter @username the card should be attributed to.                                                                                                                                                    |
| **creatorUsername** | string               | **No**   | The Twitter @username for the content creator / author.                                                                                                                                                    |
| **imageUrl**        | string               | **No**   | Image to show in card. Images must be less than 5MB in size. Supported file types; JPG, PNG, WEBP and GIF.                                                                                                 |
| **imageAlt**        | string               | **No**   | Image alt for users who are visually impaired. Maximum 420 characters.                                                                                                                                     |

**Note**: Image used should be different based on `cardSize`:

- For `large` cards, use a 2:1 aspect ratio (300x157 px minium or 4096x4096 px maximum).
- For `small` cards, use a 1:1 aspect ratio (144x144 px minium or 4096x4096 px maximum).

**A Note on Twitter Tags**

Twitter will inherit `og:title`, `og:description` and `og:image` tags by default, so unless you want unique fields, respective fields in `TwitterEmbedProps` should be left blank to avoid duplication.

### getFacebookUrl()

| Parameter | Type   | Required | Notes                             |
| --------- | ------ | -------- | --------------------------------- |
| url       | string | **Yes**  | URL of shared webpage.            |
| quote     | string | **No**   | Quote to show in Facebook card.   |
| hashtag   | string | **No**   | Hashtag to show in Facebook card. |

Basic component example usage:

```jsx
import { getFacebookUrl } from "@phntms/react-share";

const ShareToFacebook = () => (
  <a href={getFacebookUrl({ url: "https://phantom.land/" })}>
    Share to Facebook
  </a>
);

export default ShareToFacebook;
```

### getLinkedinUrl()

| Parameter | Type   | Required | Notes                                                                 |
| --------- | ------ | -------- | --------------------------------------------------------------------- |
| url       | string | **Yes**  | URL of shared webpage.                                                |
| title     | string | **No**   | Title to show in card.                                                |
| summary   | string | **No**   | Description to show in card.                                          |
| source    | string | **No**   | Source of the content. For example, your website or application name. |

Basic component example usage:

```jsx
import { getLinkedinUrl } from "@phntms/react-share";

const ShareToLinkedin = () => (
  <a href={getLinkedinUrl({ url: "https://phantom.land/" })}>
    Share to Linkedin
  </a>
);

export default ShareToLinkedin;
```

### getTwitterUrl()

| Parameter | Type                 | Required | Notes                                                                           |
| --------- | -------------------- | -------- | ------------------------------------------------------------------------------- |
| url       | string               | **Yes**  | URL of shared webpage.                                                          |
| text      | string               | **No**   | Text to show in Twitter card.                                                   |
| hashtags  | string&#124;string[] | **No**   | Hashtags to show in Twitter card. Example, `"your,tags"` or `["your", "tags"]`. |
| related   | string&#124;string[] | **No**   | Accounts to recommend following. Example, `"your, tags"` or `["your", "tags"]`. |

Basic component example usage:

```jsx
import { getTwitterUrl } from "@phntms/react-share";

const ShareToTwitter = () => (
  <a href={getTwitterUrl({ url: "https://phantom.land/" })}>Share to Twitter</a>
);

export default ShareToTwitter;
```

### getShareUrl()

If you would rather have all share urls in one place, `getShareUrl()` can be used! It includes props from every social platform listed above, so simply pass in a `SocialPlatform`, and the platforms corresponding props.

Example usage:

```jsx
import { getShareUrl, SocialPlatforms } from "@phntms/react-share";

const Share = () => (
  <a
    href={getShareUrl(SocialPlatforms.Facebook, {url: "https://phantom.land/" })}
  >
    Share to Facebook
  </a>
  <a
    href={getShareUrl(SocialPlatforms.Linkedin, { url: "https://phantom.land/" })}
  >
    Share to Linkedin
  </a>
  <a
    href={getShareUrl(SocialPlatforms.Twitter, { url: "https://phantom.land/" })}
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
