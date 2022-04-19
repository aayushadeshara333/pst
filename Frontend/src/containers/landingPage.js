import "./landingPage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LandingPage = () => {

    const [playerOne, setPlayerOne] = useState("");
    const [playerTwo, setPlayerTwo] = useState("");
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3001/games")
            .then((resp) => {
                console.log(resp.data)
                setData(resp.data)
            }).catch((error) => {
                console.log(error)
            })
    }, []);

    const submitData = () => {
        navigate('/game', { state: { player_one: playerOne, player_two: playerTwo } });
    }

    return (
        <div className="container">
            <div className="card">
                <div>
                    <div className="field-title">Player one:</div>
                    <input className="custom-input" type="text" value={playerOne} onChange={(e) => setPlayerOne(e.target.value)} />
                </div>
                <div>
                    <div className="field-title">Player two:</div>
                    <input className="custom-input" type="text" value={playerTwo} onChange={(e) => setPlayerTwo(e.target.value)} />
                </div>
                <button className="button" onClick={submitData}>Submit</button>
            </div>
        </div>
    );
}

export default LandingPage;