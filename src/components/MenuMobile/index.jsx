import { Link } from 'react-router-dom';
import styles from './MenuMobile.module.css';
import { GrClose } from 'react-icons/gr';
import { FaHome } from 'react-icons/fa';
import { MdOutlineMenuBook } from 'react-icons/md';
import { IoNewspaper } from 'react-icons/io5';
import { TbMailFilled } from 'react-icons/tb';
import { RiInformation2Fill } from 'react-icons/ri';


function MenuMobile () {
    return (
        <div>
            <nav className={styles.menumobile} >
                <GrClose className={styles.close}/>
                <Link to="/"><FaHome /> Home</Link>
                <Link to="/cardapio"><MdOutlineMenuBook /> Cardápio</Link>
                <Link to="/sobre"><RiInformation2Fill /> Quem Somos</Link>
                <Link to="/blog"><IoNewspaper /> Blog</Link>
                <Link to="/contato"><TbMailFilled /> Contato</Link>
            </nav>
        </div>
    )
}

export default MenuMobile;
