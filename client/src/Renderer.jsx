/** @jsx h */
import { h } from 'preact';
import { toHTML } from '@portabletext/to-html';
import {
  MenuSectionHeading,
  MenuContainer,
  Menus,
  Menu,
  MenuWrapper,
  MenuTitle,
  MenuColumns,
  MenuColumn,
  MenuItem,
  MenuItemPrice,
  MenuItemName,
  MenuItemDescription,
  MenuSubtitle,
  MenuHeader,
  MenuSectionSeparator,
  MenuBackgroundWrapper,
  MenuSectionHeadingWrapper,
} from './RenderComponents';
import MenuHeaderUnderline from './MenuHeaderUnderline';

export const Renderer = ({ data }) => {

  let menus;
  if (data) {
    menus = data.result;
  }

  // const menuIds = ['daytimeMenu', 'eveningWeekendMenu'];
  const menuColumns = ['menuColumnLeft', 'menuColumnRight']
  
  
  if (menus) return (
    <MenuContainer>
      <Menus>
        {menus.map((menu, index) => {
          // const isSingleColumn = menu.columns?.length === 1;
          const isSingleColumn = true;
          // if (index === 1) return null;
          // if (index === 0) return null;
          return (
            <MenuWrapper key={menu.title} isSingleColumn={isSingleColumn}>
              <MenuBackgroundWrapper>
                <Menu key={menu.title} isSingleColumn={isSingleColumn}>
                  <MenuHeader>
                    <MenuTitle>{menu.title}</MenuTitle>
                    {menu.subtitle?.length && <MenuSubtitle dangerouslySetInnerHTML={{
                      __html: toHTML(menu.subtitle)
                    }} />}
                  </MenuHeader>
                  <MenuHeaderUnderline width="75%" endFillerWidth="32px" />
                  <MenuColumns>
                    {menuColumns.filter(columnName => menu[columnName]?.length).map((columnName, index) => {
                      if (index === 1 ) return null;
                      const column = menu[columnName];
                      if (!column) return;
                      const isSingleColumn = menuColumns.filter(columnName => menu[columnName]?.length).length === 1;
                      return <MenuColumn isSingleColumn={isSingleColumn}>
                        {column.map((item, index) => {
                          // if (index === 0 ) return null;
                          // if (index === 1 ) return null;
                          if (item._type === 'menuSubHeading') {
                            return (
                              <div>
                                <MenuSectionSeparator />
                                <MenuSectionHeadingWrapper key={item.key}>
                                  <MenuSectionHeading key={item.key} isSingleColumn={isSingleColumn}>{item.menuSubHeadingText}</MenuSectionHeading>
                                  {/* {isSingleColumn && <MenuSectionSeparator />} */}
                                </MenuSectionHeadingWrapper>
                              </div>
                            )
                          }
                          if (item._type === 'menuSeparator') {
                            return <MenuSectionSeparator isSingleColumn={isSingleColumn} />
                          }
                          if (item._type === 'menuItem') {
                            return (
                              <MenuItem key={item.key} isSingleColumn={isSingleColumn}>
                                {item.name && <MenuItemName>{item.name}{" "}
                                {
                                  item.description && <MenuItemDescription dangerouslySetInnerHTML={{
                                    __html: toHTML(item.description)
                                  }} />
                                }
                                {item.price && <MenuItemPrice hasTitle={item.name}>{item.price}</MenuItemPrice>}</MenuItemName> }
                              </MenuItem>
                            )
                          }
                        })}
                      </MenuColumn>
                    })}
                  </MenuColumns>
                </Menu>
              </MenuBackgroundWrapper>
            </MenuWrapper>
          )
        }
        )}
      </Menus>
    </MenuContainer>
  );
  else return null;
};
