import React, { Component } from 'react'
import Style from './MainWindow.css'
import LeftMenu from './LeftMenu'

class MainWindow extends Component {
    render () {
        return (
            <div className={Style["main-box"]}>
                <LeftMenu/>
            </div>
        )
    }
}

export default MainWindow