import React,{ useState } from 'react'
import {Layout} from 'antd';
import {ArrowRightOutlined} from '@ant-design/icons'
import { useParams } from "react-router-dom";
import './style.css'
import $ from "jquery"
import Player from '../playerCard'

const { Content } = Layout
export default function Match(){
    let { id } = useParams();
    var [teamSize,setTeamSize] = useState(11);
    var [team,setTeam] = useState([]);
    function handleSelect(id){
        $('#'+id).toggleClass('selected')
        if(team.indexOf(id)===-1){
            setTeam(team => [...team, id])
            setTeamSize(teamSize - 1)
        }
        else{
            setTeam(team.filter(p_id => p_id !== id));
            setTeamSize(teamSize + 1)
        }
        if(teamSize === 0){
            $('.continue').prop('disabled', false);
        }else{
            $('.continue').prop('disabled', true);
        }
    }
    return(
        <Content style = {{ padding: '10px 50px',height:'100vh' }}>
            <div className = "team-select-options">
                <h1>Select your dream team</h1>
                <button className = "btn btn-success continue" disabled>Continue <ArrowRightOutlined /></button>
            </div>
            <p>{teamSize} players left</p>
            <div className = "players-board">
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
                <Player id={id} handleSelect={handleSelect}/>
            </div>
        </Content>
    );
}
