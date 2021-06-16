import {useState} from 'react'
import axios from 'axios'
import { Card, Spin, Layout} from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './style.css'

const { Header, Content,Footer} = Layout;
export default function Matches(){
  const [matches,setMatches] = useState();
  const antIcon = <LoadingOutlined style={{ fontSize: 40, color:'#fff' }} spin />;


  function fetchMatches(){
    if(localStorage.getItem('matches') === undefined){
      axios.get('https://matchserviceapp.herokuapp.com/match')
      .then(function (response) {
        localStorage.setItem('matches',response.data)
        setMatches(JSON.parse(localStorage.getItem('matches')))
      })
      .catch(function (error) {
        console.log(error);
      })
    }else{
      setMatches(JSON.parse(localStorage.getItem('matches')))
    }
  }


  function getMatches(){
    console.log(matches)
    if(matches!==undefined){
      var games = matches?.map((match)=>{
        var team1 = match.teams.split("/")[0]
        var team2 = match.teams.split("/")[1]
        return(
          <Card className="match-card" key={match.id}>
              <p>{team1} vs {team2}</p>
          </Card>
      )})
      return  <div className="scroller">{games}</div>
    }
    fetchMatches();
    return <Spin indicator={antIcon} />
  }
  return(
    <div className="matches">
      <Header>
        <div className="logo">Fantasy Cricket</div>
        <div className="authenticte-group">
          <a href="/login"><button className="btn btn-outline-light">Login</button></a>
          <a href="/register"><button className="btn btn-outline-light">Register</button></a>
        </div>
      </Header>
      {getMatches()}
    </div>
  )
}