import { BaseShareProps } from "../types";
import objectToUrlParams from "./objectToUrlParams";

export interface WhatsAppProps extends BaseShareProps {
  /** Text to prefill into the WhatsApp message. Appears prior to the URL. */
  text?: string;
}

export const getWhatsAppUrl = ({ url, text }: WhatsAppProps) =>
  `whatsapp://send${objectToUrlParams({
    text: text ? `${text} ${url}` : url,
  })}`;

export default getWhatsAppUrl;

console.log()