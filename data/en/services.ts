import { FaServer } from 'react-icons/fa'
import { GiSmartphone } from 'react-icons/gi'
import { MdDesktopWindows } from 'react-icons/md'
import { MdLaptopMac } from 'react-icons/md'
import { ServicesInterface } from '../../components/section/services/types'

const services: ServicesInterface[] = [
  {
    name: 'Criação de Sites',
    description: 'Desenvolvimento de sites profissionais, sistemas web, blogs e lojas online focados em resultados.',
    icon: MdDesktopWindows
  },
  {
    name: 'Sites Responsivos',
    description: 'Criação de sites responsivos para melhor visualização em dispositivos móveis com qualidade em todas as telas.',
    icon: MdLaptopMac
  },
  {
    name: 'Aplicativos Mobile',
    description: 'Desenvolvimento de apps multi-plataforma, usando tecnologias modernas como React Native, Expo e Firebase.',
    icon: GiSmartphone
  },
  {
    name: 'Desenvolvimento de APIs',
    description: 'Desenvolvendo APIs robustas e escaláveis usando Node.js e FastAPI. Sempre com código bem estruturado, limpo e fácil de manter.',
    icon: FaServer
  },
]


export default services
