import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useState, useEffect } from "react";

const Assignment = () => {
    const data = useLoaderData();
    const [assignments, setAssignments] = useState([]);
    const [selectedDifficultyLevel, setSelectedDifficultyLevel] = useState('');

    useEffect(() => {
        setAssignments(data);
    }, [data]);

    const handleFilterChange = (e) => {
        setSelectedDifficultyLevel(e.target.value);
    };

    const difficultyLevels = Array.from(new Set(assignments.map(assignment => assignment.difficulty_level)));

    const filteredAssignments = selectedDifficultyLevel
        ? assignments.filter(assignment => assignment.difficulty_level === selectedDifficultyLevel)
        : assignments;

    return (
        <div>
            <div className="text-center">
                <select
                    className="text-center w-[200px] h-[50px] border rounded-lg bg-purple-400 text-xl font-semibold"
                    value={selectedDifficultyLevel}
                    onChange={handleFilterChange}
                >
                    <option value="">Sort by Level</option>
                    {difficultyLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                    ))}
                </select>
            </div>

            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-10">
                {filteredAssignments.map(assignment => (
                    <AssignmentCard key={assignment._id} data={assignment} />
                ))}
            </div>
        </div>
    );
};

export default Assignment;
