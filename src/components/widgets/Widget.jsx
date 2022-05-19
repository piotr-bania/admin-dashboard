import './widget.scss'
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined'

const widget = () => {
    return (
        <div className='widget'>
            <div className="left">
                <span className='title'>USERS</span>
                <span className='counter'>21450</span>
                <span className='link'>See all users</span>
            </div>
            <div className="right">
                <ArrowDropUpOutlinedIcon className='icon'/>
                <div className="percentage">20%</div>
            </div>
        </div>
    )
}

export default widget