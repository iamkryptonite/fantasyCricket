import {} from 'antd';
import { useParams } from "react-router-dom";
import './style.css'
import $ from "jquery"
import Player from '../playerCard'

export default function Match(){
    let { id } = useParams();
    function handleSelect(id){
        $('#'+id).toggleClass('selected')
    }
    return(
        <>
            <h1>Select your dream team</h1>
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
