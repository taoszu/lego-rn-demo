import ViewConfig from "lego-rn/dist/core/config/view-config"
import ContainerView from "./view"
import React from 'react'
import CustomViewType from "../../const/view-type"

export default class ContainerConfig extends ViewConfig {

    viewType = () => CustomViewType.common.container

    render = (props:any) => {
        return <ContainerView {...props} />
    }

}