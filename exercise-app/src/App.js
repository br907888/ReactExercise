import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";

const exercise = [
  { name: "Push-Ups", type: "repetition" },
  { name: "Plank", type: "duration" },
  { name: "Running", type: "running" },
];

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div>
      {!selectedExercise ? (
        <div>
          <h1>Please Select an Exercise</h1>
          {exercise.map((exercise, index) => (
            <button key={index} onClick={() => setSelectedExercise(exercise)}>
              {exercise.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedExercise(null)}>Back</button>
          {selectedExercise.type === "repetition" ? (
            <RepetitionExercise name={selectedExercise.name} />
          ) : selectedExercise.type === "duration" ? (
            <DurationExercise name={selectedExercise.name} />
          ) : selectedExercise.type === "running" ? (
            <RunningExercise name={selectedExercise.name} />
          ) : null}
        </div>
      )}
    </div >
  );
}

export default App;
