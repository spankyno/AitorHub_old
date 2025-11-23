import { 
  Zap, 
  FileSpreadsheet, 
  Map as MapIcon, 
  MapPin, 
  Mic, 
  FileText, 
  Globe, 
  FileAudio, 
  Radar, 
  ScanText, 
  Image as ImageIcon 
} from 'lucide-react';
import { LinkItem } from './types';

// To add a new link, simply add an object to this array.
// Icons are imported from lucide-react.
export const LINKS: LinkItem[] = [
  {
    id: 'home',
    title: "HOME (Aitor's blog)",
    url: "https://aitorblog.infinityfreeapp.com/",
    description: "La página principal de mi blog personal con artículos y novedades.",
    category: 'blog',
    icon: Zap,
    isExternal: true
  },
  {
    id: 'excel',
    title: "Excel Merger",
    url: "https://kalboexcelmerger.netlify.app/",
    description: "Herramienta para fusionar múltiples listas de Excel en un único archivo.",
    category: 'tool',
    icon: FileSpreadsheet
  },
  {
    id: 'gpx',
    title: "Visor GPX Simultáneo",
    url: "https://visorvariosgpx.netlify.app/",
    description: "Visualiza múltiples rutas GPX al mismo tiempo en un mapa interactivo.",
    category: 'tool',
    icon: MapIcon
  },
  {
    id: 'pk',
    title: "Visor PK Carreteras",
    url: "https://visorpkaitor.netlify.app/",
    description: "Localiza puntos kilométricos exactos en carreteras.",
    category: 'tool',
    icon: MapPin
  },
  {
    id: 'audio-rec',
    title: "Grabadora Audio PC",
    url: "https://grabadoraaudiopc.netlify.app/",
    description: "Graba audio directamente desde tu navegador sin instalar nada.",
    category: 'media',
    icon: Mic
  },
  {
    id: 'pdf',
    title: "Extrae Información PDF",
    url: "https://pdfscrappingaitor.netlify.app/",
    description: "Analiza y extrae datos específicos de documentos PDF (PDF Scrapping).",
    category: 'utility',
    icon: FileText
  },
  {
    id: 'ip',
    title: "Buscador de IP",
    url: "https://buscaip.netlify.app/",
    description: "Geolocalización y detalles sobre direcciones IP.",
    category: 'utility',
    icon: Globe
  },
  {
    id: 'audio-text',
    title: "Convierte Audio a Texto",
    url: "https://audioa-texto.vercel.app/",
    description: "Transcribe grabaciones de voz a texto editable automáticamente.",
    category: 'media',
    icon: FileAudio
  },
  {
    id: 'rastrea',
    title: "Rastreaitor",
    url: "https://rastreaitor.vercel.app/",
    description: "Sistema de rastreo de dispositivos sencillo y eficaz.",
    category: 'utility',
    icon: Radar
  },
  {
    id: 'ocr',
    title: "Extrae Texto de Imagen",
    url: "https://extrae-textode-imagen.vercel.app/",
    description: "Tecnología OCR para sacar texto de fotos o capturas de pantalla.",
    category: 'utility',
    icon: ScanText
  },
  {
    id: 'img',
    title: "Imaginaitor",
    url: "https://imaginaitor.vercel.app/",
    description: "Conversor y optimizador de formatos de imágenes rápido.",
    category: 'media',
    icon: ImageIcon
  },
  {
    id: 'img',
    title: "Libro de visitas",
    url: "https://prukal2.infinityfreeapp.com/",
    description: "Loguea tu dirección IP, junto con un comentario y datos del S.O. visitante",
    category: 'utility',
    icon: Monitor-down
  }  
];

export const SOCIAL_LINKS = {
  twitter: "https://x.com/Kalbo___"
};


