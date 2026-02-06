async function getBlogs() {
    const response = await fetch(
         'https://api.github.com/repositories/1149576770/contents/posts',
    );
    const data = await response.json();
    return data[0].download_url;
}

export default getBlogs;