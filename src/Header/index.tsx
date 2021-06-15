import {HeaderProps} from './types'

export const Header = ({logo,alt}:HeaderProps)=>(
    <div className="App-header">
        <img src={logo} className="App-logo" alt={alt}/>
    </div>);