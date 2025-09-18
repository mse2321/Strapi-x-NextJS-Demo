export default async function Page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
  return (
    <main>
        <h1>Blog</h1>
        {data.map((post)=>(
          <p>{post.title}</p>
        ))}
    </main>
  )
}

export const revalidate = 30;
// This function runs on the server every 30 seconds to fetch fresh data