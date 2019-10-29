import React from 'react';

export default class PlayBtn extends React.component{
    constructor(props) {
        super(props)
        this.state = { }
    }


    render() {
        return(
            <div className="playBtn">
                <button onClick={()=>{}}>Play</button>
            </div>
        )
    }
}