// ImdbLogo.tsx
import Image from "next/image";

const ImdbLogo = () => {
    return (
        <div className="flex justify-center items-center">
            <Image
                src="/imdblogo.png" // Caminho da imagem
                alt="Imdb Logo"
                width={30} // Largura da imagem
                height={30} // Altura da imagem
            />
        </div>
    );
};

export default ImdbLogo;
