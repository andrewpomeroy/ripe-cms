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
        {menus.map(menu => {
          const isSingleColumn = menu.columns?.length === 1;
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
                  <MenuHeaderUnderline width="90%" endFillerWidth="32px" />
                  <MenuColumns>
                    {menuColumns.filter(columnName => menu[columnName]?.length).map(columnName => {
                      const column = menu[columnName];
                      if (!column) return;
                      const isSingleColumn = menuColumns.filter(columnName => menu[columnName]?.length).length === 1;
                      return <MenuColumn isSingleColumn={isSingleColumn}>
                        {column.map(item => {
                          if (item._type === 'menuSubHeading') {
                            return (
                              <div key={item.key}>
                                <MenuSectionHeading key={item.key} isSingleColumn={isSingleColumn}>{item.menuSubHeadingText}</MenuSectionHeading>
                                {isSingleColumn && <MenuSectionSeparator />}
                              </div>
                            )
                          }
                          if (item._type === 'menuSeparator') {
                            return <MenuSectionSeparator isSingleColumn={isSingleColumn} />
                          }
                          if (item._type === 'menuItem') {
                            return (
                              <MenuItem key={item.key} isSingleColumn={isSingleColumn}>
                                { item.price && <MenuItemPrice hasTitle={item.name}>{item.price}</MenuItemPrice> }
                                { item.name && <MenuItemName>{item.name}</MenuItemName> }
                                {
                                  item.description && <MenuItemDescription dangerouslySetInnerHTML={{
                                    __html: toHTML(item.description)
                                  }} />
                                }
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
