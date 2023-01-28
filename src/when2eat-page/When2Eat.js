import './When2Eat.css'
import { Dispatch, SetStateAction, useState } from "react";

function ControlledInput({value, setValue, ariaLabel}) {
    return (
      <input id='listings-user-input' value={value} 
             onChange={(ev) => setValue(ev.target.value)}
             aria-label={ariaLabel}
             ></input>
    )
  }

function submitPost() {
    return null;
}

function When2Eat() {
    const [input, setInput] = useState("")
    // const [notif, setNotif] = useState<string>("")

    return (
        <div className="when2eat">
            <label id="when2eat-header"> schedule when2eat! </label>
            <div className="when2eat-container">
                <div className="personal-schedule">

                    <div className="preference-container-outer">
                        <label id="preference-label">Dine-in or Takeout?</label>
                        <div className="preference-container-inner">
                            <button id="dinein-takeout-button">Dine-in</button>
                            <button id="dinein-takeout-button">Takeout</button>
                        </div>
                    </div>

                    <div className="preference-container-outer">
                        <label id="preference-label">Where?</label>
                        <div className="preference-container-inner">
                            <button id="where-button">Ratty</button>
                            <button id="where-button">Ivy Room</button>
                            <button id="where-button">Andrews</button>
                            <button id="where-button">V-Dub</button>
                            <button id="where-button">Jo's</button>
                            <button id="where-button">Blue Room</button>
                            <button id="where-button">ERC Cafe</button>
                        </div>
                    </div>

                    <div className='preference-container-outer'>
                        <label id="preference-label">Preferred Party Size?</label>
                        <div className="preference-container-inner">
                            <fieldset id="preference-fieldset">
                                <legend id="preference-legend">Enter number here:</legend>
                                <ControlledInput value={input} setValue={setInput} ariaLabel={"command"}/>
                            </fieldset>
                        </div>
                    </div>

                    <button id="when2eat-button" 
                            onClick={() => {
                                submitPost() // put some input stuff here 
                            }}>submit!</button>

                </div>
                <div className="meal-container">
                    <label id="when2eat-label">see who's eating!</label>
                        <label id="meal-label">breakfast</label>
                    <div className="meal-postings">

                    </div>

                    <label id="meal-label">lunch</label>

                    <div className="meal-postings">
                    </div>

                    <label id="meal-label">dinner</label>
                    <div className="meal-postings">
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default When2Eat;