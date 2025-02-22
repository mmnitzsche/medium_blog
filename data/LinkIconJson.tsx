import { Github, Linkedin } from "lucide-react";
import ImdbLogo from "../app/components/Hero/Images/ImdbLogo";
import MediumLogo from "../app/components/Hero/Images/MediumLogo";

// Defina explicitamente o tipo do array Links
export const LinksJson: {
    id: number;
    href?: string; // O campo href pode ser opcional, pois nem todos os links têm
    title?: string;
    description?: string;
    icon?: JSX.Element;  // Aqui definimos corretamente o tipo para componentes JSX
}[] = [
        {
            id: 1,
            href: "https://github.com/mmnitzsche/", // Link válido
            icon: <Github /> // Componente JSX correto
        },
        {
            id: 2,
            href: "https://www.linkedin.com/in/mateusnit/", // Link válido
            icon: <Linkedin /> // Componente JSX correto
        },
        {
            id: 3,
            href: "https://www.imdb.com/name/nm10258642/", // Link válido
            icon: <ImdbLogo></ImdbLogo>
        },
        {
            id: 4,
            href: "https://medium.com/@mateusnit", // Link válido
            icon: <MediumLogo></MediumLogo>
        },

    ];
