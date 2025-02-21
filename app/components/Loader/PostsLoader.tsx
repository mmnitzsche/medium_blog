export function PostsLoader() {
    function PostContainer() {
        return (
            <div className="flex items-center animate-pulse p-2">
                <div className="space-y-2">
                    <div className="w-56 bg-gray-300 dark:bg-gray-700 rounded-xl h-[360px]" />
                </div>
            </div>
        );
    }

    return (
        <>
            
            <div className="hidden sm:block">
                <div className="flex">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <PostContainer key={index} />
                    ))}
                </div>
                <div className="flex">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <PostContainer key={index} />
                    ))}
                </div>
            </div>

            
            <div className="block sm:hidden">
                <div className="flex">
                    {Array.from({ length: 1 }).map((_, index) => (
                        <PostContainer key={index} />
                    ))}
                </div>
                <div className="flex">
                    {Array.from({ length: 1 }).map((_, index) => (
                        <PostContainer key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}
