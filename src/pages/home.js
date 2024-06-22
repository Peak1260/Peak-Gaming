import React from 'react';
import './home.css';
import reel from '../assets/Peak Gaming Reel.mov';
import thumbnail from '../assets/thumbnail.png';

export const Home = () => {
    return (
        <div className="home">
            <section className="showcase">
                <div className="demo-container">
                    <video controls poster={thumbnail}>
                        <source src={reel} />
                    </video>
                </div>
            </section>

            <section className="gamelink">
                <div className="container">
                    <h2>Top Games</h2>

                    <div className="box">
                        <img src="https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b" alt="League of Legends" />
                        <div>
                            <h3>League of Legends</h3>
                            <p>
                            League of Legends is a multiplayer online battle arena game in which the player controls a character with a set of unique abilities from an isometric perspective. As of 2023, there are over 160 champions available to play. Over the course of a match, champions gain levels by accruing experience points through killing enemies. Items can be acquired to increase champions' strength, and are bought with gold, which players accrue passively over time and earn actively by defeating the opposing team's minions, champions, or defensive structures.
                            </p>
                        </div>
                    </div>

                    <div className="box">
                        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/capsule_616x353.jpg?t=1716504320" alt="Counter-Strike 2" />
                        <div>
                            <h3>Counter-Strike 2</h3>
                            <p>
                            Counter-Strike 2 is a 2023 free-to-play tactical first-person shooter game developed and published by Valve. It is the fifth entry in the Counter-Strike series, developed as an updated version of the previous entry, Counter-Strike: Global Offensive. Like its predecessor, the game pits two teams, the Counter-Terrorists and the Terrorists, against each other in various objective-based game modes; additional game modes that stray away from this setup are also included. Counter-Strike 2 features major technical improvements over Global Offensive, including a move from the Source game engine to Source 2, improved graphics, and a new "sub-tick" server architecture.
                            </p>
                        </div>
                    </div>

                    <div className="box">
                        <img src="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-d9ca2c0fbaff9d80e8dedfbd726aa438" alt="Valorant" />
                        <div>
                            <h3>Valorant</h3>
                            <p>
                            Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it. Agents have unique abilities, each requiring charges, as well as a unique ultimate ability that requires charging through kills, deaths, orbs, or objectives. Other weapons and ability charges can be purchased using an in-game economic system that awards money based on the outcome of the previous round, any kills the player is responsible for, and any objectives completed.
                            </p>
                        </div>
                    </div>

                    <div className="box">
                        <img src="https://cdn2.unrealengine.com/social-image-chapter4-s3-3840x2160-d35912cc25ad.jpg" alt="Fortnite" />
                        <div>
                            <h3>Fortnite</h3>
                            <p>
                            Fortnite is an online video game and game platform developed by Epic Games and released in 2017. Fortnite Battle Royale is a player-versus-player game for up to 100 players, allowing one to play alone, in a duo, or in a squad. Weaponless players airdrop from a "Battle Bus" that crosses the game's map, and then scavenge for weapons, items, and resources while trying to stay alive and to attack and eliminate other players. Over the course of a round, the safe area of the map shrinks down in size due to an incoming toxic storm; players outside that threshold take damage and can be eliminated if they fail to quickly evacuate. 
                            </p>
                        </div>
                    </div>

                    <div className="box">
                        <img src="https://img-eshop.cdn.nintendo.net/i/cdb89d91f73cecccdddc8b421a31af03473ffab2c790a4cd7a133d28538052f2.jpg" alt="Apex Legends" />
                        <div>
                            <h3>Apex Legends</h3>
                            <p>
                            Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts. Before the match, players form into two- or three-player squads, and select from pre-designed characters with distinctive abilities, known as "Legends". The game has two gameplay modes. In "Battle Royale", up to 20 three-person squads or 30 two-person duos land on an island and search for weapons and supplies before attempting to defeat all other players in combat.
                            </p>
                        </div>
                    </div>

                    <div className="box">
                        <img src="https://www.rocketleague.com/images/keyart/rl_evergreen.jpg" alt="Rocket League" />
                        <div>
                            <h3>Rocket League</h3>
                            <p>
                            Rocket League is a vehicular soccer video game developed and published by Psyonix. Described as "soccer, but with rocket-powered cars", to hit a ball into their opponent's goal and score points over the course of a match.  Players' cars have the ability to jump to hit the ball while in mid-air. The players can also pick up a speed boost by passing their cars over marked spaces on the field, enabling them to quickly cross the field, use the added momentum to hit the ball, or ram into another player's car to destroy it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
