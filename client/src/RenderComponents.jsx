import styled from '@emotion/styled'

const sectionMarginY = "80px";
const menuMarginX = "20px";
const menuMarginY = "40px";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: ${sectionMarginY} 0;
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
  margin-bottom: ${menuMarginY};
`

export const Menu = styled.div`
  padding: 1rem;
  border-radius: 5px;
  background-color: white;
`

export const MenuTitle = styled.h3`
  text-align: center;
  font-size: 38px;
  margin: .25em 0 .5em;
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
    margin-bottom: 18px;
  }
`
export const MenuSectionHeading = styled.h4`
  font-size: 18px;
  padding-bottom: .05em;
  border-bottom: 2px solid;
  margin-bottom: 24px;
`
export const MenuItems = styled.ul``
export const MenuItem = styled.li`
  margin-bottom: 24px;
`
export const MenuItemName = styled.h5`
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  margin-bottom: 4px;
`
export const MenuItemPrice = styled.div`
float: right;
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
`
export const MenuItemDescription = styled.div`
  p {
    font-size: 15px;
    margin-bottom: 0;
    line-height: 1.25;
  }
`
