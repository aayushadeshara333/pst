import { useState } from "react";
import styled from "styled-components";
import axois from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Game = () => {
    const navigate = useNavigate();
    const submit = (data) => {
        axois.post("http://localhost:3001/add", data)
            .then((resp) => {
                console.log(resp)
                navigate("/");
            }).catch((error) => {
                console.log(error)
            })
    }
    const location = useLocation();
    const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    `

    const Card = styled.div`
        border: 1px solid #909090;
        padding: 2%;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        width: 20%;
    `

    const FieldTitle = styled.div`
        font-size: 1em;
        color: #343434;
        margin-bottom: 0.2em;
    `
    const Button = styled.button`
        border: none;
        background-color: #017BFF;
        padding: 3%;
        color: #ffffff;
        font-weight: 500;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
    `

    const PlayerTitle = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    const PlayerDescription = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 3%;
    `

    const PlayerProfile = styled.div`
        margin-bottom: 15%;
    `

    const Count = styled.div`
        font-size: 2rem;
    `

    const FlexBetween = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3%;
    `

    const Hr = styled.hr`
        width: 100%;
        margin-bottom: 5%;
    `

    const [oneWin, setOneWin] = useState(0);
    const [twoWin, setTwoWin] = useState(0);

    return (
        <Container>
            <Card>
                <PlayerProfile>
                    <PlayerTitle>
                        <FieldTitle>{location.state.player_one}</FieldTitle>
                        <Button onClick={() => setOneWin(oneWin + 1)}>Add win</Button>
                    </PlayerTitle>
                    <PlayerDescription>
                        <FieldTitle>Wins:</FieldTitle>
                        <Count>{oneWin}</Count>
                    </PlayerDescription>
                </PlayerProfile>
                <PlayerProfile>
                    <PlayerTitle>
                        <FieldTitle>{location.state.player_two}</FieldTitle>
                        <Button onClick={() => setTwoWin(twoWin + 1)}>Add win</Button>
                    </PlayerTitle>
                    <PlayerDescription>
                        <FieldTitle>Wins:</FieldTitle>
                        <Count>{twoWin}</Count>
                    </PlayerDescription>
                </PlayerProfile>

                <Hr />

                <FlexBetween>
                    <label>Current Winner:</label>
                    {oneWin > twoWin ? `${location.state.player_one}` : oneWin === twoWin ? "Tie" : `${location.state.player_two}`}
                </FlexBetween>
                <FlexBetween>
                    <label>Win difference:</label>
                    {Math.abs(oneWin - twoWin)}
                </FlexBetween>
                <Button onClick={() => submit({
                    player_one: `${location.state.player_one}`,
                    player_two: `${location.state.player_two}`,
                    winner: oneWin > twoWin ? `${location.state.player_one}` : oneWin === twoWin ? "Tie" : `${location.state.player_two}`,
                    win_count: Math.abs(oneWin - twoWin),
                })}>
                    Save
                </Button>
            </Card>
        </Container >
    );
}

export default Game;