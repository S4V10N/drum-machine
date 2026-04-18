// import reactLogo from "./assets/react.svg";
import { useState } from "react";
// import viteLogo from "./assets/vite.svg";

function App() {
    const audio = [
        {
            name: "q",
            label: "heater 1",
            src: "/src/assets/audio/Heater-1.mp3",
        },
        {
            name: "w",
            label: "heater 2",
            src: "/src/assets/audio/Heater-2.mp3",
        },
        {
            name: "e",
            label: "heater 3",
            src: "/src/assets/audio/Heater-3.mp3",
        },
        {
            name: "a",
            label: "heater 4",
            src: "/src/assets/audio/Heater-4.mp3",
        },
        {
            name: "s",
            label: "clap",
            src: "/src/assets/audio/Heater-5.mp3",
        },
        {
            name: "d",
            label: "Open HH",
            src: "/src/assets/audio/Heater-6.mp3",
        },
        {
            name: "z",
            label: "Kick n' Hat",
            src: "/src/assets/audio/Heater-7.mp3",
        },
        {
            name: "x",
            label: "Kick",
            src: "/src/assets/audio/Heater-8.mp3",
        },
        {
            name: "c",
            label: "Closed HH",
            src: "/src/assets/audio/Heater-9.mp3",
        },
    ];
    const playSound = (aud: string) => {
        const audio = new Audio(aud);
        audio.play();
    };
    const [text, setText] = useState("");
    const [choice, setChoice] = useState("on");
    const handleClick = (label: string) => {
        setText(label);
    };
    return (
        <>
            <section className="w-full" id="drum-machine">
                <form
                    action=""
                    className="text-white font-bold uppercase w-full mb-5 relative  "
                >
                    <div>
                        <p>Power</p>
                        <div className="bg-black w-fit flex place-content-center justify-between p-1 rounded">
                            <input
                                type="radio"
                                name="power"
                                className=" cursor-pointer appearance-none w-6 h-5 rounded checked:bg-fuchsia-100"
                                checked={choice === "on"}
                                onChange={(e) => setChoice(e.target.value)}
                                id="on"
                                value="on"
                            />
                            <input
                                type="radio"
                                name="power"
                                className=" cursor-pointer appearance-none w-6 h-5 rounded checked:bg-fuchsia-100"
                                checked={choice === "off"}
                                onChange={(e) => setChoice(e.target.value)}
                                id="off"
                                value="off"
                            />
                        </div>
                    </div>

                    <div className="absolute bottom-0  right-0 p-2 bg-black rounded">
                        <h2 id="display">{text}</h2>
                    </div>
                </form>

                <section className="grid grid-cols-3 gap-4 w-screen max-w-85 sm:max-w-140">
                    {audio.map((obj) => {
                        return (
                            <button
                                className="drum-pad w-full border-none h-20 rounded bg-fuchsia-300 cursor-pointer flex justify-center items-center font-bold capitalize"
                                onClick={() => {
                                    playSound(obj.src);
                                    handleClick(obj.label);
                                }}
                                disabled={choice === "off"}
                            >
                                {obj.name}
                            </button>
                        );
                    })}
                </section>
            </section>
        </>
    );
}

export default App;
