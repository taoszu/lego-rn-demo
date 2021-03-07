import ViewConfig from "lego-rn/dist/core/config/view-config"
import AppPageView from "./view"
import React from 'react'
import CustomViewType from "../../const/view-type"

export default class AppPageConfig extends ViewConfig {

    viewType = () => CustomViewType.common.appPage

    render = (props:any) => {
        return <AppPageView {...props} />
    }

}