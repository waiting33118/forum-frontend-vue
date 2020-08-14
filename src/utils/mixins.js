import moment from 'moment'
moment.locale('zh-tw')
export const fromNowFilter = {
  filters: {
    fromNow (datetime) {
      return moment(datetime).fromNow()
    }
  }
}
