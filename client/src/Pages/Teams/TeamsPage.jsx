// TeamPage.jsx
import React, { useState } from "react";
import "./TeamsPage.css";
import { Send, Plus } from "lucide-react";

const mockTeams = [
  { id: 1, name: "NeoHackers", members: 403, description: "Dark net linux warriors" },
  { id: 2, name: "CyberRaiders", members: 542, description: "Space for IIT Delhi Students only" },
  { id: 3, name: "404NotFound", members: 224, description: "Python Based Space" },
];

export default function TeamsPage() {
  const [teams, setTeams] = useState(mockTeams);
  const [newTeamName, setNewTeamName] = useState("");

  const handleRequest = (id) => {
    alert(`Request sent to team ID ${id}`);
  };

  const handleCreate = () => {
    if (!newTeamName.trim()) return;
    const newTeam = {
      id: Date.now(),
      name: newTeamName,
      members: 1,
      description: "Freshly brewed team",
    };
    setTeams([...teams, newTeam]);
    setNewTeamName("");
  };

  return (
    <div className="team-page">
      <h1>CREAMS</h1>
      <h3 className="creams-desc">CREAMS are our way to say Teams. These are groups of users that wish to work together. If you want you can send a request to a team or make your own right away!</h3>
      <div className="team-list">
        {teams.map((team) => (
          <div className="team-card" key={team.id}>
            <h2>{team.name}</h2>
            <p>{team.description}</p>
            <span>👥 {team.members} members</span>
            <button onClick={() => handleRequest(team.id)}>
              <Send size={16} /> Request to Join
            </button>
          </div>
        ))}
      </div>
      <div className="create-team">
        <input
          type="text"
          placeholder="Enter new team name"
          value={newTeamName}
          onChange={(e) => setNewTeamName(e.target.value)}
        />
        <button onClick={handleCreate}>
          <Plus size={16} /> Create Team
        </button>
      </div>
    </div>
  );
}
