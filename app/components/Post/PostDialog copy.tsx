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
        <Dialog

        >
            <DialogTrigger asChild>
                {props.Component}
            </DialogTrigger>
            <DialogContent
                className="w-full h-[90vh] overflow-y-scroll scrollbar-hide">
                <DialogHeader>
                    <div className="flex items-center ">
                        {Link && (
                            <a
                                href={Link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 flex items-center gap-1 hover:underline pr-4 hover:text-primary"
                            >
                                <ExternalLink size={18} />
                            </a>
                        )}
                        <DialogTitle>
                            {Title}
                        </DialogTitle>
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
