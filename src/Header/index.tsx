import {HeaderProps} from './types'

export const Header:React.FC<HeaderProps> =({logo,alt})=>(
    <div className="App-header">
        <img src={logo} className="App-logo" alt={alt}/>
    </div>);