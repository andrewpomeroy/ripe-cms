import styled from '@emotion/styled'

// const sectionMarginY = "80px";
const menuMarginX = "20px";
const menuMarginY = "40px";
const menuHeaderPaddingY = "32px";

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
  padding-left: calc(${menuMarginX} / 2);
  padding-right: calc(${menuMarginX} / 2);
  margin-bottom: -${menuMarginY};
`

export const MenuWrapper = styled.li`
  flex: 1 1 ;
  width: 100%;
  min-width: 400px;
  max-width: 1600px;
  margin-left: ${menuMarginX};
  margin-right: ${menuMarginX};
  padding-bottom: ${menuMarginY};
`

export const Menu = styled.div`
  padding: 0 40px ${menuHeaderPaddingY};
  border-radius: 5px;
  background-color: #fefaf4;
`

export const MenuHeader = styled.div`
  padding: ${menuHeaderPaddingY} 0;
`
export const MenuTitle = styled.h3`
  text-align: center;
  font-size: 38px;
  margin: 0 0 .125em;
`
export const MenuSubtitle = styled.div`
  p {
    margin: 0;
    text-align: center;
    font-size: 24px;
    font-style: italic;
  }
`

const columnMarginX = "20px";

export const MenuColumns = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: -${columnMarginX};
  margin-right: -${columnMarginX};
`
export const MenuColumn = styled.li`
  flex: 1;
  margin-left: ${columnMarginX};
  margin-right: ${columnMarginX};
`
export const MenuSections = styled.ul``
export const MenuSection = styled.li`
  &:not(:last-child) {
    padding-bottom: 18px;
  }
`
export const MenuSectionHeading = styled.h4`
  font-size: 18px;
  padding-bottom: .05em;
  margin-bottom: 24px;
  border-bottom: 2px solid;
`
export const MenuItems = styled.ul``
export const MenuItem = styled.li`
  &:not(:last-child) {
    padding-bottom: 24px;
  }
`
export const MenuItemName = styled.h5`
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  padding-bottom: 4px;
`
export const MenuItemPrice = styled.div`
float: right;
  font-size: 16px;
  line-height: 18px;
`
export const MenuItemDescription = styled.div`
  p {
    font-size: 15px;
    margin-bottom: 0;
    line-height: 1.25;
  }
`
