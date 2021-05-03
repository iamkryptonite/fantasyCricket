import {useState} from 'react'
import axios from 'axios'
import ls from 'local-storage'
import { Card,Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './style.css'

export default function Matches(){
  const [matches,setMatches] = useState();
  const antIcon = <LoadingOutlined style={{ fontSize: 40, color:'#fff' }} spin />;
  axios.get('https://matchserviceapp.herokuapp.com/match')
  .then(function (response) {
    ls.set('matches',response.data)
    setMatches(ls.get('matches'))
  })
  .catch(function (error) {
    console.log(error);
  })

  function getMatches(){
    if(matches!==undefined){
      var games = matches.map((match)=>{
        var team1 = match.teams.split("/")[0]
        var team2 = match.teams.split("/")[1]
        return(
          <Card className="match-card" style={{ width: 1000 }} key={match.id}>
              <p>{team1} vs {team2}</p>
          </Card>
      )})
      return  <div className="scroller">{games}</div>
    }
    return <Spin indicator={antIcon} />
  }
  return(
    <div className="bg">
        {getMatches()}
    </div>
  )
}