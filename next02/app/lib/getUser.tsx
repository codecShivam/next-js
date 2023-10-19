export default async function getUser(userId: string) {
    const res = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
    if (!res.ok) return undefined;
    return res.json();
}