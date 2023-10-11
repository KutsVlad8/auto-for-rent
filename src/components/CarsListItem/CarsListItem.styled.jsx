import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
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

export const Price = styled.span``;

export const AttributeList = styled.ul`
  list-style: none;
  padding: 0px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const AttributeListItem = styled.li`
  position: relative;
  margin-right: 12px;

  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  &:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    right: -6px;
    width: 1px;
    height: 15px;

    background-color: rgba(18, 20, 23, 0.5);
  }

  &:last-child {
    &:after {
      display: none;
    }
  }
`;

export const Btn = styled.button`
  width: 100%;
  height: 44px;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;

  border-radius: 12px;
  background: #3470ff;

  outline: none;
  border: none;
  cursor: pointer;
`;

export const FavBtn = styled.button`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
