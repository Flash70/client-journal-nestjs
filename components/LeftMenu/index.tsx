import React from 'react';
import Link from 'next/link';
import {Button} from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import style from './leftMenu.module.scss'

const menu = [
    {text: 'Лента', icon: <WhatshotIcon/>, path: '/'},
    {text: 'Сообщения', icon: <MessageIcon/>, path: '/messages'},
    {text: 'Закладки', icon: <BookmarkIcon/>, path: '/bookmarks'},
    {text: 'Подписки', icon: <PeopleAltIcon/>, path: '/follows'}
]

export const LeftMenu: React.FC = () => {
    return (
        <div className={style.menu}>
            <ul>
                {menu.map(item => (
                        <li key={item.path}>
                            <Link href={item.path}>
                                <a>
                                    <Button>
                                        {item.icon}
                                        {item.text}
                                    </Button>
                                </a>
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}