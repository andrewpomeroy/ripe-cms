import styled from '@emotion/styled'

// const sectionMarginY = "80px";
const menuPaddingY = "40px";
const menuPaddingX = "28px";
const menuMarginY = '40px';
const menuMarginX = '40px';
const menuHeaderPaddingY = "12px";
const sectionMarginY = "20px";
const menuItemPaddingY = "28px";

const menuColumnBreakpoint = "700px";
// const mobileBreakpoint = "700px";
const halfMarginBreakpoint = "1350px";

const atHalfMarginSize = (styles) => `@media screen and (max-width: ${halfMarginBreakpoint}) { ${styles} }`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const Menus = styled.ul`
  max-width: 100%;
  flex: 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  padding-left: calc(${menuPaddingX} / 2);
  padding-right: calc(${menuPaddingX} / 2);
  ${atHalfMarginSize(`
    margin-left: calc(${menuPaddingX} / 4);
    margin-right: calc(${menuPaddingX} / 4);
  `)}
  margin-bottom: -${menuMarginY};
  justify-content: center;
  flex: 1;
`

const menuMaxWidth = 900;
const singleColumnMenuMaxWidth = 720;

export const MenuWrapper = styled.li`
  
  flex: 1;
  // max-width: ${props => props.isSingleColumn ? singleColumnMenuMaxWidth : menuMaxWidth}px;
  max-width: ${menuMaxWidth}px;
  margin-left: ${menuPaddingX};
  margin-right: ${menuPaddingX};
  ${atHalfMarginSize(`
    margin-left: calc(${menuPaddingX} / 2);
    margin-right: calc(${menuPaddingX} / 2);
  `)}
  margin-bottom: ${menuMarginY};
`

export const MenuBackgroundWrapper = styled.div`
  background-color: #fefaf4;
  // Prevent collapsing borders & retain background color
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
`

export const Menu = styled.div`
  padding-bottom: ${menuHeaderPaddingY};
  padding-left: 40px;
  padding-right: 40px;
  ${atHalfMarginSize(`
    padding-left: 20px;
    padding-right: 20px;
  `)}
  margin: ${menuMarginY} ${menuMarginX};
  border-radius: 5px;
  border: 30px solid;
  border-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAYAAAA/mZ5CAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGU5MywgMjAyMi8wMy8xNC0xNDowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NDc4NTNlYi00MTc3LTRmNDctYjhjOS1jODA5YTFjZDQwYzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkE5NTE5MjFCMzAxMTFFQ0I3QUFBOENFOUU2RjFBRjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkE5NTE5MjBCMzAxMTFFQ0I3QUFBOENFOUU2RjFBRjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NDc4NTNlYi00MTc3LTRmNDctYjhjOS1jODA5YTFjZDQwYzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTQ3ODUzZWItNDE3Ny00ZjQ3LWI4YzktYzgwOWExY2Q0MGM1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");
  border-image-slice: 70;
`

export const MenuHeader = styled.div`
  padding-top: ${menuHeaderPaddingY};
  // margin-bottom: ${menuPaddingY};
`
export const MenuTitle = styled.h3`
  text-align: center;
  font-size: 28px;
  line-height: 1.2;
  margin: 0 0 .125em;
`
export const MenuSubtitle = styled.div`
  & p {
    margin: 0;
    text-align: center;
    font-size: 20px;
    font-style: italic;
  }
`

const columnMarginX = "28px";

export const MenuColumns = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: ${menuColumnBreakpoint}) {
    flex-direction: column;
  }
  margin-left: -${columnMarginX};
  margin-right: -${columnMarginX};
  // ${atHalfMarginSize(`
  //   margin-left: calc(-${columnMarginX} / 2);
  //   margin-right: calc(-${columnMarginX} / 2);
  // `)}
  margin-bottom: -${sectionMarginY};
`
export const MenuColumn = styled.li`
  flex: 1;
  margin-left: ${columnMarginX};
  margin-right: ${columnMarginX};
  // ${atHalfMarginSize(`
  //   margin-left: calc(${columnMarginX} / 2);
  //   margin-right: calc(${columnMarginX} / 2);
  // `)}
  margin-bottom: ${sectionMarginY};
`

export const MenuSections = styled.ul``
export const MenuSection = styled.li`
  &:not(:last-child) {
    margin-bottom: ${sectionMarginY};
  }
`

export const MenuSectionHeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const MenuSectionHeading = styled.h4`
  flex: 0 0 auto;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  // padding-bottom: .05em;
  margin: 0 0 ${sectionMarginY};
  // border-bottom: 2px solid;
  text-align: center;
`

export const MenuSectionSeparator = styled.hr`
  border-top: 0;
  border-bottom: 1px solid;
  margin: 0 auto;
  margin-bottom: ${menuItemPaddingY};
  max-width: 66%;
`
export const MenuItems = styled.ul``
export const MenuItem = styled.li`
  &:not(:last-child) {
    padding-bottom: ${menuItemPaddingY};
  }
`
export const MenuItemName = styled.h5`
  font-size: 17px;
  line-height: 18px;
  font-weight: 500;
  // font-weight: 600;
  padding-bottom: 4px;
  text-align: center;
  @media print {
    font-size: 9pt
  }
`
export const MenuItemPrice = styled.span`
  // float: right;
  font-size: 16px;
  line-height: 18px;
  padding-left: 10px;
  padding-top: ${props => props.hasTitle ? '2px' : 0};
  text-transform: none;
  @media print {
    font-size: 9pt
  }
`
export const MenuItemDescription = styled.span`
  p {
    display: inline;
    font-size: 15px;
    margin-bottom: 0;
    line-height: 1.25;
    text-transform: none;
  }
`