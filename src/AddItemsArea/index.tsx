import {AddItemsAreaProps} from './types'

export const AddItemsArea = ({onAdd}:AddItemsAreaProps):JSX.Element=>(<div>
    <button className={"App-button"} onClick={onAdd}> Add More </button>
</div>);