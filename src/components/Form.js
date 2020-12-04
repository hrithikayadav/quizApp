import React from 'react'
import { Link } from 'react-router-dom'

export default function Form() {
    return (
        <React.Fragment>
            
            <div className="FormComponent"> 
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>

                    <label>
                        Class
                        <select >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="2">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </label>

                    <label>
                        Phone Number:
                        <input type="text" name="name" maxlength="10" pattern="[0-9]"/>
                    </label>
                    <Link  to="/confirmationPage"> <input class="btn btn-primary"type="submit" value="Submit" /></Link>
                    

                </form>
            </div>
            </React.Fragment>
    )
}
