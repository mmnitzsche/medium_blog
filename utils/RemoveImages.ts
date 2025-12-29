export const removeImages = (content: string) => {
    if (!content || typeof content !== 'string') return '';
    return content.replace(/<img[^>]*>/g, '');
};