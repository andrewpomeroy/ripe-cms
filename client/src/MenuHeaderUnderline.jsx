/** @jsx h */
import { h } from 'preact';
import styled from '@emotion/styled'

const menuUnderlinePaddingTop = "12px";
const menuUnderlinePaddingBottom = "20px";

export default function MenuHeaderUnderline ({width, endFillerWidth}) {
  return (
    <UnderlineWrapper width={width}>
      <UnderlineEndCap />
      <UnderlineOutsideFiller width={endFillerWidth} />
      <UnderlineMiddleBreak />
      <UnderlineFiller />
      <UnderlineMiddle />
      <UnderlineFiller />
      <UnderlineMiddleBreak />
      <UnderlineOutsideFiller width={endFillerWidth} />
      <UnderlineEndCap />
    </UnderlineWrapper>
  )
}

const height = "31px";
const UnderlineWrapper = styled.div`
  margin-top: ${menuUnderlinePaddingTop};
  margin-bottom: ${menuUnderlinePaddingBottom};
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.width};
  display: flex;
`
const UnderlineMiddle = styled.div`
  flex: 0 0 auto;
  height: ${height};
  width: ${height};
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAYAAABPjLqRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGU5MywgMjAyMi8wMy8xNC0xNDowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkE5NTE5MjRCMzAxMTFFQ0I3QUFBOENFOUU2RjFBRjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkE5NTE5MjVCMzAxMTFFQ0I3QUFBOENFOUU2RjFBRjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTk1MTkyMkIzMDExMUVDQjdBQUE4Q0U5RTZGMUFGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QTk1MTkyM0IzMDExMUVDQjdBQUE4Q0U5RTZGMUFGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrMUK+0AAAUaSURBVHja7Jw/c9MwFMAVsjDmG5Bm6RjzCZpely69CxsbychE+QRtR6bQCbYknyDhWFi4OBtMOBvXJekGW0a2omfJF2PL9tNfy8C7U3O1E0n+6en5vSfZLXJxdk0ICcnHzyH5L3m5OBvQv1CetOg/D/zwnpYlLbcUXOSwMx36N+AdAjnhn2v+CYMY0T7tHfYJ+vOKliEtneRwGlZaZrS8ttpBNmJJhzCSDGRoeeAmtIxEp4tgJZo2pp1bWhi1SUqTZAVg3RiHdnEGgzZNa1JWHnEoIoEfLWglI4MdAvv4TQMU4b9d8bpM9WsUX2sxKGAUtlJT4kWR+nENm2l2aFpSP8guVUC6qVIkM9qvsQFQ08L6CZknWtwS2JEJN7jmgBWD2qc6FJVM22QgO0aBFYOKuM0O/7RZYiO3KJgq8sCKQS15h3bIerp8IIdGgJWDOhXd3FoKF4kHVlwHQHqrqA2XHJo6MAVQIO3CCu+2H8hxryuYkkN6/J6ejxRBAez3yjbmbvslbj+vYUHcX+i3BVDlsHSAmdDK8n5FSsA0QFXDUgFmG5QqME1QOFgywFyBkgVmAFS5gZedXiymcwcKpzUzHmNqg5KHhXMu3YLCOZfaoPDTEDcl6wNVPiWNgFKDhQPmFhQemDKoJJD+l0QrL9ZWtA9VdgvnuLq3WzjH1RgsvIF3Cwxv4JWBtQ2BGvMMQlALsHI/6g0t5yaAtY2AAmOuG0vaAXUap1l0YklpWFjP3DUwrGeuGktKwYLc1nHvnZRn7gqYbAhTBey4t6bf+aUGi2UoF4L5Xu1H2QamGuuVAYPrPO59pd/5gQ93DmtmI22H00ZgbSIors67C9dOW6lVkj4n3DUawpgEZih7gHQ1drzeTRrWA6JqvTVEMylqc6AOdVauFcqGOwDoqdZiK8uNi6BMUeuSNkCxfrFrY9eISNEUaxZc3Nzoyq+KhtkClW9nQMrXTmNYq9RU2/BOhNb2OcgAcwUq6y6xZcCA2/FO8d3QTRxXDawOUJXTsC4pjzOJb6DqhSWXwagdlHo+y5TgU9S1g6ofFg6YF6CwfpYLWZecm/sAyg/Nqg47zmtJUXsHC58KHvoArO0hKADyidSVovbOZlU7nHqx5F+jWfhUcD05fW9gyaeCvQLW9haUh8DaXoPyDFjbAShIdyy0PfNyYBt6/nuzA2mWG9qSfNpWJxUsCr6hniPbnr5t12FiFBQIcyvCzNHkAaWGahbb5L/NHN0Rls/fG9BYeAaomzlzhH4IwTPNuhIcGxuZKqyOMbLNRsDKrvqafVqW1bWsaLMBsNgdMGurbi20NM/ZLtZ2ozQryN2tTD/kybRrSfLPSwZNgyW6A9qSqKJt72GdCO6CtmRX0XbjUjT3Da3bCazsaPctXkNf4M03ClZ2tLsWYWXr3jRdswLudduIPQNX9tEWrBDhpNpwfIva9hgWi88iB6HIVc6NaGhsOM/ZFrMvrrgU2Kt5U2PDmeDOdMU3+OqCSl7Rkr0LzpoJi2UGbgRnVlrA2G9XgjM3tpN/dtPK7LUCg8x0eUzLc3r8p3TunG2YFb0zBjIaL5vqlKblmeB2Dhc7jbdoYrIE8B22nVMEasfbsC5uNrMdpk6nxC9bcodyl3I2+9w9KHJqYdqduno5mrudfyzNvDCYQolijbLoKtQH6wDt2oDPBcb82nXX3e91uNvC839zPiVltWzGtWlJapC6N+B2uE064XZpIAhdYJqtY5tW8w7A3wIMALld74HKjK9lAAAAAElFTkSuQmCC");
  background-repeat: no-repeat;
  background-size: ${height} ${height};
  `
const UnderlineFiller = styled.div`
  flex: 1;
  height: ${height};
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABHCAYAAADGFC34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGU5MywgMjAyMi8wMy8xNC0xNDowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTI4NUM4NDlCMzcwMTFFQ0I3QUFBOENFOUU2RjFBRjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTI4NUM4NEFCMzcwMTFFQ0I3QUFBOENFOUU2RjFBRjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTk1MTkyNkIzMDExMUVDQjdBQUE4Q0U5RTZGMUFGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMjg1Qzg0OEIzNzAxMUVDQjdBQUE4Q0U5RTZGMUFGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlzGhHcAAAA1SURBVHjaYmDwdd7PxMDA4AAiGMAEM4O6EiMD/YCvcwPI3nqEC0DEAYb///8zoIoNSQIgwADy6weF3iH7fQAAAABJRU5ErkJggg==");
  background-repeat: repeat-x;
  background-size: ${height} ${height};
`
const UnderlineMiddleBreak = styled.div`
  flex: 0 0 auto;
  height: ${height};
  width: 1px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABHCAYAAADGFC34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGU5MywgMjAyMi8wMy8xNC0xNDowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTdDRTlBQzJCMzk1MTFFQ0I3QUFBOENFOUU2RjFBRjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTdDRTlBQzNCMzk1MTFFQ0I3QUFBOENFOUU2RjFBRjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Rjg2MDJDQkIzOTIxMUVDQjdBQUE4Q0U5RTZGMUFGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Rjg2MDJDQ0IzOTIxMUVDQjdBQUE4Q0U5RTZGMUFGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv0/HnQAAAAySURBVHjaYmDwdd7PxMDA4AAiGMAEM4O6EiMD/YCvswOaC0DEA4b///8zoIoNSQIgwACfowcm5qi96QAAAABJRU5ErkJggg==");
  background-size: 1px ${height};
`
const UnderlineOutsideFiller = styled.div`
  flex: 0 0 ${props => props.width};
  height: ${height};
  width: ${props => props.width}px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABHCAYAAADGFC34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGU5MywgMjAyMi8wMy8xNC0xNDowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTdDRTlBQzZCMzk1MTFFQ0I3QUFBOENFOUU2RjFBRjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTdDRTlBQzdCMzk1MTFFQ0I3QUFBOENFOUU2RjFBRjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFN0NFOUFDNEIzOTUxMUVDQjdBQUE4Q0U5RTZGMUFGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFN0NFOUFDNUIzOTUxMUVDQjdBQUE4Q0U5RTZGMUFGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuwaUEQAAAApSURBVHjaYmDwdd7PxMDA4AAiGMAEM4O6EiPD////GRBiowTZBECAAQC4fgVihMyf8QAAAABJRU5ErkJggg==");  background-repeat: repeat-x;
  background-size: 1px ${height};
`
const UnderlineEndCap = styled.div`
  flex: 0 0 auto;
  height: ${height};
  width: 1px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABHCAYAAADGFC34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGU5MywgMjAyMi8wMy8xNC0xNDowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTlCQTM1RENCMzkyMTFFQ0I3QUFBOENFOUU2RjFBRjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEY4NjAyQzJCMzkyMTFFQ0I3QUFBOENFOUU2RjFBRjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OUJBMzVEQUIzOTIxMUVDQjdBQUE4Q0U5RTZGMUFGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1OUJBMzVEQkIzOTIxMUVDQjdBQUE4Q0U5RTZGMUFGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsbblBgAAAAoSURBVHjaYmDwde5nYmBgMAARDGCCmUFdiZHh////DAixUYJsAiDAAGEOBSIVeX1RAAAAAElFTkSuQmCC");
  background-size: 1px ${height};
`