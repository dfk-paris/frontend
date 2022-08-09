import './demo.scss'

import * as riot from 'riot'

import DfkFrontend from './index'
import Demo from './demo.riot'

DfkFrontend.install()

riot.register('demo', Demo)
riot.mount('dfk-widget[is]')
