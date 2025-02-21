export function PostsLoader() {
    const Repeats = 3;


    function PostContainer() {
        

        return (
            <div className="flex items-center animate-pulse p-2">
                <div className="space-y-2">
                    <div
                        className={`w-56 bg-gray-300 dark:bg-gray-700 rounded-xl h-[360px]`}
                    />
                </div>
            </div>
        );
    }

    return (
        <>
            <div>
                <div className="flex">
                    {Array.from({ length: Repeats }).map((_, index) => (
                        <PostContainer key={index} />
                    ))}
                </div>
                <div className="flex">
                    {Array.from({ length: Repeats }).map((_, index) => (
                        <PostContainer key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}
