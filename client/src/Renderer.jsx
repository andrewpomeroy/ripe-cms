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
  MenuSections,
  MenuSection,
  MenuItems,
  MenuItem,
  MenuItemPrice,
  MenuItemName,
  MenuItemDescription,
  MenuSubtitle,
  MenuHeader,
  MenuSectionSeparator,
} from './RenderComponents';

export const Renderer = ({ data }) => {

  let menus;
  if (data) {
    menus = data.result;
  }
  
  if (menus) return (
    <MenuContainer>
      <Menus>
        {menus.map(menu => {
          const isSingleColumn = menu.columns?.length === 1;
          return (
            <MenuWrapper key={menu.title} isSingleColumn={isSingleColumn}>
              <Menu key={menu.title} isSingleColumn={isSingleColumn}>
                <MenuHeader>
                  <MenuTitle>{menu.title}</MenuTitle>
                  {menu.subtitle?.length && <MenuSubtitle dangerouslySetInnerHTML={{
                    __html: toHTML(menu.subtitle)
                  }} />}
                </MenuHeader>
                <MenuColumns>
                  {menu.columns.map((column) => (
                    <MenuColumn isSingleColumn={isSingleColumn}>
                      <MenuSections>
                        {column.content.map(({ menuSectionHeading, menuSectionItems }, index) => (
                          <MenuSection>
                            {menuSectionHeading 
                              ? (<MenuSectionHeading isSingleColumn={isSingleColumn}>{menuSectionHeading}</MenuSectionHeading>)
                              : (index !== 0 && <MenuSectionSeparator isSingleColumn={isSingleColumn} />)}
                            <MenuItems>
                              {menuSectionItems.map(item => (
                                <MenuItem>
                                  {item.price && <MenuItemPrice>{item.price}</MenuItemPrice>}
                                  {item.name && <MenuItemName>{item.name}</MenuItemName>}
                                  {item.description && <MenuItemDescription dangerouslySetInnerHTML={{
                                    __html: toHTML(item.description)
                                  }} />}
                                </MenuItem>
                              ))}
                            </MenuItems>
                          </MenuSection>
                        ))}
                      </MenuSections>
                    </MenuColumn>
                  ))}
                </MenuColumns>
              </Menu>
            </MenuWrapper>
          )
        }
        )}
      </Menus>
    </MenuContainer>
  );
  else return null;
};
