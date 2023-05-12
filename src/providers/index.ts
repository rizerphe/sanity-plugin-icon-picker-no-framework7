import {PROVIDERS} from '../config'
import fa from './fa'
import fi from './fi'
import hi from './hi'
import mdi from './mdi'
import sa from './sa'
import si from './si'

const faPrefix = PROVIDERS.fontAwesome.prefix
const mdiPrefix = PROVIDERS.materialDesign.prefix
const saPrefix = PROVIDERS.sanity.prefix
const hiPrefix = PROVIDERS.hero.prefix
const fiPrefix = PROVIDERS.feather.prefix
const siPrefix = PROVIDERS.simpleicons.prefix

export default {
  [faPrefix]: fa(faPrefix),
  [mdiPrefix]: mdi(mdiPrefix),
  [saPrefix]: sa(saPrefix),
  [hiPrefix]: hi(hiPrefix),
  [fiPrefix]: fi(fiPrefix),
  [siPrefix]: si(siPrefix),
}
