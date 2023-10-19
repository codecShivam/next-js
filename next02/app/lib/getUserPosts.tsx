export default async function getPost(userId: string) {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60 } });
    if (!res.ok) return undefined;
    return res.json();
}
