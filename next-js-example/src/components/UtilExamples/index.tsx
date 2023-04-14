import {
  getFacebookUrl,
  getWhatsAppUrl,
  getLinkedinUrl,
  getTwitterUrl,
  copyToClipboard,
} from "@phntms/react-share";
import Button from "../Button";
import SocialLink from "../SocialLink";
import { ButtonsWrapper, UtilExamplesWrapper } from "./styles";

interface Props {
  url: string;
}

const UtilExamples = ({ url }: Props) => (
  <UtilExamplesWrapper>
    <h2>Share Util Examples</h2>
    <ButtonsWrapper>
      <SocialLink href={getFacebookUrl({ url, hashtag: "react-share" })}>
        <Button>Share to Facebook</Button>
      </SocialLink>
      <SocialLink href={getWhatsAppUrl({ url, text: "react-share" })}>
        <Button>Share to Whatsapp</Button>
      </SocialLink>
      <SocialLink href={getLinkedinUrl({ url })}>
        <Button>Share to Linkedin</Button>
      </SocialLink>
      <SocialLink href={getTwitterUrl({ url, text: "react-share" })}>
        <Button>Share to Twitter</Button>
      </SocialLink>
      <Button onClick={() => copyToClipboard(url)}>
        Copy URL to Clipboard
      </Button>
    </ButtonsWrapper>
  </UtilExamplesWrapper>
);

export default UtilExamples;
