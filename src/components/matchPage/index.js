import {} from 'antd';
import { useParams } from "react-router-dom";
import './style.css'
import $ from "jquery"
import Player from '../playerCard'

export default function Match(){
    let { id } = useParams();
    var team = [];
    var teamSelected = false;
    function handleSelect(id){
        $('#'+id).toggleClass('selected')
        if(team.indexOf(id)===-1)
            team.push(id);
        else
            team.splice(team.indexOf(id),1);
        if(team.length===11){
            $('.continue').prop('disabled', false);
        }else{
            $('.continue').prop('disabled', true);
        }
    }
    return(
        <>
            <div className="team-select-options">
                <h1>Select your dream team</h1>
                <button className="btn btn-success continue" disabled>Continue</button>
            </div>
            <div className="players-board">
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
        </>
    );
}
