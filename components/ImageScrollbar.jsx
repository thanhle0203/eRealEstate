import { useContext } from "react";
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={scrollPrev}
        fontSize="2xl"
        cursor="pointer"
      >

      </Icon>
    </Flex>
  )
}

const RightArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Flex justifyContent="center" alignItems="center" marginRight="1">
        <Icon
          as={FaArrowAltCircleRight}
          onClick={scrollNext}
          fontSize="2xl"
          cursor="pointer"
        >
  
        </Icon>
      </Flex>
    )
  }

const ImageScrollbar = () => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>

  </ScrollMenu>
)