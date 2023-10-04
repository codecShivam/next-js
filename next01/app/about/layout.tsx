import styles from './styles.module.css'
function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div className='text-xl font-bold'>About layout</div>
            <main className={styles.main}>{children}</main>
        </div>
    )
}

export default AboutLayout;