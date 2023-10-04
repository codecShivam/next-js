export default async function getUser(userId: string) {
    const res = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
    if (!res.ok) throw new Error('Failed to fetch users')
    return res.json();
}
