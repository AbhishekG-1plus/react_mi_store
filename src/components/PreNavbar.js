import React from 'react'
import "../styles/PreNavbar.css"

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M11 44Q9.8 44 8.9 43.1Q8 42.2 8 41V15Q8 13.8 8.9 12.9Q9.8 12 11 12H16.5V11.5Q16.5 8.35 18.675 6.175Q20.85 4 24 4Q27.15 4 29.325 6.175Q31.5 8.35 31.5 11.5V12H37Q38.2 12 39.1 12.9Q40 13.8 40 15V41Q40 42.2 39.1 43.1Q38.2 44 37 44ZM19.5 11.5V12H28.5V11.5Q28.5 9.6 27.2 8.3Q25.9 7 24 7Q22.1 7 20.8 8.3Q19.5 9.6 19.5 11.5ZM11 41H37Q37 41 37 41Q37 41 37 41V15Q37 15 37 15Q37 15 37 15H31.5V19.5Q31.5 20.15 31.075 20.575Q30.65 21 30 21Q29.35 21 28.925 20.575Q28.5 20.15 28.5 19.5V15H19.5V19.5Q19.5 20.15 19.075 20.575Q18.65 21 18 21Q17.35 21 16.925 20.575Q16.5 20.15 16.5 19.5V15H11Q11 15 11 15Q11 15 11 15V41Q11 41 11 41Q11 41 11 41ZM11 41Q11 41 11 41Q11 41 11 41V15Q11 15 11 15Q11 15 11 15Q11 15 11 15Q11 15 11 15V41Q11 41 11 41Q11 41 11 41Z"/></svg>

const PreNavbar = () => {
    return (
        <div className='PreNav'>
            <div>
                <a href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
                <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
                <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
                <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
            </div>
            <div>
                <a href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
                <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
                <a href="https://store.mi.com/in/site/login">{cartIcon} CART (0)</a>

            </div>
        </div>
    )
}

export default PreNavbar
