import Image from "next/image";

export default function MediumLogo() {
    return (
        <div className="flex justify-center items-center">
            <Image
                src="/mediumlogo.png" // Caminho da imagem
                alt="Medium Logo"
                width={30} // Largura da imagem
                height={30} // Altura da imagem
            />
        </div>
    );
};