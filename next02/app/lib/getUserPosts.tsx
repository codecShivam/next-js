export default async function getPost(userId: string) {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!res.ok) throw new Error('Failed to fetch user post')
    return res.json();
}
