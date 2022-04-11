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
} from './RenderComponents';

export const Renderer = ({ data }) => {

  let menus;
  if (data) {
    menus = data.result;
  }

  if (menus) return (
    <MenuContainer>
      <Menus>
        {menus.map(menu => 
          <MenuWrapper key={menu.title}>
            <Menu key={menu.title}>
              <MenuTitle>{menu.title}</MenuTitle>
              <MenuColumns>
                {menu.columns.map((column) => (
                  <MenuColumn>
                    <MenuSections>
                      {column.content.map(({ menuSectionHeading, menuSectionItems }) => (
                        <MenuSection>
                          <MenuSectionHeading>{menuSectionHeading}</MenuSectionHeading>
                          <MenuItems>
                            {menuSectionItems.map(item => (
                              <MenuItem>
                                <MenuItemPrice>{item.price}</MenuItemPrice>
                                <MenuItemName>{item.name}</MenuItemName>
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
        )}
      </Menus>
    </MenuContainer>
  );
  else return null;
};
