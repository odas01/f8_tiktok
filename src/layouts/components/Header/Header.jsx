import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

import {
    LangIcon,
    FeedBackIcon,
    KeyBoardIcon,
    ProfileIcon,
    CoinsIcon,
    SettingIcon,
    LogOutIcon,
    ThreeDotsIcon,
    UploadIcon,
    MessageIcon,
    InboxIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LangIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language 2',
                        data: [
                            {
                                type: 'language',
                                code: 'en',
                                title: 'English 2',
                            },
                            {
                                type: 'language',
                                code: 'vi',
                                title: 'Tiếng Việt 2',
                            },
                        ],
                    },
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FeedBackIcon />,
        title: 'Feedback and help',
        to: 'feedback',
    },
    {
        icon: <KeyBoardIcon />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <ProfileIcon />,
        title: 'View profile',
        to: '@hoaa',
    },
    {
        icon: <CoinsIcon />,
        title: 'Get coins',
        to: 'coin',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: 'settings',
    },
    ...MENU_ITEMS,
    {
        icon: <LogOutIcon />,
        title: 'Log out',
        to: 'logout',
        separate: true,
    },
];

function Header() {
    const currentUser = false;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    <Button className={cx('action-upload')} leftIcon={<UploadIcon />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary to="/">
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1656069743207426.jpeg?x-expires=1655013600&x-signature=URwyNwgVqNFeTP4NkAhhYUeR1Cc%3D"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('action-threeDots')}>
                                <ThreeDotsIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
