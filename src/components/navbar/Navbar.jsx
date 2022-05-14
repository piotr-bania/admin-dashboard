import './navbar.scss'
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined'
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <ContentPasteSearchOutlinedIcon className='icon' />
                </div>
                <div className='items'>
                    <div className='item'>
                        <TranslateOutlinedIcon className='icon' />
                    </div>
                    <div className='item'>
                        <DarkModeOutlinedIcon className='icon' />
                    </div>
                    <div className='item'>
                        <FullscreenExitOutlinedIcon className='icon' />
                    </div>
                    <div className='item'>
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <div className='counter'>1</div>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlineOutlinedIcon className='icon' />
                        <div className='counter'>4</div>
                    </div>
                    <div className='item'>
                        <FormatListBulletedOutlinedIcon className='icon' />
                    </div>
                    <div className='item'>
                        <img
                        src="https://lh3.googleusercontent.com/ogw/ADea4I7URJSAw3I6macIw8RCzETPU_FAkv2JYNOwxjM8=s32-c-mo"
                        alt="avatar"
                        className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar