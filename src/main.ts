import { App } from "@vue/runtime-core";
import NavList from "./components/NavList.vue";
import {withInstall} from './utils/with-install'
const llcNavList = withInstall(NavList);

export {
  llcNavList
}