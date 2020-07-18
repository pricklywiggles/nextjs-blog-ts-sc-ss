import { headingVariants, shapeVariants } from "../styles/theme";
import styled from "styled-components";
import { color, variant } from "styled-system";

interface HeadingSize {
  size: string;
}

interface ImageShape {
  shape: string;
}

interface Boo extends HeadingSize, ImageShape {}

export const Img = styled.img<ImageShape>`
  ${variant(shapeVariants)}
`;

export const H1 = styled.h1<HeadingSize>`
  ${variant(headingVariants)}
`;

export const H2 = styled.h2<HeadingSize>`
  ${variant(headingVariants)}
`;

export const H3 = styled.h3<HeadingSize>`
  ${color}
  ${variant(headingVariants)}
`;

export const A = styled.a`
  ${color}
`;

export const TextBox = styled.div<HeadingSize>`
  ${color}
  ${variant(headingVariants)}
`;

export const Box = styled.div`
  ${color}
`;

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin: 0 0 1.25rem;
`;
