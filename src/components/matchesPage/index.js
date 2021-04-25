import { Card } from 'antd';
import './style.css'
export default function Matches(){
    return(
        <div className="bg">
            <Card className="match-card" style={{ width: 1000 }}>
              <p>Team 1 vs Team 2 </p>
            </Card>
            <Card className="match-card" style={{ width: 1000 }}>
              <p>Team 1 vs Team 2 </p>
            </Card>
        </div>
    )
}