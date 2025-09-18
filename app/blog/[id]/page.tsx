async function fetchPosts(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        if (!data.id) {
            // function from NextJS to handle 404 errors
            notFound();
        }
        return data
    } catch (err){
        // function from NextJS to handle 404 errors
        notFound();
    }

}

export default async function Page({params}) {
    const {id} = params;
    const data = await fetchPosts(id);

    return (
        <main>
            <h1>Individual Page: {id}</h1>
            <p>{data.title}</p>
        </main>
    )
}

export async function generateStaticParams() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data.map((post) => ({ id: String(post.id) }));
}
export const revalidate = 30;
// This function runs on the server every 30 seconds to fetch fresh data

//export const dynamicParams = false;