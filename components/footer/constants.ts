import { IconType } from "react-icons/lib";

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export interface footerSocialLinksProps {
  label: string
  link: string,
  icon: IconType
}

export const footerSocialLinks: footerSocialLinksProps[] = [
  {
    label: 'Perfil Github',
    link: 'https://github.com/Fco-Correia',
    icon: FaGithub
  },
  {
    label: 'Perfil Linkedin',
    link: 'https://www.linkedin.com/in/francisco-correia-35711b250/',
    icon: FaLinkedin
  },
  {
    label: 'Envie um Email',
    link: 'mailto:fconetophb@hotmail.com',
    icon: SiGmail
  },
]
