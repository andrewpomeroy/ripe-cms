import { Flex, Stack, Box, Text } from '@sanity/ui';
import React from 'react';
import { BiRestaurant } from 'react-icons/bi'

const menuItem = {
  name: "menuItem",
  type: "object",
  title: "Item",
  icon: BiRestaurant,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "description",
      title: "Description",
      type: 'array',
      of: [{ type: 'block',
        styles: [],
        lists: []
      }]
    },
    {
      name: "price",
      type: "string",
      title: "Price",
      description: "Aligned to the right of the column. Just keep it simple — if pricing is complicated, leave this blank and instead include pricing info in the description"
    }
  ],
  preview: {
    select: {
      name: 'name',
      description: 'description',
      price: 'price',
    },
    component: function Preview ( { value: { name, description, price} }) {
      return (
        <Flex direction="row" align="center">
          <Box marginLeft={1} padding={1}>
            <BiRestaurant size={21} />
          </Box>
          <Stack marginLeft={3} space={2} flex={1}>
            <Text>{name}{price ? <span style={{ color: 'var(--card-muted-fg-color)' }}> (${price})</span> : ''}</Text>
            <Text size={1} muted>{description}</Text>
          </Stack>
        </Flex>
      )
    }
  },
}

export default menuItem;
