import { useLocation } from "react-router-dom"
export default function Fame() {
    const Location = useLocation()
    const game = Location.state.game
    return(
        <div>
            <h1>{game.name}</h1>
            <p>{game.description}</p>
        </div>
    )
}