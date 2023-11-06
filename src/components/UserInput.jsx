import { useState } from "react";

export default function UserInput({ onChangeProp, userInputProp }) {

    return (

        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="intitial-investment">Initial Investment</label>
                    <input
                        id="initial-investment"
                        type="number"
                        className="form-control"
                        name="initial-investment"
                        min={0}
                        required
                        onChange={(event) => onChangeProp('initialInvestment', parseInt(event.target.value))}
                        value={userInputProp.initialInvestment}
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input
                        id="annual-investment"
                        type="number"
                        className="form-control"
                        name="annual-investment"
                        min={0}
                        required
                        onChange={(event) => onChangeProp('annualInvestment', parseInt(event.target.value))}
                        value={userInputProp.annualInvestment}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input
                        id="expected-return"
                        type="number"
                        className="form-control"
                        name="expected-return"
                        min={0}
                        required
                        onChange={(event) => onChangeProp('expectedReturn', parseInt(event.target.value))}
                        value={userInputProp.expectedReturn}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input
                        id="duration"
                        type="number"
                        className="form-control"
                        name="duration"
                        min={0}
                        required
                        onChange={(event) => onChangeProp('duration', parseInt(event.target.value))}
                        value={userInputProp.duration}
                    />
                </p>
            </div>
        </section>


    )
}