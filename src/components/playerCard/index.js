import React from 'react'
import { Avatar,Card} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.css'

const { Meta } = Card;

function Player(props){
    return(
        <Card
            style={{ width: 150 }}
            cover={ <Avatar shape="square" size={150} icon={<UserOutlined />}/> }
            onClick={()=>props.handleSelect(props.id)}
            id={props.id}
            className="player-card"
        >
            <Meta
                title="Player Name"
                description="Credits: 8.5"
            />
        </Card>
    )
}
export default React.memo(Player)