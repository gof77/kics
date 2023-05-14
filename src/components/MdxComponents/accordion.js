import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import Collapsible from 'react-collapsible';
import { ChevronUp, ChevronDown } from 'react-feather';
import { renderToStaticMarkup } from 'react-dom/server';
import emoji from '../../utils/emoji';
import { shadowAround } from '../../styles';

const AccordionWrapper = styled.div`
margin: 10px 0;
& > div {
    ${(props) => shadowAround(props.theme)};
    border-radius: 4px;


    & > span {
        &.is-open {
            border-bottom: 1px solid ${(props) => props.theme.colors.border};
            &:after {
                content: url('data:image/svg+xml; utf8, ${(props) => props.openImg}');
            }
        }
        &:hover {
            border: 1px solid ${(props) => props.theme.colors.primary};
            background-color: #ffe8d6;
        }
        &:after {
            content: url('data:image/svg+xml; utf8, ${(props) => props.closedImg}');
            float: right;
        }
        transition: ${(props) => props.theme.transitions.hover};
        border: 1px solid transparent;
        font-weight: 500;
        padding: 16px;
        cursor: pointer;
        display: block;
        width: 100%;
        background-color: #b7b7a4;
    }

    & > div > div {
        padding: 8px 16px;
        background-color: #ffe8d6;
    }
}
`;

export default ({ title, titleWhenOpen, expanded, children, ...props }) => {
  const theme = useTheme();
  const color = encodeURIComponent(theme.colors.primary); // replace # to not follow uri as usual
  const closed = renderToStaticMarkup(<ChevronDown size={22} color={color} />);
  const open = renderToStaticMarkup(<ChevronUp size={22} color={color} />);
  const triggerWhenOpen = titleWhenOpen ? titleWhenOpen : title;
  return (
    <AccordionWrapper theme={theme} openImg={open} closedImg={closed}>
      <Collapsible
        lazyRender={true}
        // trigger={emoji.emojify(title)}
        // triggerWhenOpen={emoji.emojify(triggerWhenOpen)}
        trigger={<span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black' }}>{emoji.emojify(`✐ ( ${title} )`)}</span>}
        triggerWhenOpen={<span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'teal' }}>{emoji.emojify(triggerWhenOpen)}</span>}
        {...props}
      >
        {children}
      </Collapsible>
    </AccordionWrapper>
  );
};
