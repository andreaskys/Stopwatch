import React, {useState, useEffect, useRef} from "react";

function stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const starTimeRef = useRef(0);

    useEffect(() => {

    }, [isRunning]);

    function start(){

    }

    function stop(){

    }

    function reset(){

    }

    function formatTime(){

        return'00:00:00';
    }

    return(
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                
                <button 
                className="startButton"
                onClick={start}>
                Start
                </button>

                <button 
                className="stopButton"
                onClick={stop}>
                Stop
                </button>

                <button 
                className="resetButton"
                onClick={reset}>
                Reset
                </button>
            </div>
        </div>
    )
}

export default stopwatch;