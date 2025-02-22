export function FilterLoader() {

    function CategoryButton() {
        const randomWidth = Math.floor(Math.random() * (150 - 100 + 1)) + 100; // Gera um valor entre 100 e 150

        return (
            <div className="flex items-center animate-pulse p-2">
                <div className="space-y-2">
                    <div
                        className={`h-8 bg-gray-300 dark:bg-gray-700 rounded-xl`}
                        style={{ width: `${randomWidth}px` }} // Aplica o valor dinâmico
                    />
                </div>
            </div>
        );
    }

    return (
        <>

            <div className="hidden sm:block">
                <div className="flex">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CategoryButton key={index} />
                    ))}
                </div>
                <div className="flex">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CategoryButton key={index} />
                    ))}
                </div>
            </div>


            <div className="block sm:hidden">
                <div className="flex">
                    {Array.from({ length: 2 }).map((_, index) => (
                        <CategoryButton key={index} />
                    ))}
                </div>
                <div className="flex">
                    {Array.from({ length: 2 }).map((_, index) => (
                        <CategoryButton key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}
