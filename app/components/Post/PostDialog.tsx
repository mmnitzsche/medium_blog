import { UsePostApi } from "@/app/hooks/usePostApi"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import PublishedContainer from "../Projects/Published/PublishedContainer"
import { ExternalLink } from "lucide-react"

interface props {
    Posts: any
    Component: React.ReactNode
    Index?: number
}

export function PostDialog(props: props) {
    const Posts = props.Posts;
    const postIndex = props.Index ?? 0;
    const Link = Posts[postIndex]?.id;
    const Title = Posts[postIndex]?.title;
    const PostDate = Posts[postIndex]?.published;
    const Content = Posts[postIndex]?.content;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    {props.Component}
                </div>
            </DialogTrigger>

            <DialogContent className="w-[90vh] h-[90vh] overflow-y-scroll scrollbar-hide">

                <DialogHeader>
                    <div className="flex items-center justify-between">
                        <DialogTitle>{Title}</DialogTitle>
                        {Link && (
                            <a
                                href={Link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 flex items-center gap-1 hover:underline pr-4"
                            >

                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                    <DialogDescription>
                        <PublishedContainer PublishedDate={PostDate} />
                    </DialogDescription>
                </DialogHeader>
                <div
                    className="text-muted-foreground mb-4"
                    dangerouslySetInnerHTML={{ __html: Content }}
                />
            </DialogContent>
        </Dialog>
    );
}
