
import Header from 'components/header'
import 'assets/index.css'
function MyApp({ Component, pageProps }) {
    return (
        <main>
            <Header />
            <Component {...pageProps} />
        </main>

    )
}
export default MyApp