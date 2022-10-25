// import './index.scss'

import * as riot from 'riot'

import ActiveFilters from './components/active_filters.riot'
import AuthorityLink from './components/authority_link.riot'
import Blockquote from './components/blockquote.riot'
import Facet from './components/facet.riot'
import FlyIn from './components/fly_in.riot'
import Icon from './components/icon.riot'
import Input from './components/input.riot'
import Loading from './components/loading.riot'
import OneBarChart from './components/one_bar_chart.riot'
import Pagination from './components/pagination.riot'
import PieChart from './components/pie_chart.riot'
import Popup from './components/popup.riot'
import RangeControl from './components/range_control.riot'
import Raw from './components/raw.riot'
import Tab from './components/tab.riot'

import {BusRiotPlugin} from './lib/bus'
import {RiotPlugins} from '@wendig/lib'

let configuration = {
  staticUrl: 'https://static.dfkg.org/public',
  apiUrl: ''
}

class DfkFrontend {
  static configure(newConfiguration) {
    Object.assign(configuration, newConfiguration)
  }

  static install() {
    RiotPlugins.setup(riot)
    riot.install(RiotPlugins.i18n)
    riot.install(RiotPlugins.parent)
    riot.install(RiotPlugins.setTitle)
    riot.install(BusRiotPlugin)
  }

  static mount() {
    for (const [k, v] of Object.entries(DfkFrontend.components())) {
      riot.register(k, v)
    }

    riot.mount('[is]')
  }

  static init(newConfiguration) {
    DfkFrontend.configure(newConfiguration)
    DfkFrontend.install()
    DfkFrontend.mount()
  }

  static config() {
    return configuration
  }

  static components() {
    return {
      'active-filters': ActiveFilters,
      'authority-link': AuthorityLink,
      'blockquote': Blockquote,
      'facet': Facet,
      'fly-in': FlyIn,
      'icon': Icon,
      'dfk-input': Input,
      'loading': Loading,
      'one-bar-chart': OneBarChart,
      'pagination': Pagination,
      'pie-chart': PieChart,
      'popup': Popup,
      'range-control': RangeControl,
      'raw': Raw,
      'tab': Tab
    }
  }
}

window.DfkFrontend = DfkFrontend

export default DfkFrontend
