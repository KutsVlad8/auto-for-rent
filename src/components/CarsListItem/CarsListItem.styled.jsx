import styled from '@emotion/styled';

export const Item = styled.li`
  flex-basis: calc((100% - 3 * 30px) / 4);

  border-radius: 4px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const CardThumb = styled.div``;

export const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 268px;
  border-radius: 4px;
  object-fit: cover;
`;

export const Cardcontent = styled.div`
  padding-top: 14px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
`;

export const TitleList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const TitleListItem = styled.li`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const Price = styled.span`
  margin-left: 107px;
`;

export const AttributeList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const AttributeListItem = styled.li`
  position: relative;
  margin-right: 30px;

  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: -15px;
    width: 1px;
    height: 15px;

    background-color: rgba(18, 20, 23, 0.5);
  }

  &:first-child {
    &:before {
      display: none;
    }
  }

  &: nth-child(6) {
    &:before {
      display: none;
    }
  }
`;
