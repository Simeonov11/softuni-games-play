import { Link, useNavigate, useParams } from "react-router";
import CommentsShow from "../comments-show/CommentsShow.jsx";
import CommentsCreate from "../comments-create/CommentsCreate.jsx";
import { useDeleteGame, useGame } from "../../api/gameApi.js";
import useAuth from "../../hooks/useAuth.js";
import { useComments } from "../../api/commentApi.js";

export default function GameDetails({ }) {
    const navigate = useNavigate();
    const { email, _id: userId } = useAuth();
    const { gameId } = useParams();
    const { game } = useGame(gameId);
    const { deleteGame } = useDeleteGame();
    const { comments } = useComments(gameId);

    const gameDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${game.title} game?`);

        if (!hasConfirm) {
            return;
        }

        await deleteGame(gameId);

        navigate('/games');
    };

    const commentsCreateHandler = (newComment) => {
        // setComments(state => [...state, newComment]);
    };

    const isOwner = userId === game._ownerId;

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <CommentsShow comments={comments} />

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
                        <button
                            onClick={gameDeleteClickHandler}
                            className="button"
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>

            <CommentsCreate
                email={email}
                gameId={gameId}
                onCreate={commentsCreateHandler}
            />

        </section>
    );
}