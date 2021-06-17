import React from 'react'
import {AppItemProps} from './types'

export const AppItem : React.FC<AppItemProps> =({title})=><div className={'App-item'}>{`Title is: ${title} !`}</div>
