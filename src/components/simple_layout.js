import Icon from "./icons"

export default function Layout({children}) {
    return (
        <div>
            <main>{children}</main>
            <footer className="mt-auto"></footer>
        </div>
    )
}