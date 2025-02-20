export  const removeImages = (content: string) => {
    return content.replace(/<img[^>]*>/g, ''); // Remove todas as tags <img>
  };