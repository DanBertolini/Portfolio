export class Page {
    title: string;
    description: string;
    tags: string[] = [];
    hasVideo: boolean;
    hasImage: boolean;
    likes: number;
    comments: any[] = [];
    author: any;
    createDate: Date;
}