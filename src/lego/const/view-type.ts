export default class CustomViewType {

    private static ModuleName = {
        common: 'common'
    }

    private static genViewTypeWithModule(moduleName: string, viewType: string) {
        return `${moduleName}-${viewType}`
    }

    static common = {
        appPage: CustomViewType.genViewTypeWithModule(CustomViewType.ModuleName.common, 'app-page'),
        container: CustomViewType.genViewTypeWithModule(CustomViewType.ModuleName.common, 'container'),
    }


}
