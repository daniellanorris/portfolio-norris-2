
import * as styles from '../index.css'

export default function Nav() {
    return  (
        <>
        <div className={'nav-bar'}> 
            <ul className={'nav-list'}>
                <li><a href='/projects'>Projects </a>  </li>
                <li> <a href='/about'> About </a> </li>
                <li> <a href='/resume'>Resume</a>  </li>
                <li> <a href='/home'>Home</a>  </li>
                <li> <a href='/site-visitors'> Site Visitors </a></li>
                </ul>
                 </div>
        </>
    )
}