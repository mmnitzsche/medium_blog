import Image from "next/image";

const ImdbLogo = () => {
    return (
        <div className="flex justify-center items-center">
            <Image
                src="/imdblogo.png"
                alt="Imdb Logo"
                width={30}
                height={30}
                style={{ width: "auto", height: "auto" }} // Mantém proporção
            />
        </div>
    );
};

export default ImdbLogo;
