import getUser from '../../lib/getUser'
import getUserPosts from '../../lib/getUserPosts'
import { Suspense } from 'react'
import UserPost from './components/UserPost'

type Params = {
    params: {
        userId: string
    }
}

export default async function UserPage({ params: { userId } }: Params) {
    const userData: Promise<User> = getUser(userId)
    const userPostData: Promise<Post[]> = getUserPosts(userId)

    // const [user, userPosts] = await Promise.all([userData, userPostData])
    const user = await userData

    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPost promise={userPostData} />
            </Suspense>
        </>
    )
}
