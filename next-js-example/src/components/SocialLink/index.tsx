import { SocialLinkWrapper } from "./styles";

interface Props {
  children: React.ReactNode;
  href: string;
}

const SocialLink = ({ href, children }: Props) => (
  <SocialLinkWrapper href={href} target="_blank" rel="noreferrer">
    {children}
  </SocialLinkWrapper>
);

export default SocialLink;
