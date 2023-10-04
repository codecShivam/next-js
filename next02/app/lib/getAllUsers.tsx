const getAllUsers = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error('Failed to fetch users')

  return res.json();
}

export default getAllUsers;