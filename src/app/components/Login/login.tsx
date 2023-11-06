import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


type Props = {}

const Login = (props: Props) => {
    // const { login } = React.useContext(UserContext)
    // const router = useRouter()

    // if (login === true) return router.push('account');


    return (
        <section>
            <div>
                <Link href="/" />
                <Link href="create" />
                <Link href="lost" />
                <Link href="reset" />
                <Link href="/*" />
            </div>
        </section>
    )
}

export default Login